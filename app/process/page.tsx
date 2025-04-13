"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, FileText, HeartHandshake, Palette, Package, Wrench } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "お問い合わせ（無料相談）",
      description: "まずはお気軽にお問い合わせください。「こんなサイトを作りたい」「今のサイトを改善したい」など、ざっくりしたご相談でもOKです。",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "ヒアリング・お打ち合わせ",
      description: "Zoomや対面にて、目的やご希望のデザイン、機能などを丁寧にお伺いします。",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "プランのご提案・お見積り",
      description: "ご要望を元に、最適なプランとお見積りをご提案いたします。",
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "ご契約・制作スタート",
      description: "内容にご納得いただけましたら、契約書を取り交わし、制作を開始します。",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "デザイン・構築",
      description: "トップページのデザイン案をご確認いただきながら、順次ページを制作していきます。ご要望に応じて、写真・文章のご提案も可能です。",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "最終確認・納品",
      description: "完成後、最終チェックを行い、問題なければ本番公開（納品）となります。納品後も、月額プランにて運用・保守をしっかりサポートします。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">制作の流れ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お問い合わせから納品まで、一貫したサポート体制でお客様のプロジェクトを進めていきます。
          </p>
        </motion.div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="grid gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                    <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                      <motion.h3 
                        className="text-xl font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>

                    <div className="flex justify-center my-6 md:my-0 md:order-2">
                      <div className="relative">
                        <motion.div 
                          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary shadow-xl shadow-primary/5 transition-transform group-hover:scale-110"
                          initial={{ rotate: -10, scale: 0.9 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {step.icon}
                        </motion.div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-primary/20 to-transparent hidden md:block" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-full w-12 h-0.5 bg-gradient-to-l from-primary/20 to-transparent hidden md:block" />
                      </div>
                    </div>

                    <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                      <motion.span 
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent text-primary font-bold text-2xl rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {index + 1}
                      </motion.span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 text-primary px-6 py-3 rounded-full shadow-lg shadow-primary/5">
            <Wrench className="h-6 w-6" />
            <span className="text-lg font-semibold">サポート体制も安心！</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            納品後も「修正対応」や「集客相談」など、安心して運用いただけるようにサポートいたします。
            <br />
            <span className="text-primary font-medium">お客様のビジネスの成長をともに目指します。</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}