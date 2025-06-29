import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, icon: Icon, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`scroll-mt-24 sm:scroll-mt-32 ${className}`}
    >
      <motion.div 
        className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 group"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {Icon && (
          <motion.div 
            className="relative p-2 sm:p-3 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg sm:rounded-xl shadow-sm flex-shrink-0"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 8px 25px -5px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary-600 dark:text-primary-400 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        )}
        <div className="flex-1 min-w-0">
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight"
            initial={{ backgroundPosition: "0% 50%" }}
            whileHover={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            {title}
          </motion.h2>
          <motion.div 
            className="h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-1 sm:mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert">
        {children}
      </div>
    </motion.section>
  );
}