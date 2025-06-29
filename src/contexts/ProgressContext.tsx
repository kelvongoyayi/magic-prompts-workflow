import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedSections: Set<string>;
  markSectionComplete: (sectionId: string) => void;
  markSectionIncomplete: (sectionId: string) => void;
  toggleSectionComplete: (sectionId: string) => void;
  getCompletionPercentage: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'magic-prompts-progress';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedSections(new Set(parsed));
      } catch (error) {
        console.error('Failed to parse saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSections]));
  }, [completedSections]);

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
  };

  const markSectionIncomplete = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      newSet.delete(sectionId);
      return newSet;
    });
  };

  const toggleSectionComplete = (sectionId: string) => {
    if (completedSections.has(sectionId)) {
      markSectionIncomplete(sectionId);
    } else {
      markSectionComplete(sectionId);
    }
  };

  const getCompletionPercentage = () => {
    const totalSections = 12; // Total number of sections
    return Math.round((completedSections.size / totalSections) * 100);
  };

  const resetProgress = () => {
    setCompletedSections(new Set());
  };

  return (
    <ProgressContext.Provider value={{
      completedSections,
      markSectionComplete,
      markSectionIncomplete,
      toggleSectionComplete,
      getCompletionPercentage,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}