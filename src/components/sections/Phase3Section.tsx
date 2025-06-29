import React from 'react';
import { Wrench } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';

export default function Phase3Section() {
  return (
    <Section id="phase3" title="Phase 3: Adding Advanced Features" icon={Wrench}>
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <span>Add Database & User Features</span>
          </h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">When:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">After basic layout and design are good</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">What to say:</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">"Add user authentication so people can create accounts and log in"</p>
              </div>
            </div>
          </div>

          <Callout type="tip" title="💡 Hint" className="mt-4">
            Bolt will automatically set up Supabase for your database. Just click "Apply changes" when prompted.
          </Callout>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <span>Add Integrations</span>
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">Common integrations to add:</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100/80 dark:from-blue-900/30 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200/60 dark:border-blue-700/60 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl mb-3">💳</div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-3 text-lg">Payments</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium leading-relaxed">"Add Stripe integration for premium features"</p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-green-50 to-green-100/80 dark:from-green-900/30 dark:to-green-800/20 p-6 rounded-xl border border-green-200/60 dark:border-green-700/60 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl mb-3">📁</div>
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-3 text-lg">File uploads</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium leading-relaxed">"Let users upload recipe photos"</p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100/80 dark:from-purple-900/30 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200/60 dark:border-purple-700/60 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl mb-3">📧</div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-200 mb-3 text-lg">Email</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 font-medium leading-relaxed">"Send welcome emails to new users"</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="tip" title="💡 Hint" className="mt-4">
            Each integration has a setup process. Follow Bolt's prompts and click the buttons it shows you.
          </Callout>
        </div>
      </div>
    </Section>
  );
}