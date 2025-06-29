import React from 'react';
import { CheckCircle, Clock, Target, Trophy } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { motion } from 'framer-motion';

const sections = [
  { id: 'overview', title: 'Overview', estimated: 3 },
  { id: 'checklist', title: 'Pre-Development Checklist', estimated: 5 },
  { id: 'phase1', title: 'Phase 1: Project Setup', estimated: 8 },
  { id: 'phase2', title: 'Phase 2: Review & Iterate', estimated: 10 },
  { id: 'phase3', title: 'Phase 3: Advanced Features', estimated: 12 },
  { id: 'phase4', title: 'Phase 4: Optimization', estimated: 6 },
  { id: 'phase5', title: 'Phase 5: Deployment', estimated: 4 },
  { id: 'magic-prompts', title: 'Magic Prompts Reference', estimated: 7 },
  { id: 'documentation-setup', title: 'Documentation Setup (Advanced)', estimated: 10 },
  { id: 'implementation-loop', title: 'AI-Guided Implementation Loop (Advanced)', estimated: 8 },
  { id: 'success-indicators', title: 'Success Indicators', estimated: 5 },
  { id: 'pro-tips', title: 'Pro Tips', estimated: 6 },
];

export default function ProgressDashboard() {
  const { completedSections, getCompletionPercentage, resetProgress } = useProgress();
  
  const totalReadingTime = sections.reduce((total, section) => total + section.estimated, 0);
  const completedReadingTime = sections
    .filter(section => completedSections.has(section.id))
    .reduce((total, section) => total + section.estimated, 0);
  
  const completionPercentage = getCompletionPercentage();
  const isComplete = completionPercentage === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/95 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 mb-6 sm:mb-8 shadow-xl backdrop-blur-sm relative overflow-hidden"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/10 to-secondary-200/10 dark:from-primary-600/5 dark:to-secondary-600/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8 relative z-10">
        <div className="flex items-center space-x-3">
          <motion.div 
            className="p-3 sm:p-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-800/50 dark:to-secondary-800/50 rounded-xl sm:rounded-2xl shadow-lg border border-primary-200/50 dark:border-primary-700/50"
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400 drop-shadow-sm" />
          </motion.div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent tracking-tight">
              Your Learning Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium mt-1">
              Track your journey through the Magic Prompts workflow
            </p>
          </div>
        </div>
        
        {isComplete && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-800/50 dark:to-emerald-800/50 text-green-700 dark:text-green-300 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Trophy className="h-5 w-5" />
            </motion.div>
            <span className="font-bold text-xs sm:text-sm tracking-wide">Complete!</span>
          </motion.div>
        )}
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8 relative z-10">
        <motion.div 
          className="group bg-gradient-to-br from-white to-primary-50/80 dark:from-gray-800/90 dark:to-primary-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent group-hover:from-primary-500/10 transition-all duration-300" />
          <motion.div 
            className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent mb-1 sm:mb-2 relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
          >
            {completionPercentage}%
          </motion.div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide relative z-10">Complete</div>
        </motion.div>
        
        <motion.div 
          className="group bg-gradient-to-br from-white to-secondary-50/80 dark:from-gray-800/90 dark:to-secondary-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-transparent group-hover:from-secondary-500/10 transition-all duration-300" />
          <motion.div 
            className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 dark:from-secondary-400 dark:to-accent-400 bg-clip-text text-transparent mb-1 sm:mb-2 relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          >
            {completedSections.size}/{sections.length}
          </motion.div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide relative z-10">Sections</div>
        </motion.div>
        
        <motion.div 
          className="group bg-gradient-to-br from-white to-accent-50/80 dark:from-gray-800/90 dark:to-accent-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent group-hover:from-accent-500/10 transition-all duration-300" />
          <motion.div 
            className="text-2xl sm:text-4xl font-bold text-accent-600 dark:text-accent-400 flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2 relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.3 }}
          >
            <Clock className="h-4 w-4 sm:h-6 sm:w-6" />
            <span>{completedReadingTime}m</span>
          </motion.div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide relative z-10">Time Spent</div>
        </motion.div>
        
        <motion.div 
          className="group bg-gradient-to-br from-white to-purple-50/80 dark:from-gray-800/90 dark:to-purple-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent group-hover:from-purple-500/10 transition-all duration-300" />
          <motion.div 
            className="text-2xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2 relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.4 }}
          >
            <Clock className="h-4 w-4 sm:h-6 sm:w-6" />
            <span>{totalReadingTime - completedReadingTime}m</span>
          </motion.div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide relative z-10">Remaining</div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8 relative z-10">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            Overall Progress
          </span>
          <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
            {completionPercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 sm:h-4 shadow-inner border border-gray-300/50 dark:border-gray-600/50">
          <motion.div
            className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 h-3 sm:h-4 rounded-full shadow-sm relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Section Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
        {sections.map((section, index) => {
          const isCompleted = completedSections.has(section.id);
          
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 border backdrop-blur-sm relative overflow-hidden ${
                isCompleted 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-800/30 dark:to-emerald-800/20 border-green-200/60 dark:border-green-700/60 shadow-sm' 
                  : 'bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/30 border-gray-200/60 dark:border-gray-700/60 hover:border-primary-300/60 dark:hover:border-primary-600/60 shadow-sm hover:shadow-md'
              }`}
              whileHover={{ scale: 1.02, y: -1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-sm relative z-10 flex-shrink-0 ${
                isCompleted 
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-green-500/30' 
                  : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1 min-w-0 relative z-10">
                <div className={`text-xs sm:text-sm font-semibold ${
                  isCompleted 
                    ? 'text-green-800 dark:text-green-200 line-through opacity-75' 
                    : 'text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300'
                }`}>
                  {section.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  {section.estimated} min read
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Reset Button */}
      {completedSections.size > 0 && (
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
          <button
            onClick={resetProgress}
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors font-medium"
          >
            Reset Progress
          </button>
        </div>
      )}
    </motion.div>
  );
}