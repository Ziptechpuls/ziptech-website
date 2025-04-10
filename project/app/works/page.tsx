"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function WorksPage() {
  const projects = [
    {
      title: "ECプラットフォーム",
      description: "Next.jsとTailwind CSSを使用した最新のECプラットフォーム",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
      category: "Webアプリケーション開発",
    },
    {
      title: "医療ダッシュボード",
      description: "医療専門家向けの直感的なダッシュボード",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
      category: "UI/UXデザイン",
    },
    {
      title: "金融分析アプリ",
      description: "リアルタイムの金融データ可視化プラットフォーム",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "Webアプリケーション",
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
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
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