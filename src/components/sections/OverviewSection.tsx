import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import Section from '../ui/Section';
import Callout from '../ui/Callout';

export default function OverviewSection() {
  return (
    <Section id="overview" title="Overview for New Users" icon={Target}>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        This workflow is designed for users who are completely new to Bolt.new. It guides you step-by-step 
        from gathering your project requirements to having a fully deployed application.
      </p>

      <Callout type="magic" title="The Magic Promise">
        You'll spend most of your time reviewing what Bolt builds and simply saying "proceed" to continue. 
        This workflow transforms AI development from complex coding into an intuitive conversation.
      </Callout>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <motion.div 
          className="group bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-850 p-6 rounded-xl border border-gray-200/60 dark:border-gray-600/80 shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 dark:from-primary-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-4xl mb-4 drop-shadow-sm">🎯</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg tracking-tight">Step-by-Step</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
            Clear, sequential instructions that build upon each other progressively.
          </p>
          </div>
        </motion.div>

        <motion.div 
          className="group bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-850 p-6 rounded-xl border border-gray-200/60 dark:border-gray-600/80 shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 dark:from-secondary-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-4xl mb-4 drop-shadow-sm">🤖</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg tracking-tight">AI-Guided</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
            Let AI handle the technical complexity while you focus on your vision.
          </p>
          </div>
        </motion.div>

        <motion.div 
          className="group bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-850 p-6 rounded-xl border border-gray-200/60 dark:border-gray-600/80 shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 dark:from-accent-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-4xl mb-4 drop-shadow-sm">🚀</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg tracking-tight">Production-Ready</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
            Build applications that are ready for real users and real business needs.
          </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}