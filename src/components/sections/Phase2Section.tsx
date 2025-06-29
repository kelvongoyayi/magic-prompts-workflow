import React from 'react';
import { RotateCcw } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function Phase2Section() {
  return (
    <Section id="phase2" title="Phase 2: Review & Iterate Loop" icon={RotateCcw}>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        This is where you'll spend most of your time. Bolt builds, you review, you say what to change.
      </p>

      <div className="space-y-12">
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] [background-size:24px_24px]" />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <span>Review What Was Built</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white font-bold">Where:</strong> Look at the Preview tab
            </p>
            
            <div>
              <p className="font-bold text-gray-900 dark:text-white mb-4">What to check:</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Does it look right? Check colors, layout, fonts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Do the main features work? Try clicking buttons, filling forms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Is it mobile-friendly? Click the responsive mode button 📱</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NEW: Screenshot Section */}
        <div className="group bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/40 dark:via-indigo-900/30 dark:to-purple-900/40 p-8 rounded-2xl border-2 border-blue-200/60 dark:border-blue-600/40 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">📸</span>
            <span>Using Screenshots to Fix UI Issues</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              Sometimes it's easier to show Bolt what's wrong with your UI than to describe it. Screenshots are incredibly powerful for getting precise fixes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Perfect for:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Layout alignment issues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Mobile responsiveness problems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Visual design improvements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Spacing and sizing issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">How to take effective screenshots:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">📱</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Use responsive mode for mobile issues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🖥️</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Take full-screen for layout problems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🎯</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Crop to focus on specific elements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🔍</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Use high resolution, include context</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-xl p-6 border border-white/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Magic Screenshot Prompts:</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">For layout issues:</p>
                  <CodeBlock>I've attached a screenshot showing the layout issue. Please fix the alignment and spacing problems you can see in the image.</CodeBlock>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">For mobile problems:</p>
                  <CodeBlock>The attached screenshot shows how the app looks on mobile. Please fix the responsive design issues shown in the image.</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <span>Give Feedback (One Thing at a Time)</span>
          </h3>

          <Callout type="warning" title="⚠️ Important" className="mb-6">
            Only ask for ONE change per prompt
          </Callout>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50/80 dark:from-green-900/40 dark:to-emerald-900/30 p-6 rounded-xl border border-green-200/60 dark:border-green-700/60 shadow-lg backdrop-blur-sm">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">✅ Good Examples:</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="text-green-700 dark:text-green-200">"Make the header background blue instead of white"</li>
                <li className="text-green-700 dark:text-green-200">"Add a search bar to the top of the page"</li>
                <li className="text-green-700 dark:text-green-200">"Make the recipe cards bigger on mobile"</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50/80 dark:from-red-900/40 dark:to-rose-900/30 p-6 rounded-xl border border-red-200/60 dark:border-red-700/60 shadow-lg backdrop-blur-sm">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">❌ Bad Examples:</h4>
              <p className="text-sm text-red-700 dark:text-red-200 font-medium">
                "Change the colors, add search, fix the mobile layout, and add user login"
              </p>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <span>Say "Proceed" or Give Next Instruction</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-5">After each change:</p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">If you like it:</strong>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">Say "Looks good, proceed with the next feature"</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">If you want changes:</strong>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">Give ONE specific instruction</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-500 font-bold">?</span>
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">If you're unsure:</strong>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">Switch to Discussion Mode</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}