import React from 'react';
import { CheckSquare } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';

export default function ChecklistSection() {
  return (
    <Section id="checklist" title="Pre-Development Checklist" icon={CheckSquare}>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Before you start building, gather this essential information to ensure a smooth development process.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-10 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] [background-size:24px_24px]" />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Business Requirements</h3>
          <ul className="space-y-5">
            <li className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary-500/30 ring-2 ring-primary-100 dark:ring-primary-900/30"></div>
              <div>
                <strong className="text-gray-900 dark:text-white font-bold">What are you building?</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium leading-relaxed">
                  e.g., "A task management app for small teams"
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary-500/30 ring-2 ring-primary-100 dark:ring-primary-900/30"></div>
              <div>
                <strong className="text-gray-900 dark:text-white font-bold">Who will use it?</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium leading-relaxed">
                  e.g., "Remote workers who need to collaborate"
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary-500/30 ring-2 ring-primary-100 dark:ring-primary-900/30"></div>
              <div>
                <strong className="text-gray-900 dark:text-white font-bold">Key features needed</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium leading-relaxed">
                  List 3-5 main things users can do
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary-500/30 ring-2 ring-primary-100 dark:ring-primary-900/30"></div>
              <div>
                <strong className="text-gray-900 dark:text-white font-bold">Design style</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium leading-relaxed">
                  Modern, colorful, minimal, etc.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary-500/30 ring-2 ring-primary-100 dark:ring-primary-900/30"></div>
              <div>
                <strong className="text-gray-900 dark:text-white font-bold">Access method</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium leading-relaxed">
                  Web browser, mobile app, or both
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="group bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/40 dark:via-green-900/30 dark:to-teal-900/40 p-10 rounded-2xl border-2 border-emerald-200/60 dark:border-emerald-600/40 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.4)_1px,_transparent_0)] [background-size:20px_20px]" />
          </div>
          
          {/* Success glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-green-400/5 to-teal-400/10 dark:from-emerald-400/20 dark:via-green-400/10 dark:to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Example Completed Checklist</h3>
          <div className="space-y-5 relative z-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100 dark:ring-emerald-900/50">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 select-text">
                  <strong className="text-gray-900 dark:text-white font-bold">Building:</strong>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">A recipe sharing platform</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100 dark:ring-emerald-900/50">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 select-text">
                  <strong className="text-gray-900 dark:text-white font-bold">Users:</strong>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Home cooks who want to share recipes</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100 dark:ring-emerald-900/50">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 select-text">
                  <strong className="text-gray-900 dark:text-white font-bold">Features:</strong>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Upload, search, save, rate, profiles</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100 dark:ring-emerald-900/50">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 select-text">
                  <strong className="text-gray-900 dark:text-white font-bold">Look:</strong>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Clean, food-focused with good photos</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100 dark:ring-emerald-900/50">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 select-text">
                  <strong className="text-gray-900 dark:text-white font-bold">Access:</strong>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Web browser (mobile-friendly)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}