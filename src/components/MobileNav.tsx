import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Cross as Progress } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../contexts/ProgressContext';
import Search from './Search';

const sections = [
  { id: 'overview', title: 'Overview', level: 1, estimated: '3 min' },
  { id: 'checklist', title: 'Pre-Development Checklist', level: 1, estimated: '5 min' },
  { id: 'phase1', title: 'Phase 1: Project Setup', level: 1, estimated: '8 min' },
  { id: 'phase2', title: 'Phase 2: Review & Iterate', level: 1, estimated: '10 min' },
  { id: 'phase3', title: 'Phase 3: Advanced Features', level: 1, estimated: '12 min' },
  { id: 'phase4', title: 'Phase 4: Optimization', level: 1, estimated: '6 min' },
  { id: 'phase5', title: 'Phase 5: Deployment', level: 1, estimated: '4 min' },
  { id: 'magic-prompts', title: 'Magic Prompts Reference', level: 1, estimated: '7 min' },
  { id: 'documentation-setup', title: 'Documentation Setup (Advanced)', level: 1, estimated: '10 min' },
  { id: 'implementation-loop', title: 'AI-Guided Implementation Loop (Advanced)', level: 1, estimated: '8 min' },
  { id: 'success-indicators', title: 'Success Indicators', level: 1, estimated: '5 min' },
  { id: 'pro-tips', title: 'Pro Tips', level: 1, estimated: '6 min' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection);
  const progressPercentage = getCompletionPercentage();

  const nextSection = sections[currentSectionIndex + 1];
  const prevSection = sections[currentSectionIndex - 1];

  return (
    <>
      {/* Mobile FAB */}
      <div className="lg:hidden fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 space-y-3">
        {/* Progress Circle */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6 sm:w-8 sm:h-8">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-200 dark:text-gray-600"
              />
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - progressPercentage / 100)}`}
                className="text-primary-600 dark:text-primary-400 transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                {progressPercentage}%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 sm:p-4 shadow-lg transition-colors touch-target"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 z-50 overflow-y-auto safe-area-top safe-area-bottom"
            >
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                    Navigation
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors touch-target"
                  >
                    <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                      {completedSections.size}/{sections.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="mb-4 sm:mb-6">
                  <Search />
                </div>
                
                <nav className="space-y-2">
                  {sections.map(({ id, title, estimated }) => {
                    const isActive = activeSection === id;
                    const isCompleted = completedSections.has(id);
                    
                    return (
                      <motion.button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 touch-target ${
                          isActive
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 shadow-sm'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                            <div className={`w-2 h-2 rounded-full ${
                              isCompleted ? 'bg-green-500' : isActive ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                            }`} />
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-sm block truncate pr-2">{title}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {estimated}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 opacity-50 flex-shrink-0" />
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Quick Navigation */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Navigation</h4>
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                    {prevSection && (
                      <motion.button
                        onClick={() => scrollToSection(prevSection.id)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 touch-target"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Previous</div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                          {prevSection.title}
                        </div>
                      </motion.button>
                    )}
                    {nextSection && (
                      <motion.button
                        onClick={() => scrollToSection(nextSection.id)}
                        className="w-full p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-left transition-colors hover:bg-primary-100 dark:hover:bg-primary-900/30 touch-target"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-xs text-primary-600 dark:text-primary-400 mb-1">Next</div>
                        <div className="text-sm font-medium text-primary-700 dark:text-primary-300 line-clamp-2">
                          {nextSection.title}
                        </div>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}