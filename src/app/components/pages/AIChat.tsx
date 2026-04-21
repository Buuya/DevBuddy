import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm here to support you. How are you feeling today?",
    sender: "ai",
    timestamp: new Date(),
  },
];

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const idRef = useRef(2);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: idRef.current++,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      const aiMessage: Message = {
        id: idRef.current++,
        text: data.reply,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        id: idRef.current++,
        text: "Something went wrong. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-b border-border bg-card/50 backdrop-blur-sm"
      >
        <h1
          className="text-3xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI Support Chat
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          A safe, judgment-free space to share
        </p>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-md px-5 py-3 rounded-2xl shadow-sm ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-[var(--devbuddy-blue)] to-[var(--devbuddy-purple)] text-white rounded-br-md"
                    : "bg-card border border-border rounded-bl-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>

                <p
                  className={`text-xs mt-2 ${
                    message.sender === "user"
                      ? "text-white/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-md px-5 py-3 rounded-2xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">
                  DevBuddy is typing...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-t border-border bg-card/50 backdrop-blur-sm"
      >
        <form onSubmit={handleSend} className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isTyping}
            className="flex-1 px-5 py-4 rounded-2xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isTyping}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--devbuddy-blue)] to-[var(--devbuddy-purple)] text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
          >
            Send
          </motion.button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-3">
          This is a safe space. Your conversations are private and supportive.
        </p>
      </motion.div>
    </div>
  );
}