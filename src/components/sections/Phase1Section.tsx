import React from 'react';
import { Rocket } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function Phase1Section() {
  return (
    <Section id="phase1" title="Phase 1: Project Setup & First Build" icon={Rocket}>
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <span>Create Your First Prompt</span>
          </h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">Where:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Go to bolt.new</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">When:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">After completing your checklist above</p>
              </div>
            </div>

            <ol className="space-y-3 ml-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold">1.</span>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Write your basic prompt in the chat box</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold">2.</span>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Click "Enhance Prompt" ⭐ (This is crucial for beginners!)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold">3.</span>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Review the enhanced prompt - make sure it matches what you want</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold">4.</span>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Press Enter to start building</span>
              </li>
            </ol>
          </div>
        </div>

        <Callout type="tip" title="💡 Hint">
          The "Enhance Prompt" feature turns simple ideas into detailed technical requirements. Always use it for your first prompt!
        </Callout>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg backdrop-blur-sm">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">Example Basic Prompt:</h4>
          <CodeBlock>
Build a recipe sharing website where users can upload, search, and save recipes. Make it modern and mobile-friendly.
          </CodeBlock>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <span>Watch Bolt Build</span>
          </h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">What happens:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bolt will create your entire project structure</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">Your job:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Watch and wait (this takes 2-5 minutes)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">When it's done:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">You'll see a preview of your app</p>
              </div>
            </div>
          </div>
        </div>

        <Callout type="tip" title="💡 Hint">
          Don't interrupt Bolt while it's building. Let it finish completely before giving feedback.
        </Callout>
      </div>
    </Section>
  );
}