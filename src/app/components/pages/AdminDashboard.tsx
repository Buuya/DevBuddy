import { motion } from "motion/react";
import { useState } from "react";
import {
  Users,
  MessageSquare,
  Heart,
  AlertTriangle,
  TrendingUp,
  Shield,
  Mail,
  Activity,
  BarChart3,
  UserCheck,
  Ban,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useAuth } from "../../contexts/AuthContext";

// Mock admin data - replace with Supabase queries
const overviewStats = [
  { label: "Total Users", value: "1,247", change: "+127 this month", icon: Users, color: "var(--electric-cyan)" },
  { label: "Active Today", value: "342", change: "+23 vs yesterday", icon: Activity, color: "var(--matrix-green)" },
  { label: "Total Moods", value: "8,432", change: "+891 this week", icon: Heart, color: "var(--neon-purple)" },
  { label: "Pending Reports", value: "7", change: "3 reviewed today", icon: AlertTriangle, color: "var(--warning-amber)" },
];

const userGrowthData = [
  { month: "Jan", users: 234, active: 189 },
  { month: "Feb", users: 456, active: 378 },
  { month: "Mar", users: 789, active: 645 },
  { month: "Apr", users: 1247, active: 1023 },
];

const activityData = [
  { name: "Chats", value: 23891 },
  { name: "Moods", value: 8432 },
  { name: "Posts", value: 567 },
  { name: "Comments", value: 1243 },
];

const moodDistribution = [
  { name: "Great", value: 2341, color: "var(--matrix-green)" },
  { name: "Good", value: 3421, color: "var(--electric-cyan)" },
  { name: "Okay", value: 1789, color: "var(--warning-amber)" },
  { name: "Low", value: 654, color: "var(--neon-purple)" },
  { name: "Struggling", value: 227, color: "var(--error-red)" },
];

const recentUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", joined: "2 hours ago", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", joined: "5 hours ago", status: "active" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", joined: "1 day ago", status: "inactive" },
  { id: 4, name: "Sarah Williams", email: "sarah@example.com", joined: "2 days ago", status: "active" },
];

const reports = [
  { id: 1, type: "post", reporter: "User #234", reason: "Inappropriate content", status: "pending" },
  { id: 2, type: "comment", reporter: "User #567", reason: "Harassment", status: "reviewing" },
  { id: 3, type: "user", reporter: "User #891", reason: "Spam", status: "pending" },
];

const newsletterStats = {
  total: 2847,
  active: 2654,
  unsubscribed: 193,
  openRate: "68%",
};

export function AdminDashboard() {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "reports" | "newsletter">("overview");

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You don't have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-warning-amber" />
            <h1 className="text-4xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Admin Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Manage users, content, and platform analytics
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "users", label: "Users", icon: Users },
            { id: "reports", label: "Reports", icon: AlertTriangle },
            { id: "newsletter", label: "Newsletter", icon: Mail },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {overviewStats.map((stat, index) => (
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

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* User Growth Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  User Growth
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--electric-cyan)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--electric-cyan)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="var(--electric-cyan)"
                      strokeWidth={3}
                      fill="url(#usersGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="active"
                      stroke="var(--matrix-green)"
                      strokeWidth={2}
                      fill="transparent"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Mood Distribution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Mood Distribution
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={moodDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => entry.name}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {moodDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Activity Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Platform Activity
              </h2>
              <ResponsiveContainer width="100%" height={250}>
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
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Recent Users
            </h2>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                      {user.name[0]}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{user.joined}</div>
                      <div className={`text-xs ${user.status === 'active' ? 'text-matrix-green' : 'text-muted-foreground'}`}>
                        {user.status}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-primary" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-error-red/10 hover:bg-error-red/20 transition-colors"
                      >
                        <Ban className="w-4 h-4 text-error-red" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Content Reports
            </h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all border-l-4 border-warning-amber"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                          {report.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          report.status === 'pending' ? 'bg-warning-amber/10 text-warning-amber' :
                          report.status === 'reviewing' ? 'bg-electric-cyan/10 text-electric-cyan' :
                          'bg-matrix-green/10 text-matrix-green'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="font-medium mb-1">Reported by {report.reporter}</div>
                      <div className="text-sm text-muted-foreground">{report.reason}</div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20 transition-colors text-sm"
                      >
                        Resolve
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-error-red/10 text-error-red hover:bg-error-red/20 transition-colors text-sm"
                      >
                        Dismiss
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Newsletter Tab */}
        {activeTab === "newsletter" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-sm text-muted-foreground mb-1">Total Subscribers</div>
                <div className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  {newsletterStats.total}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-sm text-muted-foreground mb-1">Active</div>
                <div className="text-3xl text-matrix-green" style={{ fontFamily: "var(--font-display)" }}>
                  {newsletterStats.active}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-sm text-muted-foreground mb-1">Unsubscribed</div>
                <div className="text-3xl text-error-red" style={{ fontFamily: "var(--font-display)" }}>
                  {newsletterStats.unsubscribed}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-sm text-muted-foreground mb-1">Open Rate</div>
                <div className="text-3xl text-electric-cyan" style={{ fontFamily: "var(--font-display)" }}>
                  {newsletterStats.openRate}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Send Newsletter
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-neon-purple text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Send to {newsletterStats.active} subscribers
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
