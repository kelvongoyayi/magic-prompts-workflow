import React from 'react';
import ProgressDashboard from './ProgressDashboard';
import SectionProgress from './SectionProgress';
import OverviewSection from './sections/OverviewSection';
import ChecklistSection from './sections/ChecklistSection';
import Phase1Section from './sections/Phase1Section';
import Phase2Section from './sections/Phase2Section';
import Phase3Section from './sections/Phase3Section';
import Phase4Section from './sections/Phase4Section';
import Phase5Section from './sections/Phase5Section';
import MagicPromptsSection from './sections/MagicPromptsSection';
import DocumentationSetupSection from './sections/DocumentationSetupSection';
import ImplementationLoopSection from './sections/ImplementationLoopSection';
import SuccessIndicatorsSection from './sections/SuccessIndicatorsSection';
import ProTipsSection from './sections/ProTipsSection';
import ScreenshotFixesSection from './sections/ScreenshotFixesSection';

export default function MainContent() {
  return (
    <main className="flex-1 max-w-4xl pb-24 lg:pb-0">
      <div className="space-y-16">
        <ProgressDashboard />
        
        <SectionProgress sectionId="overview" title="Overview" estimatedTime={3}>
          <OverviewSection />
        </SectionProgress>
        
        <SectionProgress sectionId="checklist" title="Pre-Development Checklist" estimatedTime={5}>
          <ChecklistSection />
        </SectionProgress>
        
        <SectionProgress sectionId="phase1" title="Phase 1: Project Setup" estimatedTime={8}>
          <Phase1Section />
        </SectionProgress>
        
        <SectionProgress sectionId="phase2" title="Phase 2: Review & Iterate" estimatedTime={10}>
          <Phase2Section />
        </SectionProgress>
        
        <SectionProgress sectionId="phase3" title="Phase 3: Advanced Features" estimatedTime={12}>
          <Phase3Section />
        </SectionProgress>
        
        <SectionProgress sectionId="phase4" title="Phase 4: Optimization" estimatedTime={6}>
          <Phase4Section />
        </SectionProgress>
        
        <SectionProgress sectionId="phase5" title="Phase 5: Deployment" estimatedTime={4}>
          <Phase5Section />
        </SectionProgress>
        
        <SectionProgress sectionId="magic-prompts" title="Magic Prompts Reference" estimatedTime={7}>
          <MagicPromptsSection />
        </SectionProgress>
        
        <SectionProgress sectionId="documentation-setup" title="Documentation Setup (Advanced)" estimatedTime={10}>
          <DocumentationSetupSection />
        </SectionProgress>
        
        <SectionProgress sectionId="implementation-loop" title="AI-Guided Implementation Loop (Advanced)" estimatedTime={8}>
          <ImplementationLoopSection />
        </SectionProgress>
        
        <SectionProgress sectionId="success-indicators" title="Success Indicators" estimatedTime={5}>
          <SuccessIndicatorsSection />
        </SectionProgress>
        
        <SectionProgress sectionId="pro-tips" title="Pro Tips" estimatedTime={6}>
          <ProTipsSection />
        </SectionProgress>
      </div>
    </main>
  );
}