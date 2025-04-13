'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Rocket, BadgeCheck, Globe, LayoutTemplate, Search, Smartphone, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Webサイト制作",
      description: "企業サイトやブランドサイトなど、目的に応じた最適なWebサイトを制作",
      icon: <Globe className="h-6 w-6 text-primary" />,
      features: [
        "レスポンシブデザイン",
        "SEO対策",
        "スピーディーな納品",
        "安心のサポート体制"
      ]
    },
    {
      title: "ランディングページ制作",
      description: "商品・サービスの魅力を最大限に引き出すLP制作",
      icon: <LayoutTemplate className="h-6 w-6 text-primary" />,
      features: [
        "高いコンバージョン率",
        "A/Bテスト対応",
        "スマートフォン最適化",
        "アクセス解析"
      ]
    },
    {
      title: "サイトリニューアル",
      description: "既存サイトの改善・リニューアルで、より効果的なWebサイトへ",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      features: [
        "現状分析",
        "改善提案",
        "デザイン刷新",
        "コンテンツ最適化"
      ]
    }
  ];

  const features = [
    {
      title: "スマートフォン対応",
      description: "すべてのデバイスで最適な表示を実現するレスポンシブデザイン",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
    {
      title: "SEO対策",
      description: "検索エンジンで上位表示を目指す、効果的なSEO対策",
      icon: <Search className="h-6 w-6 text-primary" />,
    },
    {
      title: "デザイン性",
      description: "ブランドの魅力を引き出す、美しく洗練されたデザイン",
      icon: <Palette className="h-6 w-6 text-primary" />,
    },
    {
      title: "高パフォーマンス",
      description: "快適な閲覧体験を実現する、高速で安定したサイト構築",
      icon: <Rocket className="h-6 w-6 text-primary" />,
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">事業内容</h1>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">特徴</h2>
          <p className="text-muted-foreground">
            お客様のビジネスの成長を支える4つの特徴
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}