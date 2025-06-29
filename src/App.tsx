import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import MainContent from './components/MainContent';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Hero />
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <TableOfContents />
                <div className="flex-1 min-w-0">
                  <MainContent />
                </div>
              </div>
            </div>
          </div>
          <MobileNav />
          <Footer />
        </div>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;