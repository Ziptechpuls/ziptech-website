"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileQuestion, Wrench, Users, Clock, CreditCard, Smartphone, Search, Code2, Mail, Shield, MessageSquare, Pencil, Eye } from "lucide-react";

export default function FAQPage() {
  const faqSections = [
    {
      title: "準備・費用について",
      icon: <FileQuestion className="h-6 w-6" />,
      items: [
        {
          question: "どんな準備が必要ですか？",
          answer: "基本的には「ロゴ・掲載したい写真・文章（紹介文やサービス内容など）」をご用意いただきますが、こちらで写真素材のご提案や文章作成のサポートも可能です。「まだ何も決まってない」という方でも大丈夫。ヒアリングを通じて一緒に作り上げていきます！",
          icon: <Wrench className="h-5 w-5" />,
        },
        {
          question: "どのくらいの期間でできますか？",
          answer: "通常、ヒアリングから納品まで 7営業日 が目安です（内容や修正回数により前後します）。最速で即日対応可能です。お急ぎ対応もご相談可能です。",
          icon: <Clock className="h-5 w-5" />,
        },
        {
          question: "費用はどのくらいかかりますか？",
          answer: "初期費用0円、月額6,000円からのプランをご用意しています。デザインや機能に応じて最適なお見積りを事前にご提示しますので、追加費用が発生する場合も事前にご相談いたします。",
          icon: <CreditCard className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "技術・仕様について",
      icon: <Code2 className="h-6 w-6" />,
      items: [
        {
          question: "スマホ対応（レスポンシブ）は含まれますか？",
          answer: "はい、スマートフォン・タブレットにも対応したデザインで制作いたします。今やモバイル対応は必須ですので、標準で対応しております。",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          question: "SEO対策はしてもらえますか？",
          answer: "基本的なSEO対策（検索に強くなる設定）は標準で対応しています。検索にヒットしやすいタイトル設定や構造化など、初期段階から意識して制作します。",
          icon: <Search className="h-5 w-5" />,
        },
        {
          question: "更新は自分でできますか？",
          answer: "基本的にテキストや画像はこちらで修正いたします。ブログ機能はスタンダードプランからご利用頂けます。",
          icon: <Pencil className="h-5 w-5" />,
        },
        {
          question: "問い合わせフォームはつけられますか？",
          answer: "はい、お名前・メールアドレス・ご用件など、必要に応じた問い合わせフォームの設置が可能です。",
          icon: <Mail className="h-5 w-5" />,
        },
        {
          question: "SSL対応（https）はされますか？",
          answer: "はい、すべてのサイトでSSL（https化）を標準対応しています。セキュリティの高いサイトを構築し、お客様や訪問者の安心を守ります。",
          icon: <Shield className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "コミュニケーション・進め方",
      icon: <MessageSquare className="h-6 w-6" />,
      items: [
        {
          question: "打ち合わせはどのように進めますか？",
          answer: "基本は電話やGoogle Meet、対面でも対応しています。ご希望により、メールやチャットツール（LINEなど）でのやり取りも可能です。",
          icon: <Users className="h-5 w-5" />,
        },
        {
          question: "修正は何回までできますか？",
          answer: "修正はプランによって変わりますが2回〜無料で対応いたします。それ以上の修正が必要な場合は、内容に応じて追加費用がかかる場合もありますが、事前にご相談いたします。",
          icon: <Pencil className="h-5 w-5" />,
        },
        {
          question: "こちらの希望はどこまで聞いてもらえますか？",
          answer: "ヒアリング段階でご希望をしっかり伺い、デザイン・構成ともに柔軟に対応いたします。「こうしたい」というご意見はどんどんお聞かせください。",
          icon: <MessageSquare className="h-5 w-5" />,
        },
        {
          question: "過去の制作実績を見せてもらえますか？",
          answer: "ポートフォリオをご用意しております。実際に制作実績ページをご覧いただき、ご納得のうえでご依頼いただけます。",
          icon: <Eye className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">よくある質問</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ホームページ制作に関するよくあるご質問をまとめました。
            <br />
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="grid gap-12">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${sectionIndex}-${itemIndex}`}
                    className="border border-primary/10 rounded-lg mb-4 overflow-hidden data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 px-6 group">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {item.icon}
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-[52px] text-muted-foreground">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground">
            その他のご質問やご不明な点がございましたら、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
        </motion.div>
      </div>
    </div>
  );
}