import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Code2, Users, Target, Award, Rocket } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We build with compassion and understanding for the unique challenges developers face.",
  },
  {
    icon: Code2,
    title: "Built by Developers",
    description: "Created by someone who's been there. No corporate wellness programs.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Peer support from people who truly get it. You're not alone.",
  },
];

const milestones = [
  { year: "2025", event: "Project conception during final year studies" },
  { year: "2026 Q1", event: "Development & research phase" },
  { year: "2026 Q2", event: "Beta launch with initial community" },
  { year: "2026 Q3", event: "Public release & dissertation submission" },
];

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              About DevBuddy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A mental health platform for developers, combining the community support of Stack Overflow
              with the professional care approach of BetterHelp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg mb-16"
          >
            <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Story Behind DevBuddy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                DevBuddy was born from a personal need. As a final-year computer science student, I witnessed
                firsthand the toll that our industry takes on mental health—the imposter syndrome, the
                burnout, the isolation of remote work, the pressure of deadlines.
              </p>
              <p>
                I realized that while we have countless tools for code reviews and bug tracking, we have
                almost nothing built specifically for developer well-being. Sure, there are general mental
                health apps, but they don't understand the unique pressures we face. They don't get what it's
                like to deal with production outages, code reviews that feel personal, or the constant feeling
                that everyone else knows more than you do.
              </p>
              <p>
                DevBuddy is my final year dissertation project, but more importantly, it's my attempt to build
                the support system I wish existed when I started coding. A place where you can talk to an AI
                that understands developer struggles, connect with peers who get it, and track your mental
                health journey in a way that actually makes sense for how our brains work.
              </p>
              <p className="pt-4 border-t border-border">
                <strong>— Ayub, Creator & Final Year CS Student</strong>
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl mb-8 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-lg"
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: "var(--primary)" }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--electric-cyan)] to-[var(--neon-purple)] rounded-3xl p-8 md:p-12 text-white mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8" />
              <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Our Mission
              </h2>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              To create a safe, supportive space where developers can prioritize their mental health without
              stigma. To combine the power of AI with genuine human connection. To prove that taking care of
              ourselves makes us better developers, not worse ones.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
              Project Timeline
            </h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span
                      className="text-xl"
                      style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
                    >
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="flex-1 bg-card rounded-xl p-4 border border-border">
                    {milestone.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                Technology Stack
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• Motion (Framer Motion)</li>
                  <li>• React Router</li>
                  <li>• Recharts (Data Visualization)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend & Infrastructure</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Supabase (Database & Auth)</li>
                  <li>• PostgreSQL</li>
                  <li>• Row Level Security</li>
                  <li>• Edge Functions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Join the Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              DevBuddy is more than a dissertation project—it's a movement to normalize mental health care
              in tech. Be part of it.
            </p>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--neon-purple)] text-white shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
