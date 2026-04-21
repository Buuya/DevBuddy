import { motion } from "motion/react";

const userStats = [
  { label: "Moods Logged", value: "47", icon: "🌈", color: "var(--devbuddy-teal)" },
  { label: "AI Chats", value: "23", icon: "💬", color: "var(--devbuddy-blue)" },
  { label: "Forum Posts", value: "8", icon: "✍️", color: "var(--devbuddy-purple)" },
  { label: "Days Active", value: "31", icon: "📅", color: "#F59E0B" },
];

const recentActivity = [
  { action: "Logged mood: Feeling Good", time: "2 hours ago", icon: "🌈" },
  { action: "Posted in forum", time: "Yesterday", icon: "✍️" },
  { action: "Chatted with AI support", time: "2 days ago", icon: "💬" },
  { action: "Logged mood: Great", time: "3 days ago", icon: "🌈" },
];

export function Profile() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-4xl mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Profile
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your progress and growth
          </p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border mb-8 relative overflow-hidden"
        >
          {/* Gradient background */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, var(--devbuddy-blue), var(--devbuddy-purple))`,
            }}
          />

          <div className="relative z-10 flex items-center gap-6">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--devbuddy-blue)] to-[var(--devbuddy-purple)] flex items-center justify-center text-4xl shadow-lg"
            >
              👤
            </motion.div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Alex Developer
              </h2>
              <p className="text-muted-foreground mb-3">alex.developer@example.com</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Member since March 2026
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-border hover:bg-muted/50 transition-all"
            >
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg shadow-black/5 border border-border hover:shadow-xl transition-all relative overflow-hidden"
            >
              {/* Icon background */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 -translate-y-1/2 translate-x-1/2"
                style={{ background: stat.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <p className="text-4xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
        >
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
              >
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Settings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
        >
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
              <div>
                <p className="font-medium">Daily Mood Reminders</p>
                <p className="text-sm text-muted-foreground">Get reminded to log your mood</p>
              </div>
              <div className="w-12 h-6 rounded-full bg-primary cursor-pointer relative">
                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive updates about forum activity
                </p>
              </div>
              <div className="w-12 h-6 rounded-full bg-muted cursor-pointer relative">
                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
