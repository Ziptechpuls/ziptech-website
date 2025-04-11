"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
            alt="Space Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          {/* Animated stars overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,0)_2px)_repeat] bg-[length:50px_50px] opacity-30 animate-[twinkle_3s_ease-in-out_infinite]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            会社概要
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            テクノロジーと創造性の融合を目指して
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <ArrowDownCircle className="w-10 h-10 animate-bounce" />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                私たちのビジョン
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                私たちは、革新的なデジタル体験を創造し、ビジネスの変革を支援することを目指しています。
                最先端のテクノロジーとクリエイティブなデザインを組み合わせ、
                お客様のビジネスに真の価値をもたらすソリューションを提供します。
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mt-20"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Innovation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                私たちのアプローチ
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                イノベーションは私たちの活動の中心です。お客様のニーズを深く理解し、
                緊密な協力関係を築きながら、卓越した結果を実現するために、
                協調的なアプローチで問題解決に取り組んでいます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}