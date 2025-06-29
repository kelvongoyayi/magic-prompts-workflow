import React, { useEffect, useRef } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { motion } from 'framer-motion';

interface SectionProgressProps {
  sectionId: string;
  title: string;
  estimatedTime?: number;
  children: React.ReactNode;
}

export default function SectionProgress({ 
  sectionId, 
  title, 
  estimatedTime = 5, 
  children 
}: SectionProgressProps) {
  const { completedSections, toggleSectionComplete } = useProgress();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isCompleted = completedSections.has(sectionId);

  // Auto-mark as complete when user scrolls past section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Auto-complete section when user has viewed most of it
            setTimeout(() => {
              if (!completedSections.has(sectionId)) {
                // Don't auto-complete, let user manually mark
              }
            }, 3000); // 3 seconds of viewing
          }
        });
      },
      { threshold: [0.5, 0.8] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionId, completedSections]);

  return (
    <div ref={sectionRef} className="relative">
      {/* Progress Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-6 p-6 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300"
        whileHover={{ scale: 1.01, y: -2 }}
      >
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={() => toggleSectionComplete(sectionId)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isCompleted 
                ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 bg-green-50 dark:bg-green-900/20' 
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isCompleted ? (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <CheckCircle className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Circle className="h-6 w-6" />
              </motion.div>
            )}
          </motion.button>
          
          <div>
            <motion.h3 
              className={`text-xl font-bold transition-all duration-300 ${
              isCompleted 
                ? 'text-green-700 dark:text-green-300 line-through opacity-75' 
                : 'text-gray-900 dark:text-white'
            }`}>
              {title}
            </motion.h3>
            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{estimatedTime} min read</span>
              {isCompleted && (
                <motion.span 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-700/50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
                >
                  ✓ Complete
                </motion.span>
              )}
            </div>
          </div>
        </div>

        {/* Progress indicator for this section */}
        <motion.div 
          className={`w-4 h-4 rounded-full transition-all duration-500 shadow-lg ${
          isCompleted 
            ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
            : 'bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700'
        }`}
          animate={isCompleted ? {
            boxShadow: [
              "0 0 20px rgba(34, 197, 94, 0.4)",
              "0 0 30px rgba(34, 197, 94, 0.6)",
              "0 0 20px rgba(34, 197, 94, 0.4)"
            ]
          } : {}}
          transition={{ duration: 2, repeat: isCompleted ? Infinity : 0 }}
        />
      </motion.div>

      {/* Section Content */}
      <motion.div 
        className={`transition-all duration-500 ${
        isCompleted ? 'opacity-80 scale-[0.99]' : 'opacity-100 scale-100'
      }`}>
        {children}
      </motion.div>
    </div>
  );
}