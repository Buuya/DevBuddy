import { useState } from "react";
import { motion } from "motion/react";

interface MoodEntry {
  id: number;
  mood: string;
  emoji: string;
  note: string;
  date: Date;
}

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "var(--devbuddy-teal)" },
  { emoji: "🙂", label: "Good", value: 4, color: "var(--devbuddy-blue)" },
  { emoji: "😐", label: "Okay", value: 3, color: "#A0AEC0" },
  { emoji: "😔", label: "Low", value: 2, color: "#F59E0B" },
  { emoji: "😞", label: "Struggling", value: 1, color: "#EF4444" },
];

const mockHistory: MoodEntry[] = [
  {
    id: 1,
    mood: "Great",
    emoji: "😊",
    note: "Finished a big project successfully!",
    date: new Date(2026, 3, 14),
  },
  {
    id: 2,
    mood: "Good",
    emoji: "🙂",
    note: "Productive day with the team",
    date: new Date(2026, 3, 13),
  },
  {
    id: 3,
    mood: "Okay",
    emoji: "😐",
    note: "Feeling a bit tired",
    date: new Date(2026, 3, 12),
  },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null);
  const [note, setNote] = useState("");
  const [history, setHistory] = useState<MoodEntry[]>(mockHistory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) return;

    const newEntry: MoodEntry = {
      id: history.length + 1,
      mood: selectedMood.label,
      emoji: selectedMood.emoji,
      note,
      date: new Date(),
    };

    setHistory([newEntry, ...history]);
    setSelectedMood(null);
    setNote("");
  };

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
            Mood Tracker
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your emotional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Log Mood Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              How are you feeling?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mood Selection */}
              <div>
                <label className="block mb-4 text-sm opacity-70">Select your mood</label>
                <div className="flex gap-3 flex-wrap">
                  {moods.map((mood, index) => (
                    <motion.button
                      key={mood.value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setSelectedMood(mood)}
                      className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl border-2 transition-all ${
                        selectedMood?.value === mood.value
                          ? "border-primary shadow-lg scale-110"
                          : "border-border hover:border-primary/50"
                      }`}
                      style={{
                        background:
                          selectedMood?.value === mood.value
                            ? `${mood.color}15`
                            : "transparent",
                      }}
                    >
                      <span className="text-3xl mb-1">{mood.emoji}</span>
                      <span className="text-xs">{mood.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Note Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block mb-2 text-sm opacity-70">
                  How are you feeling? (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!selectedMood}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--devbuddy-teal)] to-[var(--devbuddy-blue)] text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Log Mood
              </motion.button>
            </form>
          </motion.div>

          {/* Mood History Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Mood History
            </h2>

            <div className="space-y-4">
              {history.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="p-5 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{entry.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">{entry.mood}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.date.toLocaleDateString()}
                        </p>
                      </div>
                      {entry.note && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {history.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No mood entries yet</p>
                <p className="text-sm mt-2">Start tracking your mood today!</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
