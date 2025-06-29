import React from 'react';
import { Star } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';

export default function ProTipsSection() {
  return (
    <Section id="pro-tips" title="Pro Tips & Essential Hints" icon={Star}>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 dark:from-blue-400/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span className="text-blue-500">🔄</span>
              <span>Mode Switching</span>
            </h3>
            <div className="space-y-3 text-sm relative z-10">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Build Mode (🔨):</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bolt makes changes to your code</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Discussion Mode (💬):</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bolt gives advice without changing anything</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Switch by:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Clicking the toggle button next to chat box</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 dark:from-green-400/10 dark:to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span className="text-green-500">📁</span>
              <span>File Management</span>
            </h3>
            <div className="space-y-3 text-sm relative z-10">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">When to use:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">When your project gets large (Bolt will tell you)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">What to do:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Create a .bolt/ignore file to hide unnecessary files</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Common files to ignore:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">node_modules/*, dist/*, *.test.js</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span className="text-purple-500">💾</span>
              <span>Backup Strategy</span>
            </h3>
            <div className="space-y-3 text-sm relative z-10">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Before big changes:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Export {'>'} Download</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Regular backups:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Connect to GitHub (Integrations {'>'} GitHub)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Quick backup:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Duplicate project (menu next to project name)</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-400/10 dark:to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span className="text-orange-500">⚡</span>
              <span>Token Efficiency Tips</span>
            </h3>
            <div className="space-y-3 text-sm relative z-10">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Use Discussion Mode for planning (saves 90% tokens)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">One change at a time (don't ask for multiple things)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Be specific ("Make the button blue" not "improve the design")</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Clean up regularly with Knip command</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Callout type="warning" title="🚨 When Things Go Wrong">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">App won't load:</p>
              <p className="text-gray-700 dark:text-gray-200 text-sm font-medium">Say "The preview isn't showing, please fix this"</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Too many errors:</p>
              <p className="text-gray-700 dark:text-gray-200 text-sm font-medium">Click "Revert" to go back to a working version</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Bolt seems stuck:</p>
              <p className="text-gray-700 dark:text-gray-200 text-sm font-medium">Duplicate your project and start fresh</p>
            </div>
          </div>
        </Callout>

        <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/40 dark:to-primary-900/40 p-8 rounded-2xl border border-accent-200/60 dark:border-accent-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🆘 Quick Help</h3>
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">Stuck? Try these:</p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Switch to Discussion Mode and ask "What should I do next?"</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 font-bold">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Look at the Preview - does it match what you expected?</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-500 font-bold">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Check for errors - red text in the chat means something's wrong</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-500 font-bold">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Start simple - get basic features working before adding complex ones</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Ask specific questions - "How do I add a search bar?" not "How do I improve this?"</span>
            </li>
          </ul>
        </div>

        <Callout type="magic" title="Remember">
          Bolt is your coding partner. Be clear about what you want, patient with the process, and don't be afraid to ask questions!
        </Callout>
      </div>
    </Section>
  );
}