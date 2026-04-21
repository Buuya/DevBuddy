import { Outlet, NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import {
  LayoutDashboard,
  MessageSquare,
  Heart,
  Users,
  User,
  LogOut,
  Moon,
  Sun,
  Shield,
  Flame,
} from "lucide-react";
import { XPBar } from "../gamification/XPBar";

const navItems = [
  { name: "Dashboard", path: "/app", icon: LayoutDashboard },
  { name: "AI Chat", path: "/app/chat", icon: MessageSquare },
  { name: "Mood Tracker", path: "/app/mood", icon: Heart },
  { name: "Forum", path: "/app/forum", icon: Users },
  { name: "Profile", path: "/app/profile", icon: User },
];

export function AppLayout() {
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DevBuddy
          </motion.h1>
          <p className="text-sm mt-1 opacity-60">Your AI support companion</p>
        </div>

        {/* User Stats Card */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="m-4 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                {user.username[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{user.username}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500" />
                  {user.streak_days} day streak
                </div>
              </div>
            </div>
            <XPBar currentXP={user.xp} level={user.level} />
          </motion.div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <NavLink
                to={item.path}
                end={item.path === "/app"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent opacity-70 hover:opacity-100"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </motion.div>
          ))}

          {/* Admin Link */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <NavLink
                to="/app/admin"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-warning-amber text-white shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent opacity-70 hover:opacity-100"
                  }`
                }
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">Admin</span>
              </NavLink>
            </motion.div>
          )}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-sidebar-border space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent opacity-70 hover:opacity-100 transition-all duration-200"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="font-medium">{theme === "dark" ? "Light" : "Dark"} Mode</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent opacity-70 hover:opacity-100 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
