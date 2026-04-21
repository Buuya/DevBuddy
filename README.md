# DevBuddy - AI Mental Health Platform for Developers
## Final Year Dissertation Project by Ayub

🚀 **A production-ready mental health platform combining Stack Overflow's community features with BetterHelp's support approach, specifically designed for developers.**

---

## 🎯 What's Been Built

DevBuddy is a comprehensive, full-featured mental health platform with:

### ✨ Core Features

#### 🎮 **Gamification System**
- **XP & Leveling**: Users earn 100 XP per level with dynamic progress bars
- **Streak Tracking**: Animated flame counter for consecutive daily activity
- **Badges System**: 7 unique badges with progress tracking
  - First Steps, Mood Tracker, Consistent Care, Community Helper, Rising Star, Veteran, Supportive
- **Visual Feedback**: Shimmer effects, gradient animations, and celebratory UI

#### 🌙 **Dark Mode**
- Fully implemented theme system with toggle
- Developer-focused terminal aesthetic in dark mode
- Smooth transitions between themes
- Persistent preference storage

#### 📊 **Advanced Dashboard**
- **Data Visualizations** (using Recharts):
  - Mood & Activity trend charts (Area Chart)
  - Activity breakdown (Bar Chart)
  - 7-day mood history with gradients
- **Quick Stats**: XP, Karma, Helped Users, Days Active
- **Gamification Display**: Streak counter, badges gallery, XP progress bar
- **Quick Actions**: Gradient cards for mood logging, AI chat, forum

#### 👑 **Admin Dashboard**
- **Analytics**:
  - User growth charts (Area Chart)
  - Mood distribution (Pie Chart)
  - Platform activity breakdown (Bar Chart)
  - Real-time statistics
- **User Management**:
  - View recent users
  - User status monitoring
  - Ban/View controls
- **Content Moderation**:
  - Report management system
  - Status tracking (pending/reviewing/resolved)
  - Quick action buttons
- **Newsletter System**:
  - Subscriber statistics
  - Send newsletter interface
  - Open rate tracking

#### 💬 **AI Chat**
- Messaging interface with left/right message alignment
- Real-time timestamps
- Simulated AI responses
- Supportive, calming UI design

#### 🌈 **Mood Tracker**
- 5-level mood selection with emojis and color coding
- Optional text notes
- Mood history with timeline view
- Date tracking for each entry

#### 👥 **Forum**
- Stack Overflow-style post listing
- Create post modal
- Post detail view with comments section
- Upvote system (UI ready)

#### 👤 **Profile**
- User statistics dashboard
- Recent activity feed
- Preference toggles
- Visual stat cards with hover effects

#### 🏠 **Landing Page**
- Hero section with animated gradients
- Feature cards with icons
- Statistics showcase
- Testimonials section ready
- Responsive design

#### 📧 **Contact & About Pages**
- Contact form with validation
- Emergency resources section
- Project timeline
- Tech stack showcase
- Mission statement

### 🎨 Design System

#### Typography
- **Primary**: Space Grotesk (modern, developer-friendly)
- **Monospace**: JetBrains Mono (for code snippets)
- **Display**: Cal Sans (headings)

#### Color Palette
```css
--electric-cyan: #06B6D4   /* Primary actions */
--neon-purple: #8B5CF6     /* Secondary elements */
--matrix-green: #10B981    /* Success, achievements */
--warning-amber: #F59E0B   /* Warnings, streaks */
--error-red: #EF4444       /* Errors, critical */
--code-blue: #3B82F6       /* Code highlights */
```

## 🌐 Live Demo

🚀 Try DevBuddy live: https://devayub.netlify.app/

#### Components
- All icons from **Lucide React** (no emojis in production)
- Motion animations throughout
- Responsive grid layouts
- Glassmorphism effects
- Gradient accents

---

## 🥚 Developer Easter Eggs

### Console Commands
Open the browser console (F12) and try:
```javascript
devbuddy.stats()     // View platform statistics
devbuddy.konami()    // Activate developer mode
devbuddy.credits()   // See project credits
devbuddy.rainbow()   // Party mode!
devbuddy[42]()       // Secret message
```

### Konami Code
Type the Konami code: `↑ ↑ ↓ ↓ ← → ← → B A` to unlock developer mode!

### HTML Comments
View page source to find hidden messages for curious developers.

### Data Attributes
Inspect elements to find hidden `data-*` attributes with fun messages.

---

## 🗄️ Database Setup (Supabase)

### Prerequisites
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Copy your project URL and anon key

### Connecting to Github
1. Open the **Make settings page** in github
2. Navigate to the Supabase section
3. Connect your Supabase project
4. Enter your project details

### Running the Schema
1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Create a new query
4. Copy the ENTIRE contents of `SUPABASE_SCHEMA.md`
5. Paste and run the query
6. Verify all tables were created in the Table Editor

### What Gets Created
- **Tables**: profiles, badges, user_badges, mood_entries, chat_messages, forum_posts, forum_comments, post_votes, comment_votes, reports, newsletter_subscriptions, contact_submissions
- **Functions**: update_user_xp(), update_user_streak()
- **Triggers**: Auto-update timestamps
- **RLS Policies**: Secure data access
- **Default Data**: 7 badges pre-populated

