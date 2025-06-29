import React from 'react';
import { FileText } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';
import CodeBlock from '../ui/CodeBlock';

export default function DocumentationSetupSection() {
  const documentationSetupPrompt = `DOCUMENTATION SETUP REQUEST:

Please create comprehensive project documentation to guide our development process. I want to set up an AI-guided implementation loop where I can simply review your work and say "proceed" for each step.

Create the following documentation structure:

1. PROJECT OVERVIEW (.md file)
  - Business requirements summary
  - Target users and use cases
  - Core features list with priorities (High/Medium/Low)
  - Technical architecture decisions

2. IMPLEMENTATION ROADMAP (.md file)
  - Phase-by-phase development plan
  - Each phase broken into specific tasks
  - Dependencies between tasks
  - Estimated complexity for each task

3. CODE STRUCTURE GUIDELINES (.md file)
  - File organization standards
  - Component size limits (max 300 lines, 450 for complex)
  - Naming conventions
  - Code quality standards

4. DEVELOPMENT WORKFLOW (.md file)
  - Step-by-step process for each feature
  - When to use Discussion vs Build mode
  - Review checkpoints
  - Testing procedures

5. TECHNICAL SPECIFICATIONS (.md file)
  - Database schema and relationships
  - API endpoints and data flow
  - Integration requirements
  - Performance considerations

Please create these files and populate them based on our current project. Make them detailed enough that you can reference them to guide implementation without me needing to provide detailed instructions each time.

After creating the documentation, provide me with a simple "PROCEED" command I can use to start the guided implementation loop.`;

  return (
    <Section id="documentation-setup" title="Documentation Setup (Advanced)" icon={FileText}>
      <Callout type="magic" title="Advanced Technique">
        This advanced workflow sets up an AI-guided development loop where you can simply review Bolt's work and say "proceed" for each step. Perfect for larger projects or when you want maximum efficiency.
      </Callout>

      <div className="space-y-12">
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-10 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <span>Request Documentation Preparation</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-3">When:</p>
                <p className="text-gray-600 dark:text-gray-400">Immediately after your first build completes</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-3">Mode:</p>
                <p className="text-gray-600 dark:text-gray-400">Switch to Discussion Mode 💬 (saves tokens!)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-950/50 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-3">
                <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                <span>Use this exact prompt:</span>
              </h4>
              <CodeBlock title="Documentation Setup Prompt">
                {documentationSetupPrompt}
              </CodeBlock>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-10 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl dark:shadow-black/40 hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <span>Review the Documentation</span>
          </h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-4">What Bolt will do:</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Create 5 comprehensive .md files in your project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Populate them with project-specific details</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Provide you with a "PROCEED" command</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-4">Your job:</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Review each document (switch to Code view to see them)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Make sure they match your vision</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Ask for any changes needed</span>
                </li>
              </ul>
            </div>
          </div>

          <Callout type="tip" title="💡 Hint" className="mt-6">
            These documents become your project's "brain" - they guide all future development decisions.
          </Callout>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-10 rounded-2xl border border-primary-200/60 dark:border-primary-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">📁 Documentation Structure</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-5 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📋 PROJECT_OVERVIEW.md</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Business requirements</li>
                  <li>• Target users</li>
                  <li>• Core features with priorities</li>
                </ul>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 p-5 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🗺️ IMPLEMENTATION_ROADMAP.md</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Phase-by-phase plan</li>
                  <li>• Specific tasks</li>
                  <li>• Dependencies</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-5 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📝 CODE_STRUCTURE_GUIDELINES.md</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• File organization</li>
                  <li>• Component standards</li>
                  <li>• Quality guidelines</li>
                </ul>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 p-5 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">⚙️ TECHNICAL_SPECIFICATIONS.md</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Database schema</li>
                  <li>• API endpoints</li>
                  <li>• Integration requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}