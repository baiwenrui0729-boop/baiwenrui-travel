import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [active, setActive] = useState(0);
  const posts = [
    {
      title: "京都初遇",
      date: "2024-04-18",
      cover: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      excerpt: "漫步在京都的街头，樱花如雪飘落，空气中带着春天的气息……",
    },
    {
      title: "冰岛的极光之夜",
      date: "2023-12-05",
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      excerpt: "第一次看到极光的那一刻，仿佛整个世界都静止了……",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 text-slate-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Bai Wenrui · Travel Journal</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-slate-600">首页</a>
          <a href="#journal" className="hover:text-slate-600">旅行日志</a>
          <a href="#about" className="hover:text-slate-600">关于我</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold mb-4"
        >
          世界这么大，总要去看看
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          记录我的旅程、故事与感受。每一段风景，都是一次心灵的出走。
        </p>
      </section>

      {/* Journal Section */}
      <section id="journal" className="max-w-5xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">旅行日志</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                className={`overflow-hidden shadow-lg rounded-2xl border-0 cursor-pointer transition-all duration-300 ${
                  active === i ? "ring-2 ring-blue-400" : ""
                }`}
                onClick={() => setActive(i)}
              >
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-64 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">{post.title}</h4>
                  <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                  <p className="text-slate-700">{post.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 mt-12 border-t border-slate-300">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-4">关于我</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            你好，我是白文睿。一个热爱旅行与写作的人。每一次出发，都是为了让生活更有温度。
          </p>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            回到顶部
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500 text-sm">
        © 2025 Bai Wenrui · All rights reserved.
      </footer>
    </div>
  );
}
