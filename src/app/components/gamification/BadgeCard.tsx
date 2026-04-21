import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface BadgeCardProps {
  name: string;
  description: string;
  icon: string;
  earned?: boolean;
  progress?: number;
  total?: number;
}

export function BadgeCard({ name, description, icon, earned, progress, total }: BadgeCardProps) {
  const Icon = (Icons as any)[icon] || Icons.Award;
  const progressPercent = progress && total ? (progress / total) * 100 : 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative bg-card rounded-2xl p-6 border ${
        earned ? "border-primary" : "border-border"
      } shadow-lg hover:shadow-xl transition-all overflow-hidden group`}
    >
      {/* Earned badge glow */}
      {earned && (
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"
        />
      )}

      <div className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center ${
            earned
              ? "bg-gradient-to-br from-primary to-secondary"
              : "bg-muted opacity-50"
          }`}
        >
          <Icon className={`w-8 h-8 ${earned ? "text-white" : "text-muted-foreground"}`} />
        </div>

        <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>

        {!earned && progress !== undefined && total !== undefined && (
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progress</span>
              <span>
                {progress}/{total}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </div>
        )}

        {earned && (
          <div className="text-xs text-primary font-medium">✓ Earned</div>
        )}
      </div>
    </motion.div>
  );
}
