import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Zap, Search as SearchIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Search from './Search';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      <motion.header 
        className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div 
                className="relative p-2 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 8px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Zap className="h-8 w-8 text-primary-600 dark:text-primary-400 relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-xl blur-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </motion.div>

            <div className="flex items-center space-x-3 lg:space-x-6">
              <div className="hidden sm:block">
                <Search />
              </div>
              
              {/* Mobile Search Button */}
              <motion.button
                onClick={() => setSearchOpen(true)}
                className="sm:hidden relative p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0"
                aria-label="Search"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <SearchIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 drop-shadow-sm" />
              </motion.button>
              
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 lg:p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0"
                aria-label="Toggle theme"
                whileHover={{ 
                  scale: 1.05,
                  rotate: theme === 'light' ? 180 : -180
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-400 drop-shadow-sm" />
                ) : (
                  <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-400 drop-shadow-sm" />
                )}
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0"
                  whileHover={{ opacity: theme === 'dark' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 shadow-sm"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </motion.header>
      
      {/* Mobile Search Modal - Pass the state to Search component */}
      {searchOpen && (
        <Search 
          isOpen={searchOpen} 
          onClose={() => setSearchOpen(false)} 
        />
      )}
    </>
  );
}