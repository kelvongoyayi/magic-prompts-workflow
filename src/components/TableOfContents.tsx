import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

const sections = [
  { id: 'overview', title: 'Overview', level: 1 },
  { id: 'checklist', title: 'Pre-Development Checklist', level: 1 },
  { id: 'phase1', title: 'Phase 1: Project Setup', level: 1 },
  { id: 'phase2', title: 'Phase 2: Review & Iterate', level: 1 },
  { id: 'phase3', title: 'Phase 3: Advanced Features', level: 1 },
  { id: 'phase4', title: 'Phase 4: Optimization', level: 1 },
  { id: 'phase5', title: 'Phase 5: Deployment', level: 1 },
  { id: 'magic-prompts', title: 'Magic Prompts Reference', level: 1 },
  { id: 'documentation-setup', title: 'Documentation Setup (Advanced)', level: 1 },
  { id: 'implementation-loop', title: 'AI-Guided Implementation Loop (Advanced)', level: 1 },
  { id: 'success-indicators', title: 'Success Indicators', level: 1 },
  { id: 'pro-tips', title: 'Pro Tips', level: 1 },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('overview');
  const { completedSections, getCompletionPercentage } = useProgress();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="hidden lg:block w-72 xl:w-80 flex-shrink-0 sticky top-20 xl:top-24 h-fit max-h-[calc(100vh-6rem)] xl:max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-4 xl:p-6 shadow-lg backdrop-blur-sm">
        {/* Progress Section */}
        <div className="mb-4 xl:mb-6">
          <div className="flex items-center justify-between mb-2 xl:mb-3">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base xl:text-lg">
              Progress
            </h3>
            <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              {getCompletionPercentage()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 xl:h-3 mb-3 xl:mb-4 shadow-inner">
            <div 
              className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 h-2 xl:h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${getCompletionPercentage()}%` }}
            />
          </div>
        </div>
        
        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-3 xl:mb-4 text-base xl:text-lg">
          Table of Contents
        </h3>
        <ul className="space-y-1 xl:space-y-2">
          {sections.map(({ id, title, level }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`w-full text-left flex items-center space-x-2 xl:space-x-3 px-2 xl:px-3 py-2 xl:py-3 rounded-lg transition-all duration-200 group ${
                  activeSection === id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <div className={`w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full flex-shrink-0 ${
                  completedSections.has(id) 
                    ? 'bg-green-500' 
                    : activeSection === id 
                      ? 'bg-primary-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                }`} />
                <ChevronRight 
                  className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${
                    activeSection === id ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} 
                />
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-xs xl:text-sm block truncate pr-1">{title}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
        
        {/* Quick Actions */}
        <div className="mt-4 xl:mt-6 pt-4 xl:pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-1 xl:space-y-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full text-left px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              ↑ Back to Top
            </button>
            <button
              onClick={() => scrollToSection('pro-tips')}
              className="w-full text-left px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              💡 Quick Help
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}