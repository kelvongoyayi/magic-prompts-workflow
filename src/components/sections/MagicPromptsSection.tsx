import React from 'react';
import { Zap } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function MagicPromptsSection() {
  const prompts = [
    {
      icon: '🔍',
      title: 'When You Want to Plan (Use Discussion Mode)',
      description: 'How to switch: Click the toggle button 🔄 next to the chat box\nWhen to use: When you want to discuss ideas without building',
      prompt: 'I want to add [feature name] to my app. What\'s the best way to implement this? Don\'t build anything yet, just give me advice.'
    },
    {
      icon: '📱',
      title: 'For Mobile-Friendly Design',
      description: 'Ensure your app works perfectly on all devices',
      prompt: 'Make this app fully responsive and mobile-friendly. Test it on different screen sizes and fix any layout issues.'
    },
    {
      icon: '🎨',
      title: 'For Design Improvements',
      description: 'Get AI-powered design suggestions',
      prompt: 'Review the current design and suggest 3 specific improvements to make it more modern and user-friendly. Implement the most important one first.'
    },
    {
      icon: '🔧',
      title: 'For Adding Features',
      description: 'Break down complex features into manageable steps',
      prompt: 'Add [specific feature] to the app. Break this down into small steps and implement one step at a time.'
    },
    {
      icon: '🐛',
      title: 'When Something\'s Broken',
      description: 'Fix issues quickly and efficiently',
      prompt: 'The [specific thing] isn\'t working properly. Please fix this issue and test that it works correctly.'
    },
    {
      icon: '📊',
      title: 'For Progress Review',
      description: 'Get a comprehensive status update',
      prompt: 'Review what we\'ve built so far. What\'s working well? What still needs to be implemented? Give me a priority list.'
    }
  ];

  return (
    <Section id="magic-prompts" title="Magic Prompts Reference" icon={Zap}>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        A comprehensive reference of proven prompts to use throughout your development workflow. Bookmark this section for quick access.
      </p>

      <div className="space-y-8">
        {prompts.map((item, index) => (
          <div key={index} className="stable-card bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 p-8 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-lg overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] [background-size:20px_20px]" />
            </div>
            
            <div className="flex items-start space-x-6 relative z-10">
              <div className="text-3xl p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl shadow-sm flex-shrink-0">{item.icon}</div>
              <div className="flex-1 min-w-0 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed select-text">
                  {item.description}
                </p>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-950/50 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 select-text">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Magic Prompt:</span>
                  </h4>
                  <CodeBlock>{item.prompt}</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Callout type="magic" title="Mode Switching" className="mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Build Mode (🔨):</p>
            <p className="text-gray-700 dark:text-gray-300">Bolt makes changes to your code</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Discussion Mode (💬):</p>
            <p className="text-gray-700 dark:text-gray-300">Bolt gives advice without changing anything</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-6">
          <strong>Switch by:</strong> Clicking the toggle button next to chat box
        </p>
      </Callout>
    </Section>
  );
}