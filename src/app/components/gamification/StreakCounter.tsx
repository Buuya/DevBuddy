import { motion } from "motion/react";
import { Flame } from "lucide-react";

interface StreakCounterProps {
  days: number;
}

export function StreakCounter({ days }: StreakCounterProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
    >
      {/* Animated flames */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl bg-white/20"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Flame className="w-8 h-8" />
          </motion.div>
          <span className="text-sm opacity-90">Current Streak</span>
        </div>
        <div className="text-5xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
          {days}
        </div>
        <div className="text-sm opacity-75">day{days !== 1 ? "s" : ""} in a row</div>
      </div>
    </motion.div>
  );
}
