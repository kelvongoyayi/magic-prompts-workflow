import React from 'react';
import { Settings } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function Phase4Section() {
  return (
    <Section id="phase4" title="Phase 4: Optimization & Cleanup" icon={Settings}>
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <span>Clean Up Your Code</span>
          </h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">When:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">When your app is mostly working</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">What to do:</p>
                <ol className="text-gray-600 dark:text-gray-300 text-sm space-y-1 font-medium">
                  <li>1. Switch to Code view (toggle at top)</li>
                  <li>2. Open Terminal (bottom of screen)</li>
                  <li>3. Run the cleanup command</li>
                  <li>4. Wait for it to finish</li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Cleanup Command:</h4>
              <CodeBlock>npx knip --production --fix --allow-remove-files</CodeBlock>
            </div>
          </div>

          <Callout type="tip" title="💡 Hint" className="mt-4">
            This removes unused files and makes your app faster. Always backup first (Export {'>'} Download).
          </Callout>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">9</span>
            <span>Optimize for Performance</span>
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              <strong className="text-gray-900 dark:text-white">What to say:</strong> 
              "Review the codebase and break any large files into smaller components"
            </p>
          </div>

          <Callout type="tip" title="💡 Hint" className="mt-4">
            Bolt will automatically split large files. Just say "proceed" when it shows you the changes.
          </Callout>
        </div>
      </div>
    </Section>
  );
}