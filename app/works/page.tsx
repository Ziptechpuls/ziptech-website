"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  const projects = [
    {
      title: "不動産サンプルサイト",
      description: "Next.jsとTailwind CSSを使用したモダンな不動産ポータルサイト",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      category: "Webサイト制作",
      link: "https://nipo-fudo-design-labo.lovable.app/",
    },
    {
      title: "土木建設会社サイト",
      description: "土木建設会社のコーポレートサイト。シンプルで力強いデザインを採用",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      category: "コーポレートサイト",
      link: "https://green-earthworks-web.lovable.app/",
    },
    {
      title: "焼肉店サイト",
      description: "高級焼肉店のブランドサイト。上質な雰囲気を表現したデザイン",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80",
      category: "飲食店サイト",
      link: "https://inspiring-melba-d78557.netlify.app/",
    },
    {
      title: "教育プラットフォーム",
      description: "学生と教育者のための双方向学習プラットフォーム",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      category: "フルスタック開発",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">制作実績</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            私たちが手がけた成功プロジェクトとデジタルソリューションをご紹介します
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.link ? (
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <ExternalLink className="w-8 h-8" />
                      </Link>
                    ) : (
                      <ExternalLink className="text-white w-8 h-8" />
                    )}
                  </div>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.link ? (
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                          {project.title}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.category}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}