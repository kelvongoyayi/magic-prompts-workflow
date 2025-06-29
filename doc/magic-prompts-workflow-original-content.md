# Magic Prompts Workflow for Beginners

A Complete Guide from Idea to Deployment

## 🎯 Overview for New Users

This workflow is designed for users who are completely new to Bolt.new. It guides you step-by-step from gathering your project requirements to having a fully deployed application. You'll spend most of your time reviewing what Bolt builds and simply saying "proceed" to continue.  
---

## 📋 Pre-Development Checklist

Before you start building, gather this information:

### Business Requirements

*  What are you building? (e.g., "A task management app for small teams")  
*  Who will use it? (e.g., "Remote workers who need to collaborate")  
*  Key features needed (List 3-5 main things users can do)  
*  How should it look? (Modern, colorful, minimal, etc.)  
*  Where will users access it? (Web browser, mobile app, or both)

### Example Completed Checklist

✅ Building: A recipe sharing platform  
✅ Users: Home cooks who want to share and discover recipes  
✅ Features: Upload recipes, search recipes, save favorites, rate recipes, user profiles  
✅ Look: Clean, food-focused design with good photos  
✅ Access: Web browser (mobile-friendly)  
---

## 🚀 Phase 1: Project Setup & First Build

### Step 1: Create Your First Prompt

