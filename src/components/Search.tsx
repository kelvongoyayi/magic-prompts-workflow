import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight, Clock, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  type: 'section' | 'subsection' | 'prompt' | 'tip';
  category: string;
  relevanceScore: number;
}

const searchableContent: Omit<SearchResult, 'excerpt' | 'relevanceScore'>[] = [
  {
    id: 'overview',
    title: 'Overview for New Users',
    type: 'section',
    category: 'Getting Started',
    content: 'This workflow is designed for users who are completely new to Bolt.new. It guides you step-by-step from gathering your project requirements to having a fully deployed application. Magic Promise You\'ll spend most of your time reviewing what Bolt builds and simply saying "proceed" to continue. This workflow transforms AI development from complex coding into an intuitive conversation. Step-by-step clear sequential instructions AI-guided let AI handle technical complexity production-ready build applications ready for real users'
  },
  {
    id: 'checklist',
    title: 'Pre-Development Checklist',
    type: 'section',
    category: 'Planning',
    content: 'Before you start building gather essential information business requirements what are you building who will use it key features needed design style access method recipe sharing platform home cooks upload search save rate profiles clean food-focused mobile-friendly browser'
  },
  {
    id: 'phase1',
    title: 'Phase 1: Project Setup & First Build',
    type: 'section',
    category: 'Implementation',
    content: 'Create your first prompt go to bolt.new write basic prompt click enhance prompt review enhanced prompt press enter start building watch bolt build create entire project structure takes 2-5 minutes see preview of app enhance prompt feature turns simple ideas into detailed technical requirements always use for first prompt'
  },
  {
    id: 'phase2',
    title: 'Phase 2: Review & Iterate Loop',
    type: 'section',
    category: 'Implementation',
    content: 'Review and iterate loop spend most time bolt builds you review say what to change review what was built look at preview tab check colors layout fonts main features work clicking buttons filling forms mobile-friendly responsive mode give feedback one thing at a time only ask for one change per prompt good examples make header blue add search bar bad examples change colors add search fix mobile layout add login say proceed or give next instruction'
  },
  {
    id: 'phase3',
    title: 'Phase 3: Advanced Features',
    type: 'section',
    category: 'Implementation',
    content: 'Adding advanced features database user features after basic layout design good add user authentication people create accounts log in bolt automatically setup supabase database click apply changes when prompted add integrations payments stripe premium features file uploads recipe photos email welcome emails new users'
  },
  {
    id: 'phase4',
    title: 'Phase 4: Optimization & Cleanup',
    type: 'section',
    category: 'Optimization',
    content: 'Optimization cleanup when app mostly working clean up code switch code view toggle top open terminal bottom screen run cleanup command wait finish npx knip production fix allow-remove-files removes unused files makes app faster backup first export download optimize performance review codebase break large files smaller components'
  },
  {
    id: 'phase5',
    title: 'Phase 5: Deployment',
    type: 'section',
    category: 'Deployment',
    content: 'Deploy your app click deploy button project bolt connects netlify makes app live follow prompts click apply when asked get live URL share with others'
  },
  {
    id: 'documentation-setup',
    title: 'Documentation Setup (Advanced)',
    type: 'section',
    category: 'Advanced',
    content: 'Documentation setup AI-guided development loop review bolt work say proceed each step comprehensive project documentation guide development process project overview business requirements implementation roadmap code structure guidelines development workflow technical specifications create files populate project-specific details PROCEED command'
  },
  {
    id: 'implementation-loop',
    title: 'AI-Guided Implementation Loop (Advanced)',
    type: 'section',
    category: 'Advanced',
    content: 'AI-guided implementation loop start after documentation approved switch build mode PROCEED command implement next priority task reference project documentation consistency established standards architecture magic loop bolt analyzes documentation selects next logical task implements following guidelines reports completed asks approval continue'
  },
  {
    id: 'magic-prompts',
    title: 'Magic Prompts Reference',
    type: 'section',
    category: 'Reference',
    content: 'Magic prompts for beginners exact prompts right times best results AI development workflow plan discussion mode mobile-friendly design AI-powered suggestions adding features broken issues progress review mode switching build mode discussion mode toggle button chat box'
  },
  {
    id: 'documentation-setup',
    title: 'Documentation Setup',
    type: 'section',
    category: 'Advanced',
    content: 'Documentation setup AI-guided development loop review bolt work say proceed each step comprehensive project documentation guide development process project overview business requirements implementation roadmap code structure guidelines development workflow technical specifications create files populate project-specific details PROCEED command'
  },
  {
    id: 'implementation-loop',
    title: 'AI-Guided Implementation Loop',
    type: 'section',
    category: 'Advanced',
    content: 'AI-guided implementation loop start after documentation approved switch build mode PROCEED command implement next priority task reference project documentation consistency established standards architecture magic loop bolt analyzes documentation selects next logical task implements following guidelines reports completed asks approval continue'
  },
  {
    id: 'success-indicators',
    title: 'Success Indicators',
    type: 'section',
    category: 'Evaluation',
    content: 'Success indicators doing well app preview loads without errors main features work test design looks good desktop mobile explain what each part does users complete main tasks graduation checklist before deploying all main features work mobile-friendly no console errors database connected user authentication works app loads quickly tested different devices'
  },
  {
    id: 'pro-tips',
    title: 'Pro Tips & Essential Hints',
    type: 'section',
    category: 'Tips',
    content: 'Pro tips essential hints mode switching build mode bolt makes changes discussion mode bolt gives advice without changing toggle button chat box file management large project bolt tells create .bolt/ignore file hide unnecessary files backup strategy before big changes export download regular backups github quick backup duplicate project token efficiency discussion mode planning saves 90% tokens one change time specific make button blue not improve design clean up knip command when things go wrong app won\'t load preview not showing too many errors click revert bolt stuck duplicate project start fresh'
  },
  // Specific prompts
  {
    id: 'prompt-planning',
    title: 'Planning Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'I want to add [feature name] to my app. What\'s the best way to implement this? Don\'t build anything yet, just give me advice.'
  },
  {
    id: 'prompt-mobile',
    title: 'Mobile-Friendly Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'Make this app fully responsive and mobile-friendly. Test it on different screen sizes and fix any layout issues.'
  },
  {
    id: 'prompt-design',
    title: 'Design Improvement Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'Review the current design and suggest 3 specific improvements to make it more modern and user-friendly. Implement the most important one first.'
  },
  {
    id: 'prompt-features',
    title: 'Adding Features Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'Add [specific feature] to the app. Break this down into small steps and implement one step at a time.'
  },
  {
    id: 'prompt-broken',
    title: 'Fix Issues Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'The [specific thing] isn\'t working properly. Please fix this issue and test that it works correctly.'
  },
  {
    id: 'prompt-progress',
    title: 'Progress Review Prompt',
    type: 'prompt',
    category: 'Magic Prompts',
    content: 'Review what we\'ve built so far. What\'s working well? What still needs to be implemented? Give me a priority list.'
  }
];

