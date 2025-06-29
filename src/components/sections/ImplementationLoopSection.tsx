import React from 'react';
import { RotateCw } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function ImplementationLoopSection() {
  return (
    <Section id="implementation-loop" title="AI-Guided Implementation Loop (Advanced)" icon={RotateCw}>
      <div className="space-y-8">
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <span>Start the Implementation Loop</span>
          </h3>
          
          <div className="space-y-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">When:</p>
                <p className="text-gray-600 dark:text-gray-400">After documentation is approved</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">Mode:</p>
                <p className="text-gray-600 dark:text-gray-400">Switch back to Build Mode 🔨</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Use the PROCEED command Bolt provided:</h4>
              <CodeBlock>
PROCEED: Implement the next priority task from our roadmap. Reference the project documentation to ensure consistency with our established standards and architecture.
              </CodeBlock>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <span>The Magic Loop Begins</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What happens:</h4>
              <ol className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">1.</span>
                  <span className="text-gray-700 dark:text-gray-300">Bolt analyzes the documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">2.</span>
                  <span className="text-gray-700 dark:text-gray-300">Selects the next logical task</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">3.</span>
                  <span className="text-gray-700 dark:text-gray-300">Implements following the established guidelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">4.</span>
                  <span className="text-gray-700 dark:text-gray-300">Reports what was completed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">5.</span>
                  <span className="text-gray-700 dark:text-gray-300">Asks for your approval to continue</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Your responses:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">"Proceed"</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Continue to next task</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">"Proceed with [modification]"</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Continue with changes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 font-bold">✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">"Review first"</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Switch to Discussion Mode</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">"Revert and try differently"</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Go back and try another approach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 p-8 rounded-2xl border border-green-200/60 dark:border-green-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔄 The Perfect Loop in Action</h3>
          <div className="space-y-4 font-mono text-sm">
            <div className="bg-white/90 dark:bg-gray-800/90 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">You:</p>
              <p className="text-gray-700 dark:text-gray-300">"PROCEED"</p>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="bg-white/90 dark:bg-gray-800/90 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm">
              <p className="text-green-600 dark:text-green-400 font-semibold">Bolt:</p>
              <p className="text-gray-700 dark:text-gray-300">"Implementing user authentication system as specified in our technical docs. This includes login/signup forms, password validation, and session management. Estimated completion: 5 minutes."</p>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="bg-gray-100/90 dark:bg-gray-700/90 p-5 rounded-xl text-center shadow-lg backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60">
              <p className="text-gray-600 dark:text-gray-400">[Bolt builds the feature]</p>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="bg-white/90 dark:bg-gray-800/90 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm">
              <p className="text-green-600 dark:text-green-400 font-semibold">Bolt:</p>
              <p className="text-gray-700 dark:text-gray-300">"✅ User authentication completed. Ready to proceed with next task: User profile management system?"</p>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="bg-white/90 dark:bg-gray-800/90 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">You:</p>
              <p className="text-gray-700 dark:text-gray-300">"Proceed"</p>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="bg-gray-100/90 dark:bg-gray-700/90 p-5 rounded-xl text-center shadow-lg backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60">
              <p className="text-gray-600 dark:text-gray-400">[Loop continues...]</p>
            </div>
          </div>
        </div>

        <Callout type="magic" title="Documentation-Guided Prompts">
          <div className="space-y-3">
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md backdrop-blur-sm border border-white/30 dark:border-gray-700/40">
              <strong className="text-gray-900 dark:text-white">📋 For Implementation Loop:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">PROCEED: Continue with the next task from our implementation roadmap.</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md backdrop-blur-sm border border-white/30 dark:border-gray-700/40">
              <strong className="text-gray-900 dark:text-white">🔍 For Status Check:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">STATUS CHECK: Review our progress against the roadmap. What's completed? What's next?</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md backdrop-blur-sm border border-white/30 dark:border-gray-700/40">
              <strong className="text-gray-900 dark:text-white">🚀 For Deployment Phase:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">DEPLOYMENT PHASE: Prepare the application for deployment following our deployment checklist.</p>
            </div>
          </div>
        </Callout>
      </div>
    </Section>
  );
}