---

## 📦 Tech Stack

### Frontend
- **React** + **TypeScript** - Type-safe component development
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **Motion** (Framer Motion) - Smooth animations
- **React Router** - Client-side routing with data mode
- **Recharts** - Data visualization library
- **Lucide React** - Icon system
- **React Hook Form 7.55.0** - Form management

### Backend (Ready to Connect)
- **Supabase** - PostgreSQL database, authentication, real-time subscriptions
- **Row Level Security** - Data access control
- **Edge Functions** - Serverless backend logic

### Infrastructure
- **Vite** - Build tool and dev server
- **pnpm** - Package manager

---

## 🚀 Current State

### ✅ Fully Implemented (with localStorage fallback)
- All UI components and pages
- Routing and navigation
- Dark mode system
- Gamification visuals
- Form validation
- Animations and interactions
- Responsive design
- Developer easter eggs

### 🔌 Ready for Supabase Connection
Once you connect Supabase, the following will work with real data:
- User authentication and profiles
- Persistent mood tracking
- AI chat history
- Forum posts and comments
- Voting system
- Badge earning automation
- XP and level progression
- Streak tracking across sessions
- Admin analytics with real metrics
- Newsletter management
- Report system

### 📝 How It Works Now (Before Supabase)
- Mock data in AuthContext (current user: Ayub, admin role)
- localStorage for preferences (dark mode)
- In-memory state for temporary data
- All UI fully functional for demonstration

---

## 🎓 Dissertation Notes

### Research Areas Demonstrated
1. **Gamification in Mental Health**: XP, badges, streaks to encourage engagement
2. **Developer-Specific UX**: Terminal aesthetics, code-style easter eggs, Stack Overflow patterns
3. **Community Support**: Forum with voting, similar to Stack Overflow
4. **AI Integration**: Chat interface ready for LLM integration
5. **Data Visualization**: Charts for mood tracking and analytics
6. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
7. **Performance**: Code splitting, lazy loading, optimized animations

### Key Metrics to Track
- User retention (streak system measures this)
- Engagement (XP, posts, chats)
- Mood improvement over time (mood history charts)
- Community interaction (forum posts, upvotes)

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start dev server (already running in Figma Make)
npm run dev

# Build for production
npm run build
```

---

## 📊 Admin Access

The mock user is already set as admin:
- **Username**: Ayub
- **Email**: ayub@devbuddy.dev
- **Role**: admin

Access admin dashboard at `/app/admin` after logging in.

---

## 🎨 Design Philosophy

### Why This Design?
1. **Developer-First**: Familiar patterns (Stack Overflow layout, GitHub aesthetics)
2. **Calming Colors**: Soft gradients, not aggressive
3. **Terminal Vibes**: Dark mode feels like a code editor
4. **Playful Gamification**: Makes mental health care less clinical
5. **Visual Feedback**: Every action has motion, rewards feel satisfying

### Inspirations
- **Stack Overflow**: Community, voting, reputation system
- **BetterHelp**: Support approach, therapist matching concept (adapted to AI)
- **GitHub**: Developer-friendly UI, contribution graphs
- **Duolingo**: Streak system, XP gamification
- **Discord**: Chat interface, server structure inspiration

---

## 🚀 Next Steps for Production

1. **Connect Supabase** (see Database Setup above)
2. **Implement Real AI**: Replace mock responses with OpenAI/Anthropic API
3. **Add Email Service**: SendGrid/Resend for newsletters
4. **Image Upload**: Supabase Storage for avatars
5. **Real-time Features**: Supabase subscriptions for live chat
6. **Testing**: Add Jest + React Testing Library
7. **CI/CD**: GitHub Actions for automated deployment
8. **Monitoring**: Sentry for error tracking
9. **Analytics**: PostHog or Mixpanel

---

## 📄 License & Credits

**Created by**: Ayub  
**Project Type**: Final Year Computer Science Dissertation  
**Year**: 2026  
**University**: University of Greenwich

Built with ❤️ and ☕

---

## 🆘 Support Resources

DevBuddy is a mental health platform, but if you're in crisis, please reach out to professional services:

- **Samaritans (UK)**: 116 123
- **Crisis Text Line**: Text HELLO to 50808  
- **International**: [findahelpline.com](https://findahelpline.com)

---

## 🎯 Project Goals Achieved

✅ Modern, responsive UI  
✅ Gamification system with real engagement mechanics  
✅ Community features (forum, voting)  
✅ AI chat interface  
✅ Mood tracking with data visualization  
✅ Admin dashboard with comprehensive analytics  
✅ Dark mode with smooth transitions  
✅ Developer-focused design and easter eggs  
✅ Production-ready database schema  
✅ Scalable architecture  
✅ Accessibility considerations  
✅ Beautiful, calming aesthetic  

---

**Remember**: Taking care of your mental health isn't a weakness it's what makes you a better developer. 💙

Open your browser console to discover hidden features! 🥚