const recentSearches: string[] = [
  'enhance prompt',
  'discussion mode',
  'mobile-friendly',
  'deployment',
  'magic prompts'
];

const popularSearches: string[] = [
  'how to start',
  'fix errors',
  'deploy app',
  'mobile design',
  'add features',
  'bolt.new tutorial'
];

interface SearchProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Search({ isOpen: propIsOpen, onClose }: SearchProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Use prop state if provided (for mobile), otherwise use internal state
  const modalIsOpen = propIsOpen !== undefined ? propIsOpen : isOpen;
  const closeModal = onClose || (() => setIsOpen(false));

  // Search algorithm with relevance scoring
  const searchContent = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const queryWords = searchQuery.toLowerCase().split(' ').filter(word => word.length > 0);
    
    const searchResults = searchableContent.map(item => {
      let relevanceScore = 0;
      let excerptStart = -1;
      const content = item.content.toLowerCase();
      const title = item.title.toLowerCase();

      // Title exact match (highest priority)
      if (title.includes(searchQuery.toLowerCase())) {
        relevanceScore += 100;
      }

      // Title word matches
      queryWords.forEach(word => {
        if (title.includes(word)) {
          relevanceScore += 50;
        }
      });

      // Content matches
      queryWords.forEach(word => {
        const matches = (content.match(new RegExp(word, 'gi')) || []).length;
        relevanceScore += matches * 10;
        
        if (matches > 0 && excerptStart === -1) {
          excerptStart = content.indexOf(word);
        }
      });

      // Category matches
      if (item.category.toLowerCase().includes(searchQuery.toLowerCase())) {
        relevanceScore += 30;
      }

      // Create excerpt
      let excerpt = '';
      if (excerptStart >= 0) {
        const start = Math.max(0, excerptStart - 50);
        const end = Math.min(item.content.length, excerptStart + 150);
        excerpt = item.content.substring(start, end);
        if (start > 0) excerpt = '...' + excerpt;
        if (end < item.content.length) excerpt = excerpt + '...';
      } else {
        excerpt = item.content.substring(0, 150) + '...';
      }

      return {
        ...item,
        excerpt,
        relevanceScore
      };
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 8);

    return searchResults;
  };

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsSearching(false);
      setSelectedIndex(-1);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalIsOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          setQuery('');
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalIsOpen, results, selectedIndex, closeModal]);

  // Global keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const navigateToResult = (result: SearchResult) => {
    const element = document.getElementById(result.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeModal();
      setQuery('');
    }
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    
    const regex = new RegExp(`(${highlight.split(' ').join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-200 px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'section': return '📖';
      case 'prompt': return '✨';
      case 'tip': return '💡';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'section': return 'text-blue-600 dark:text-blue-400';
      case 'prompt': return 'text-purple-600 dark:text-purple-400';
      case 'tip': return 'text-orange-600 dark:text-orange-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <>
      {/* Search Trigger Button - Only show if not controlled by parent */}
      {propIsOpen === undefined && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-between w-full max-w-xs lg:max-w-sm xl:max-w-md space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/90 dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg sm:rounded-xl border border-gray-200/60 dark:border-gray-700/60 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 shadow-sm hover:shadow-md backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 transition-colors" />
            <span className="text-sm sm:text-base font-medium text-left truncate">
              Search guide...
            </span>
          </div>
          <kbd className="hidden sm:flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-500 dark:text-gray-400 flex-shrink-0">
            <span>⌘</span>
            <span>K</span>
          </kbd>
        </motion.button>
      )}

      {/* Search Modal - Fully responsive */}
      <AnimatePresence>
        {modalIsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Search Panel - Mobile-first responsive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.3, damping: 25 }}
              className="fixed inset-x-4 top-4 bottom-4 sm:inset-x-6 sm:top-16 sm:bottom-16 md:inset-x-8 md:top-20 md:bottom-20 lg:left-1/2 lg:right-auto lg:top-20 lg:bottom-auto lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-2xl xl:max-w-3xl lg:h-auto lg:max-h-[80vh] bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden flex flex-col"
            >
              {/* Search Input - Fixed header */}
              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 lg:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <SearchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Magic Prompts guide..."
                  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none text-base sm:text-lg lg:text-xl min-w-0"
                  autoFocus
                />
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </button>
                  )}
                  <button
                    onClick={closeModal}
                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close search"
                  >
                    <kbd className="px-2 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
                      ESC
                    </kbd>
                  </button>
                </div>
              </div>

              {/* Search Results - Scrollable content */}
              <div 
                ref={resultsContainerRef} 
                className="flex-1 overflow-y-auto overscroll-contain"
              >
                {isSearching && (
                  <div className="flex items-center justify-center py-12 sm:py-16">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-primary-600"></div>
                  </div>
                )}

                {!isSearching && query && results.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center text-gray-500 dark:text-gray-400 px-6">
                    <SearchIcon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg sm:text-xl font-medium mb-2">No results found</p>
                    <p className="text-sm sm:text-base">Try different keywords for "{query}"</p>
                  </div>
                )}

                {!isSearching && results.length > 0 && (
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {results.map((result, index) => (
                      <motion.button
                        key={result.id}
                        onClick={() => navigateToResult(result)}
                        className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                          selectedIndex === index ? 'bg-gray-50 dark:bg-gray-800' : ''
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4 min-w-0">
                          <span className="text-xl sm:text-2xl flex-shrink-0 mt-1">
                            {getTypeIcon(result.type)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col gap-2 mb-2">
                              <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg leading-tight">
                                {highlightText(result.title, query)}
                              </h3>
                              <span className={`inline-flex items-center text-xs sm:text-sm px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 ${getTypeColor(result.type)} self-start`}>
                                {result.category}
                              </span>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                              {highlightText(result.excerpt, query)}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-2 hidden sm:block" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Quick Searches when no query */}
                {!query && !isSearching && (
                  <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center space-x-2">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Recent Searches</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search) => (
                          <button
                            key={search}
                            onClick={() => handleSearchClick(search)}
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center space-x-2">
                        <Hash className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Popular Searches</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((search) => (
                          <button
                            key={search}
                            onClick={() => handleSearchClick(search)}
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors text-primary-700 dark:text-primary-300"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-4">
                        <span>↑↓ Navigate</span>
                        <span>↵ Select</span>
                        <span>ESC Close</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}