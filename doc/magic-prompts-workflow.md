# Magic Prompts Workflow for Beginners

A Complete Guide from Idea to Deployment - Build Production-Ready Applications with AI

## 🎯 Overview for New Users

This workflow is designed for users who are completely new to Bolt.new. It guides you step-by-step from gathering your project requirements to having a fully deployed application.

### The Magic Promise
You'll spend most of your time reviewing what Bolt builds and simply saying "proceed" to continue. This workflow transforms AI development from complex coding into an intuitive conversation.

### What You'll Learn
- **Step-by-step**: Clear, sequential instructions that build upon each other
- **AI-guided**: Let AI handle the technical complexity while you focus on your vision  
- **Production-ready**: Build applications that are ready for real users and real business needs

---

## 📋 Pre-Development Checklist

Before you start building, gather this essential information to ensure a smooth development process.

### Business Requirements

- **What are you building?** (e.g., "A task management app for small teams")
- **Who will use it?** (e.g., "Remote workers who need to collaborate")
- **Key features needed** (List 3-5 main things users can do)
- **Design style** (Modern, colorful, minimal, etc.)
- **Access method** (Web browser, mobile app, or both)

### Example Completed Checklist

✅ **Building:** A recipe sharing platform  
✅ **Users:** Home cooks who want to share recipes  
✅ **Features:** Upload, search, save, rate, profiles  
✅ **Look:** Clean, food-focused with good photos  
✅ **Access:** Web browser (mobile-friendly)

---

## 🚀 Phase 1: Project Setup & First Build

### Step 1: Create Your First Prompt

**Where:** Go to bolt.new  
**When:** After completing your checklist above

1. Write your basic prompt in the chat box
2. Click "Enhance Prompt" ⭐ (This is crucial for beginners!)
3. Review the enhanced prompt - make sure it matches what you want
4. Press Enter to start building

💡 **Hint:** The "Enhance Prompt" feature turns simple ideas into detailed technical requirements. Always use it for your first prompt!

**Example Basic Prompt:**
```
Build a recipe sharing website where users can upload, search, and save recipes. Make it modern and mobile-friendly.
```

### Step 2: Watch Bolt Build

**What happens:** Bolt will create your entire project structure  
**Your job:** Watch and wait (this takes 2-5 minutes)  
**When it's done:** You'll see a preview of your app

💡 **Hint:** Don't interrupt Bolt while it's building. Let it finish completely before giving feedback.

---

## 🔄 Phase 2: Review & Iterate Loop

This is where you'll spend most of your time. Bolt builds, you review, you say what to change.

### Step 3: Review What Was Built

**Where:** Look at the Preview tab

**What to check:**
1. Does it look right? Check colors, layout, fonts
2. Do the main features work? Try clicking buttons, filling forms
3. Is it mobile-friendly? Click the responsive mode button 📱

### Step 4: Give Feedback (One Thing at a Time)

⚠️ **Important:** Only ask for ONE change per prompt

**Good Examples:**
- "Make the header background blue instead of white"
- "Add a search bar to the top of the page"
- "Make the recipe cards bigger on mobile"

**Bad Examples:**
- "Change the colors, add search, fix the mobile layout, and add user login" ❌

### Step 5: Say "Proceed" or Give Next Instruction

After each change:
- **If you like it:** Say "Looks good, proceed with the next feature"
- **If you want changes:** Give ONE specific instruction
- **If you're unsure:** Switch to Discussion Mode

---

## 📸 Using Screenshots to Fix UI Issues

Sometimes it's easier to show Bolt what's wrong with your UI than to describe it. Screenshots are incredibly powerful for getting precise fixes.

### When to Use Screenshots

**Perfect for:**
- Layout alignment issues
- Mobile responsiveness problems
- Visual design improvements
- Spacing and sizing issues
- Color and styling problems

### How to Take Effective Screenshots

1. **For mobile issues:** Use responsive mode in preview (📱 button), then screenshot
2. **For desktop layout:** Take full-screen screenshots to show spacing and alignment
3. **For specific elements:** Crop to focus on the exact component that needs fixing

### Magic Screenshot Prompts

```
I've attached a screenshot showing the layout issue. Please fix the alignment and spacing problems you can see in the image.
```

```
The attached screenshot shows how the app looks on mobile. Please fix the responsive design issues shown in the image.
```

---

## 🛠️ Phase 3: Adding Advanced Features

### Step 6: Add Database & User Features

**When:** After basic layout and design are good  
**What to say:** "Add user authentication so people can create accounts and log in"

💡 **Hint:** Bolt will automatically set up Supabase for your database. Just click "Apply changes" when prompted.

### Step 7: Add Integrations

Common integrations to add:
- **Payments:** "Add Stripe integration for premium features"
- **File uploads:** "Let users upload recipe photos"
- **Email:** "Send welcome emails to new users"

💡 **Hint:** Each integration has a setup process. Follow Bolt's prompts and click the buttons it shows you.

---

## 🧹 Phase 4: Optimization & Cleanup

### Step 8: Clean Up Your Code

**When:** When your app is mostly working

**What to do:**
1. Switch to Code view (toggle at top)
2. Open Terminal (bottom of screen)
3. Run: `npx knip --production --fix --allow-remove-files`
4. Wait for it to finish

💡 **Hint:** This removes unused files and makes your app faster. Always backup first (Export > Download).

### Step 9: Optimize for Performance

**What to say:** "Review the codebase and break any large files into smaller components"

💡 **Hint:** Bolt will automatically split large files. Just say "proceed" when it shows you the changes.

