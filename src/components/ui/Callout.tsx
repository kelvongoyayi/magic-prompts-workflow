import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle, Lightbulb, Zap } from 'lucide-react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'tip' | 'magic';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Callout({ type, title, children, className = '' }: CalloutProps) {
  const configs = {
    info: {
      icon: Info,
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/80 dark:from-blue-900/50 dark:to-blue-800/40',
      borderColor: 'border-blue-200/60 dark:border-blue-500/80',
      iconColor: 'text-blue-600 dark:text-blue-400',
      titleColor: 'text-blue-900 dark:text-blue-200',
      shadowColor: 'shadow-blue-500/10',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-100/80 dark:from-amber-900/50 dark:to-orange-800/40',
      borderColor: 'border-amber-200/60 dark:border-amber-500/80',
      iconColor: 'text-amber-600 dark:text-amber-400',
      titleColor: 'text-amber-900 dark:text-amber-200',
      shadowColor: 'shadow-amber-500/10',
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100/80 dark:from-green-900/50 dark:to-emerald-800/40',
      borderColor: 'border-green-200/60 dark:border-green-500/80',
      iconColor: 'text-green-600 dark:text-green-400',
      titleColor: 'text-green-900 dark:text-green-200',
      shadowColor: 'shadow-green-500/10',
    },
    tip: {
      icon: Lightbulb,
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100/80 dark:from-purple-900/50 dark:to-violet-800/40',
      borderColor: 'border-purple-200/60 dark:border-purple-500/80',
      iconColor: 'text-purple-600 dark:text-purple-400',
      titleColor: 'text-purple-900 dark:text-purple-200',
      shadowColor: 'shadow-purple-500/10',
    },
    magic: {
      icon: Zap,
      bgColor: 'bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-primary-900/60 dark:via-secondary-900/50 dark:to-accent-900/50',
      borderColor: 'border-primary-200/60 dark:border-primary-500/80',
      iconColor: 'text-primary-600 dark:text-primary-400',
      titleColor: 'text-primary-900 dark:text-primary-200',
      shadowColor: 'shadow-primary-500/20',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <motion.div 
      className={`${config.bgColor} ${config.borderColor} ${config.shadowColor} border-l-4 rounded-xl p-6 shadow-xl dark:shadow-black/20 backdrop-blur-sm relative overflow-hidden ${className}`}
      className={`${config.bgColor} ${config.borderColor} ${config.shadowColor} rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md dark:shadow-xl dark:shadow-black/20 backdrop-blur-sm relative overflow-hidden border ${className}`}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] [background-size:16px_16px] sm:[background-size:20px_20px]" />
      </div>
      
      <div className="flex items-start space-x-3 sm:space-x-4 relative z-10">
        <motion.div
          className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/95 dark:bg-gray-800/95 ${config.borderColor} border shadow-sm dark:shadow-lg backdrop-blur-sm flex-shrink-0`}
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Icon className={`h-4 w-4 sm:h-6 sm:w-6 ${config.iconColor} flex-shrink-0 drop-shadow-sm`} />
        </motion.div>
        <div className="flex-1 min-w-0">
          {title && (
            <motion.h4 
              className={`font-bold text-base sm:text-lg ${config.titleColor} mb-2 sm:mb-3 tracking-tight`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h4>
          )}
          <motion.div 
            className="text-gray-700 dark:text-gray-300 prose prose-sm max-w-none leading-relaxed font-medium text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}