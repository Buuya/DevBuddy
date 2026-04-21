import { motion } from "motion/react";
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import {
  TrendingUp,
  MessageSquare,
  Heart,
  Users,
  Trophy,
  Zap,
  Calendar,
  Target,
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { StreakCounter } from "../gamification/StreakCounter";
import { BadgeCard } from "../gamification/BadgeCard";

// Mock data - will be replaced with real Supabase data
const moodData = [
  { date: "Mon", mood: 4, activity: 8 },
  { date: "Tue", mood: 3, activity: 6 },
  { date: "Wed", mood: 5, activity: 10 },
  { date: "Thu", mood: 4, activity: 7 },
  { date: "Fri", mood: 5, activity: 9 },
  { date: "Sat", mood: 3, activity: 5 },
  { date: "Sun", mood: 4, activity: 8 },
];

const activityData = [
  { name: "Chats", value: 23, color: "var(--electric-cyan)" },
  { name: "Moods", value: 47, color: "var(--neon-purple)" },
  { name: "Posts", value: 8, color: "var(--matrix-green)" },
  { name: "Comments", value: 15, color: "var(--warning-amber)" },
];

const badges = [
  { name: "First Steps", description: "Created your account", icon: "Award", earned: true },
  { name: "Mood Tracker", description: "Log 10 moods", icon: "Heart", earned: true, progress: 47, total: 10 },
  { name: "Consistent Care", description: "7-day streak", icon: "Flame", earned: true },
  { name: "Community Helper", description: "Post 5 times", icon: "MessageSquare", earned: true, progress: 8, total: 5 },
  { name: "Rising Star", description: "Reach level 5", icon: "Star", earned: true, progress: 8, total: 5 },
  { name: "Veteran", description: "Reach level 10", icon: "Trophy", earned: false, progress: 8, total: 10 },
];

const stats = [
  { label: "Total XP", value: "2,450", change: "+120 this week", icon: Zap, color: "var(--electric-cyan)" },
  { label: "Forum Karma", value: "127", change: "+8 this week", icon: TrendingUp, color: "var(--neon-purple)" },
  { label: "Helped Users", value: "34", change: "+3 this week", icon: Users, color: "var(--matrix-green)" },
  { label: "Days Active", value: "31", change: "Since March 2026", icon: Calendar, color: "var(--warning-amber)" },
];

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header with Greeting */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Welcome back, {user?.username || "Developer"}! 👋
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            Here's your mental health journey at a glance
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: stat.color }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  <span className="text-xs text-muted-foreground">{stat.change}</span>
                </div>
                <div className="text-3xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Mood Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  Mood & Activity Trends
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Last 7 days</p>
              </div>
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--electric-cyan)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--electric-cyan)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" domain={[0, 5]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="mood"
                  stroke="var(--electric-cyan)"
                  strokeWidth={3}
                  fill="url(#moodGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <StreakCounter days={user?.streak_days || 12} />
          </motion.div>
        </div>

        {/* Activity Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                Activity Breakdown
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Your engagement this month</p>
            </div>
            <Target className="w-6 h-6 text-secondary" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
              />
              <Bar dataKey="value" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                Your Badges
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Earned {badges.filter(b => b.earned).length} of {badges.length} badges
              </p>
            </div>
            <Trophy className="w-6 h-6 text-accent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <BadgeCard {...badge} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Link to="/app/mood">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gradient-to-br from-matrix-green to-electric-cyan p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Heart className="w-8 h-8 mb-4" />
              <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Log Today's Mood
              </h3>
              <p className="text-sm opacity-90">How are you feeling right now?</p>
            </motion.div>
          </Link>

          <Link to="/app/chat">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gradient-to-br from-neon-purple to-electric-cyan p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-8 h-8 mb-4" />
              <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Chat with AI
              </h3>
              <p className="text-sm opacity-90">Get support anytime, 24/7</p>
            </motion.div>
          </Link>

          <Link to="/app/forum">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gradient-to-br from-warning-amber to-neon-purple p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Users className="w-8 h-8 mb-4" />
              <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Join Discussion
              </h3>
              <p className="text-sm opacity-90">Connect with the community</p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
