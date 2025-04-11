"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "ベーシック",
      monthlyPrice: "6,000",
      description: "小規模ビジネス向けの基本的なウェブサイト制作プラン",
      features: [
        "3〜4ページの制作",
        "レスポンシブデザイン",
        "お問い合わせフォーム",
        "基本的なSEO対策",
        "月1回までの修正対応",
        "24時間監視・保守",
      ],
      cta: "お問い合わせ",
      popular: false,
    },
    {
      name: "スタンダード",
      monthlyPrice: "9,800",
      description: "成長中の企業向けの高機能なウェブサイト制作プラン",
      features: [
        "5〜7ページの制作",
        "ベーシックプランの全機能",
        "SNSリンク連携",
        "ブログ機能",
        "予約システム",
        "アクセス解析",
        "月3回までの修正対応",
        "SSL証明書",
      ],
      cta: "おすすめプラン",
      popular: true,
    },
    {
      name: "プレミアム",
      monthlyPrice: "16,500",
      description: "大規模ビジネス向けのフルカスタマイズプラン",
      features: [
        "8ページ以上の制作",
        "スタンダードプランの全機能",
        "多言語対応",
        "カスタム管理画面",
        "API連携",
        "修正対応無制限",
        "優先サポート",
      ],
      cta: "お問い合わせ",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">料金プラン</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お客様のニーズに合わせた最適なプランをご用意しています。
            すべてのプランにサポート付きで安心してご利用いただけます。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Sparkles className="h-5 w-5 flex-shrink-0" />
            <p className="font-medium">
              <span className="inline-block">期間限定！</span>
              <span className="inline-block">初期費用0円キャンペーン実施中</span>
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`relative p-8 h-full flex flex-col ${
                plan.popular ? 'border-primary shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      人気プラン
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">¥{plan.monthlyPrice}</span>
                      <span className="ml-2 text-muted-foreground">/月（税込）</span>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full rounded-full ${
                    plan.popular ? 'bg-primary text-primary-foreground' : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            ※ 案件の規模や要件により価格は変動する場合があります。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">
              お問い合わせはこちら
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}