import { motion } from "motion/react";
import { Link } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";
import {
  Code2, Heart, Users, Shield, Zap, Trophy,
  Moon, Sun, ArrowRight, CheckCircle, Star
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "AI-Powered Support",
    description: "Get 24/7 emotional support from our empathetic AI trained on mental health best practices.",
    color: "var(--electric-cyan)",
  },
  {
    icon: Users,
    title: "Developer Community",
    description: "Connect with fellow developers who understand the unique challenges of our industry.",
    color: "var(--neon-purple)",
  },
  {
    icon: Trophy,
    title: "Gamified Wellness",
    description: "Build healthy habits with XP, levels, badges, and streak tracking that makes self-care fun.",
    color: "var(--matrix-green)",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your data is encrypted and private. We'll never share your personal information.",
    color: "var(--warning-amber)",
  },
  {
    icon: Zap,
    title: "Mood Analytics",
    description: "Track patterns in your emotional well-being with beautiful data visualizations.",
    color: "var(--code-blue)",
  },
  {
    icon: Code2,
    title: "Built by Developers",
    description: "Created by someone who gets it. No corporate BS, just genuine peer support.",
    color: "var(--error-red)",
  },
];

const stats = [
  { value: "1,247", label: "Active Developers" },
  { value: "23,891", label: "Support Messages" },
  { value: "89", label: "Day Max Streak" },
  { value: "4.9/5", label: "Community Rating" },
];

export function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--electric-cyan)] to-[var(--neon-purple)] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              DevBuddy
            </span>
          </motion.div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--neon-purple)] text-white shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--electric-cyan) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)" }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-sm">
                <span style={{ fontFamily: "var(--font-mono)" }} className="text-primary">const</span>{" "}
                mentalHealth = <span className="text-accent">priority</span>;
              </span>
            </motion.div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Mental Health{" "}
              <span className="bg-gradient-to-r from-[var(--electric-cyan)] via-[var(--neon-purple)] to-[var(--matrix-green)] bg-clip-text text-transparent">
                Matters
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A safe space for developers to manage stress, burnout, and mental health.
              Combining AI support with community connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--neon-purple)] text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border-2 border-border hover:bg-muted/50 transition-all text-lg"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Built for Developers, By Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique pressures of software development. Here's how we help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: feature.color }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--electric-cyan)] to-[var(--neon-purple)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTQ2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Prioritize Your Well-being?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of developers taking control of their mental health.
              </p>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl bg-white text-gray-900 shadow-xl hover:shadow-2xl transition-all text-lg inline-flex items-center gap-3"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <p className="text-sm mt-4 opacity-75">No credit card required • Forever free tier</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--electric-cyan)] to-[var(--neon-purple)] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  DevBuddy
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Mental health support for developers, built with empathy and understanding.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/about" className="block hover:text-foreground transition-colors">About</Link>
                <Link to="/contact" className="block hover:text-foreground transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Blog</a>
                <a href="#" className="block hover:text-foreground transition-colors">Help Center</a>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="block hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © 2026 DevBuddy. Built by Ayub for Final Year Dissertation.
              Made with <Heart className="w-4 h-4 inline text-error-red" /> and ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