---

## 🚀 Phase 5: Deployment

### Step 10: Deploy Your App

**Where:** Click "Deploy" button in your project  
**What happens:** Bolt connects to Netlify and makes your app live  
**Your job:** Follow the prompts and click "Apply" when asked

🎉 **Success:** You'll get a live URL you can share with others!

---

## ⚡ Magic Prompts Reference

Use these exact prompts at the right times to get the best results:

### 🔍 Planning (Use Discussion Mode)
```
I want to add [feature name] to my app. What's the best way to implement this? Don't build anything yet, just give me advice.
```

### 📱 Mobile-Friendly Design
```
Make this app fully responsive and mobile-friendly. Test it on different screen sizes and fix any layout issues.
```

### 🎨 Design Improvements
```
Review the current design and suggest 3 specific improvements to make it more modern and user-friendly. Implement the most important one first.
```

### 🔧 Adding Features
```
Add [specific feature] to the app. Break this down into small steps and implement one step at a time.
```

### 🐛 Fixing Issues
```
The [specific thing] isn't working properly. Please fix this issue and test that it works correctly.
```

### 📊 Progress Review
```
Review what we've built so far. What's working well? What still needs to be implemented? Give me a priority list.
```

---

## 📚 Documentation Setup (Advanced)

For larger projects or maximum efficiency, set up comprehensive documentation to guide development:

### The Documentation-Guided Workflow

1. **After your first build completes**, switch to Discussion Mode 💬
2. **Request documentation setup** using this prompt:

```
DOCUMENTATION SETUP REQUEST:

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

After creating the documentation, provide me with a simple "PROCEED" command I can use to start the guided implementation loop.
```

3. **Review the documentation** Bolt creates
4. **Start the implementation loop** with the PROCEED command

---

## 🔄 AI-Guided Implementation Loop (Advanced)

Once documentation is set up, you can use the magical implementation loop:

### How It Works

1. You say: **"PROCEED"**
2. Bolt analyzes the documentation
3. Bolt selects the next logical task
4. Bolt implements following established guidelines
5. Bolt reports what was completed
6. Bolt asks for your approval to continue

### Your Simple Responses

- ✅ **"Proceed"** - Continue to next task
- ✅ **"Proceed with [modification]"** - Continue with changes
- ✅ **"Review first"** - Switch to Discussion Mode
- ❌ **"Revert and try differently"** - Go back and try another approach

### Advanced Documentation Prompts

```
PROCEED: Continue with the next task from our implementation roadmap.
```

```
STATUS CHECK: Review our progress against the roadmap. What's completed? What's next?
```

```
DEPLOYMENT PHASE: Prepare the application for deployment following our deployment checklist.
```

---

## 📈 Success Indicators

### You're doing well when:

✅ Your app preview loads without errors  
✅ Main features work when you test them  
✅ Design looks good on both desktop and mobile  
✅ You can explain what each part of your app does  
✅ Users can complete the main tasks you designed for

### Graduation Checklist

Before deploying, make sure:
- [ ] All main features work
- [ ] App is mobile-friendly
- [ ] No console errors (check browser developer tools)
- [ ] Database is connected (if needed)
- [ ] User authentication works (if needed)
- [ ] App loads quickly
- [ ] You've tested on different devices

---

## 💡 Pro Tips & Essential Hints

### 🔄 Mode Switching

- **Build Mode (🔨):** Bolt makes changes to your code
- **Discussion Mode (💬):** Bolt gives advice without changing anything
- **Switch by:** Clicking the toggle button next to chat box

### 📁 File Management

- **When to use:** When your project gets large (Bolt will tell you)
- **What to do:** Create a .bolt/ignore file to hide unnecessary files
- **Common files to ignore:** node_modules/*, dist/*, *.test.js

### 💾 Backup Strategy

- **Before big changes:** Export > Download
- **Regular backups:** Connect to GitHub (Integrations > GitHub)
- **Quick backup:** Duplicate project (menu next to project name)

### ⚡ Token Efficiency Tips

- Use Discussion Mode for planning (saves 90% tokens)
- One change at a time (don't ask for multiple things)
- Be specific ("Make the button blue" not "improve the design")
- Clean up regularly with Knip command

### 🚨 When Things Go Wrong

- **App won't load:** Say "The preview isn't showing, please fix this"
- **Too many errors:** Click "Revert" to go back to a working version
- **Bolt seems stuck:** Duplicate your project and start fresh

---

## 🆘 Quick Help

Stuck? Try these:

1. Switch to Discussion Mode and ask "What should I do next?"
2. Look at the Preview - does it match what you expected?
3. Check for errors - red text in the chat means something's wrong
4. Start simple - get basic features working before adding complex ones
5. Ask specific questions - "How do I add a search bar?" not "How do I improve this?"

**Remember:** Bolt is your coding partner. Be clear about what you want, patient with the process, and don't be afraid to ask questions!

---

## 🏆 Benefits of This Workflow

### For Beginners:
- ✅ Clear roadmap - Always know what's next
- ✅ Consistent quality - AI follows established standards
- ✅ Less decision fatigue - Just say "proceed"
- ✅ Learning opportunity - Understand through documentation

### For the Project:
- ✅ Maintainable code - Follows established patterns
- ✅ Scalable architecture - Planned from the beginning
- ✅ Complete features - Nothing gets forgotten
- ✅ Professional quality - Meets industry standards

This workflow transforms Bolt from a code generator into your personal development team, complete with project manager, architect, and developer - all working together to build your vision!