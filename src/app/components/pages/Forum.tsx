import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Post {
  id: number;
  title: string;
  preview: string;
  author: string;
  comments: number;
  date: Date;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "Dealing with burnout as a senior developer",
    preview:
      "I've been in the industry for 10 years and recently feeling completely drained. Anyone else experience this?",
    author: "Alex M.",
    comments: 23,
    date: new Date(2026, 3, 13),
  },
  {
    id: 2,
    title: "Imposter syndrome after promotion",
    preview:
      "Just got promoted to tech lead but I feel like I don't deserve it. How do you cope?",
    author: "Sarah K.",
    comments: 17,
    date: new Date(2026, 3, 12),
  },
  {
    id: 3,
    title: "Work-life balance tips",
    preview:
      "What are your strategies for maintaining boundaries between work and personal life?",
    author: "Jordan P.",
    comments: 31,
    date: new Date(2026, 3, 11),
  },
  {
    id: 4,
    title: "Managing anxiety during deployment",
    preview:
      "Does anyone else get really anxious when pushing major changes to production?",
    author: "Mike T.",
    comments: 12,
    date: new Date(2026, 3, 10),
  },
];

export function Forum() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: posts.length + 1,
      title: newTitle,
      preview: newContent,
      author: "You",
      comments: 0,
      date: new Date(),
    };
    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewContent("");
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-4xl mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Community Forum
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with fellow developers
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--devbuddy-blue)] to-[var(--devbuddy-purple)] text-white shadow-lg hover:shadow-xl transition-all"
          >
            Create Post
          </motion.button>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4, scale: 1.01 }}
              onClick={() => setSelectedPost(post)}
              className="bg-card rounded-2xl p-6 shadow-lg shadow-black/5 border border-border hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.preview}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.comments} comments</span>
                    <span>•</span>
                    <span>{post.date.toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-card rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-border">
                <h2
                  className="text-3xl mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Create New Post
                </h2>
                <form onSubmit={handleCreatePost} className="space-y-5">
                  <div>
                    <label className="block mb-2 text-sm opacity-70">Title</label>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm opacity-70">Content</label>
                    <textarea
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[var(--devbuddy-blue)] to-[var(--devbuddy-purple)] text-white shadow-lg hover:shadow-xl transition-all"
                    >
                      Post
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="px-8 py-3 rounded-xl border border-border hover:bg-muted/50 transition-all"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-card rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-border">
                <h2
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>By {selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.date.toLocaleDateString()}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedPost.preview}
                </p>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg mb-4">Comments ({selectedPost.comments})</h3>
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Comment functionality coming soon...
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPost(null)}
                  className="w-full py-3 rounded-xl border border-border hover:bg-muted/50 transition-all mt-4"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
