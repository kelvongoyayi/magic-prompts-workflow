import React from 'react';
import { Rocket } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';

export default function Phase5Section() {
  return (
    <Section id="phase5" title="Phase 5: Deployment" icon={Rocket}>
      <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] [background-size:24px_24px]" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">10</span>
          <span>Deploy Your App</span>
        </h3>
        
        <div className="space-y-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-bold text-gray-900 dark:text-white mb-2">Where:</p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Click "Deploy" button in your project</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white mb-2">What happens:</p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Bolt connects to Netlify and makes your app live</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white mb-2">Your job:</p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Follow the prompts and click "Apply" when asked</p>
            </div>
          </div>
        </div>

        <Callout type="success" title="🎉 Success!" className="mt-6">
          You'll get a live URL you can share with others!
        </Callout>
      </div>
    </Section>
  );
}