Where: Go to [bolt.new](https://bolt.new/)  
When: After completing your checklist above

1. Write your basic prompt in the chat box  
2. Click "Enhance Prompt" ⭐ (This is crucial for beginners\!)  
3. Review the enhanced prompt \- make sure it matches what you want  
4. Press Enter to start building

💡 Hint: The "Enhance Prompt" feature turns simple ideas into detailed technical requirements. Always use it for your first prompt\!  
Example Basic Prompt:  
Build a recipe sharing website where users can upload, search, and save recipes. Make it modern and mobile-friendly.

### Step 2: Watch Bolt Build

What happens: Bolt will create your entire project structure  
Your job: Watch and wait (this takes 2-5 minutes)  
When it's done: You'll see a preview of your app  
💡 Hint: Don't interrupt Bolt while it's building. Let it finish completely before giving feedback.  
---

## 🔄 Phase 2: Review & Iterate Loop

This is where you'll spend most of your time. Bolt builds, you review, you say what to change.

### Step 3: Review What Was Built

Where: Look at the Preview tab  
What to check:

1. Does it look right? Check colors, layout, fonts  
2. Do the main features work? Try clicking buttons, filling forms  
3. Is it mobile-friendly? Click the responsive mode button 📱

### Step 4: Give Feedback (One Thing at a Time)

⚠️ Important: Only ask for ONE change per prompt  
Good Examples:

* "Make the header background blue instead of white"  
* "Add a search bar to the top of the page"  
* "Make the recipe cards bigger on mobile"

Bad Examples:

* "Change the colors, add search, fix the mobile layout, and add user login" ❌

### Step 5: Say "Proceed" or Give Next Instruction

After each change:

* If you like it: Say "Looks good, proceed with the next feature"  
* If you want changes: Give ONE specific instruction  
* If you're unsure: Switch to Discussion Mode (see hints below)

---

## 🛠️ Phase 3: Adding Advanced Features

### Step 6: Add Database & User Features

When: After basic layout and design are good  
What to say: "Add user authentication so people can create accounts and log in"  
💡 Hint: Bolt will automatically set up Supabase for your database. Just click "Apply changes" when prompted.

### Step 7: Add Integrations

Common integrations to add:

* Payments: "Add Stripe integration for premium features"  
* File uploads: "Let users upload recipe photos"  
* Email: "Send welcome emails to new users"

💡 Hint: Each integration has a setup process. Follow Bolt's prompts and click the buttons it shows you.  
---

## 🧹 Phase 4: Optimization & Cleanup

### Step 8: Clean Up Your Code

When: When your app is mostly working  
What to do:

1. Switch to Code view (toggle at top)  
2. Open Terminal (bottom of screen)  
3. Run: npx knip \--production \--fix \--allow-remove-files  
4. Wait for it to finish

💡 Hint: This removes unused files and makes your app faster. Always backup first (Export \> Download).

### Step 9: Optimize for Performance

What to say: "Review the codebase and break any large files into smaller components"  
💡 Hint: Bolt will automatically split large files. Just say "proceed" when it shows you the changes.  
---

## 🚀 Phase 5: Deployment

### Step 10: Deploy Your App

Where: Click "Deploy" button in your project  
What happens: Bolt connects to Netlify and makes your app live  
Your job: Follow the prompts and click "Apply" when asked  
💡 Hint: You'll get a live URL you can share with others\!  
---

## 🎯 Magic Prompts for Beginners

Use these exact prompts at the right times:

### 🔍 When You Want to Plan (Use Discussion Mode)

How to switch: Click the toggle button 🔄 next to the chat box  
When to use: When you want to discuss ideas without building  
I want to add \[feature name\] to my app. What's the best way to implement this? Don't build anything yet, just give me advice.

### 📱 For Mobile-Friendly Design

Make this app fully responsive and mobile-friendly. Test it on different screen sizes and fix any layout issues.

### 🎨 For Design Improvements

Review the current design and suggest 3 specific improvements to make it more modern and user-friendly. Implement the most important one first.

### 🔧 For Adding Features

Add \[specific feature\] to the app. Break this down into small steps and implement one step at a time.

### 🐛 When Something's Broken

The \[specific thing\] isn't working properly. Please fix this issue and test that it works correctly.

### 📊 For Progress Review

Review what we've built so far. What's working well? What still needs to be implemented? Give me a priority list.  
---

## 💡 Essential Hints & Tips

### 🔄 Mode Switching

* Build Mode (🔨): Bolt makes changes to your code  
* Discussion Mode (💬): Bolt gives advice without changing anything  
* Switch by: Clicking the toggle button next to chat box

### 📁 File Management

* When to use: When your project gets large (Bolt will tell you)  
* What to do: Create a .bolt/ignore file to hide unnecessary files  
* Common files to ignore: node\_modules/\*, dist/\*, \*.test.js

### 💾 Backup Strategy

* Before big changes: Export \> Download  
* Regular backups: Connect to GitHub (Integrations \> GitHub)  
* Quick backup: Duplicate project (menu next to project name)

### 🚨 When Things Go Wrong

* App won't load: Say "The preview isn't showing, please fix this"  
* Too many errors: Click "Revert" to go back to a working version  
* Bolt seems stuck: Duplicate your project and start fresh

### ⚡ Token Efficiency Tips

* Use Discussion Mode for planning (saves 90% tokens)  
* One change at a time (don't ask for multiple things)  
* Be specific ("Make the button blue" not "improve the design")  
* Clean up regularly with Knip command

---

## 📈 Success Indicators

You're doing well when:

* ✅ Your app preview loads without errors  
* ✅ Main features work when you test them  
* ✅ Design looks good on both desktop and mobile  
* ✅ You can explain what each part of your app does  
* ✅ Users can complete the main tasks you designed for

---

## 🎓 Graduation Checklist

Before deploying, make sure:

*  All main features work  
*  App is mobile-friendly  
*  No console errors (check browser developer tools)  
*  Database is connected (if needed)  
*  User authentication works (if needed)  
*  App loads quickly  
*  You've tested on different devices

---

## 🆘 Quick Help

Stuck? Try these:

1. Switch to Discussion Mode and ask "What should I do next?"  
2. Look at the Preview \- does it match what you expected?  
3. Check for errors \- red text in the chat means something's wrong  
4. Start simple \- get basic features working before adding complex ones  
5. Ask specific questions \- "How do I add a search bar?" not "How do I improve this?"

Remember: Bolt is your coding partner. Be clear about what you want, patient with the process, and don't be afraid to ask questions\!

# Magic Prompts Workflow with Documentation Setup

Complete Beginner's Guide with AI-Guided Implementation

## 🎯 The Complete Flow Overview

flowchart TD  
   A\[First Prompt\] \--\> B\[Documentation Setup\]  
   B \--\> C\[AI Implementation Loop\]  
   C \--\> D\[Review & Proceed\]  
   D \--\> C  
   C \--\> E\[Deploy\]  
    
   style A fill:\#FFE5B4  
   style B fill:\#D4EDDA  
   style C fill:\#CCE5FF  
   style D fill:\#F8D7DA  
   style E fill:\#D1ECF1  
---

## 📋 Phase 1: First Prompt (Same as before)

### Step 1: Create Your Enhanced First Prompt

Where: [bolt.new](https://bolt.new/)  
When: After gathering your requirements

1. Write your basic idea  
2. Click "Enhance Prompt" ⭐  
3. Review and submit

---

## 📚 Phase 2: Documentation Setup (NEW\!)

This is the magic step that sets up your AI-guided development loop\!

### Step 2: Request Documentation Preparation

When: Immediately after your first build completes  
Mode: Switch to Discussion Mode 💬 (saves tokens\!)  
Use this exact prompt:  
DOCUMENTATION SETUP REQUEST:

Please create comprehensive project documentation to guide our development process. I want to set up an AI-guided implementation loop where I can simply review your work and say "proceed" for each step.

Create the following documentation structure:

1\. PROJECT OVERVIEW (.md file)  
  \- Business requirements summary  
  \- Target users and use cases  
  \- Core features list with priorities (High/Medium/Low)  
  \- Technical architecture decisions

2\. IMPLEMENTATION ROADMAP (.md file)  
  \- Phase-by-phase development plan  
  \- Each phase broken into specific tasks  
  \- Dependencies between tasks  
  \- Estimated complexity for each task

3\. CODE STRUCTURE GUIDELINES (.md file)  
  \- File organization standards  
  \- Component size limits (max 300 lines, 450 for complex)  
  \- Naming conventions  
  \- Code quality standards

4\. DEVELOPMENT WORKFLOW (.md file)  
  \- Step-by-step process for each feature  
  \- When to use Discussion vs Build mode  
  \- Review checkpoints  
  \- Testing procedures

5\. TECHNICAL SPECIFICATIONS (.md file)  
  \- Database schema and relationships  
  \- API endpoints and data flow  
  \- Integration requirements  
  \- Performance considerations

Please create these files and populate them based on our current project. Make them detailed enough that you can reference them to guide implementation without me needing to provide detailed instructions each time.

After creating the documentation, provide me with a simple "PROCEED" command I can use to start the guided implementation loop.

### Step 3: Review the Documentation

What Bolt will do:

* Create 5 comprehensive .md files in your project  
* Populate them with project-specific details  
* Provide you with a "PROCEED" command

Your job:

* Review each document (switch to Code view to see them)  
* Make sure they match your vision  
* Ask for any changes needed

💡 Hint: These documents become your project's "brain" \- they guide all future development decisions.  
---

## 🔄 Phase 3: AI-Guided Implementation Loop

### Step 4: Start the Implementation Loop

When: After documentation is approved  
Mode: Switch back to Build Mode 🔨  
Use the PROCEED command Bolt provided, which will look like:  
PROCEED: Implement the next priority task from our roadmap. Reference the project documentation to ensure consistency with our established standards and architecture.

### Step 5: The Magic Loop Begins

What happens:

1. Bolt analyzes the documentation  
2. Selects the next logical task  
3. Implements following the established guidelines  
4. Reports what was completed  
5. Asks for your approval to continue

Your responses:

* ✅ "Proceed" \- Continue to next task  
* ✅ "Proceed with \[specific modification\]" \- Continue with changes  
* ✅ "Review first" \- Switch to Discussion Mode for planning  
* ❌ "Revert and try differently" \- Go back and try another approach

---

## 🎯 Magic Documentation-Guided Prompts

### 📋 For Implementation Loop

PROCEED: Continue with the next task from our implementation roadmap.

### 🔍 For Status Check

STATUS CHECK: Review our progress against the roadmap. What's completed? What's next? Any blockers?

### 📝 For Documentation Updates

UPDATE DOCS: Based on what we've built, update the relevant documentation files to reflect current state.

### 🎨 For Design Phase

DESIGN PHASE: Implement the UI/UX improvements outlined in our specifications. Focus on responsive design and user experience.

### 🔧 For Technical Phase

TECHNICAL PHASE: Implement the backend functionality and integrations as specified in our technical documentation.

### 🧹 For Optimization Phase

OPTIMIZATION PHASE: Review codebase against our guidelines. Break down large files, run Knip cleanup, and optimize performance.

### 🚀 For Deployment Phase

DEPLOYMENT PHASE: Prepare the application for deployment following our deployment checklist.  
---

## 📊 Documentation Structure Example

### PROJECT\_OVERVIEW.md

\# Project Overview

\#\# Business Requirements  
\- Primary goal: \[Your main objective\]  
\- Target users: \[Who will use this\]  
\- Success metrics: \[How you'll measure success\]

\#\# Core Features (Priority Order)  
\#\#\# High Priority  
1\. \[Essential feature 1\]  
2\. \[Essential feature 2\]

\#\#\# Medium Priority  
1\. \[Important feature 1\]  
2\. \[Important feature 2\]

\#\#\# Low Priority  
1\. \[Nice-to-have feature 1\]

\#\# Technical Decisions  
\- Framework: React/Vue/etc  
\- Database: Supabase/Firebase/etc  
\- Hosting: Netlify/Vercel/etc  
\- Authentication: \[Method chosen\]

### IMPLEMENTATION\_ROADMAP.md

\# Implementation Roadmap

\#\# Phase 1: Foundation (Week 1\)  
\- \[ \] Basic project structure  
\- \[ \] Core components setup  
\- \[ \] Database schema creation  
\- \[ \] Authentication implementation

\#\# Phase 2: Core Features (Week 2-3)  
\- \[ \] \[Feature 1\] implementation  
\- \[ \] \[Feature 2\] implementation  
\- \[ \] User interface polish

\#\# Phase 3: Advanced Features (Week 4\)  
\- \[ \] \[Advanced feature 1\]  
\- \[ \] Integrations setup  
\- \[ \] Performance optimization

\#\# Phase 4: Deployment (Week 5\)  
\- \[ \] Testing and bug fixes  
\- \[ \] Deployment setup  
\- \[ \] Go-live preparation  
---

## 💡 Benefits of Documentation-Guided Development

### For Beginners:

* ✅ Clear roadmap \- Always know what's next  
* ✅ Consistent quality \- AI follows established standards  
* ✅ Less decision fatigue \- Just say "proceed"  
* ✅ Learning opportunity \- Understand the process through documentation

### For the AI:

* ✅ Better context \- Understands the full project vision  
* ✅ Consistent decisions \- References established guidelines  
* ✅ Efficient implementation \- No need to re-explain requirements  
* ✅ Quality assurance \- Built-in standards and checkpoints

### For the Project:

* ✅ Maintainable code \- Follows established patterns  
* ✅ Scalable architecture \- Planned from the beginning  
* ✅ Complete features \- Nothing gets forgotten  
* ✅ Professional quality \- Meets industry standards

---

## 🔄 The Perfect Loop in Action

You: "PROCEED"  
↓  
Bolt: "Implementing user authentication system as specified in our technical docs. This includes login/signup forms, password validation, and session management. Estimated completion: 5 minutes."  
↓  
\[Bolt builds the feature\]  
↓  
Bolt: "✅ User authentication completed. Features implemented:  
\- Login/signup forms with validation  
\- Password strength requirements  
\- Session management  
\- Error handling  
\- Responsive design

Ready to proceed with next task: User profile management system?"  
↓  
You: "Proceed"  
↓  
\[Loop continues...\]  
---

## 🚨 When to Break the Loop

### Switch to Discussion Mode when:

* ❓ You want to understand what's being built  
* 🤔 You need to make a design decision  
* 🐛 Something isn't working as expected  
* 💡 You have a new idea to discuss  
* 📋 You want to review progress

### Manual intervention needed when:

* 🔴 Errors that Bolt can't auto-fix  
* 🎨 Design choices that need your input  
* 🔧 Integration setup (Stripe, Supabase, etc.)  
* 🚀 Deployment configuration

---

## 📈 Success Indicators

### Documentation Setup Success:

* ✅ All 5 documentation files created  
* ✅ Files contain project-specific details  
* ✅ Roadmap has clear, actionable tasks  
* ✅ Code guidelines are specific and measurable

### Implementation Loop Success:

* ✅ Each "PROCEED" results in meaningful progress  
* ✅ Features are completed according to specifications  
* ✅ Code quality remains consistent  
* ✅ You understand what's being built without deep technical knowledge

---

## 🎓 Pro Tips for Documentation-Guided Development

1. Review docs regularly \- Update them as your project evolves  
2. Be specific in initial setup \- Better docs \= better implementation  
3. Trust the process \- Let the AI follow the established plan  
4. Intervene when needed \- Don't hesitate to provide guidance  
5. Celebrate milestones \- Acknowledge completed phases

This documentation-guided approach transforms Bolt from a code generator into your personal development team, complete with project manager, architect, and developer \- all guided by the comprehensive documentation you establish at the beginning\!  
