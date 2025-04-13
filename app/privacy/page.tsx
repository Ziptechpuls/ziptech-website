"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, Clock, Trash2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "1. 個人情報の取り扱いについて",
      content: `当社は、個人情報の保護に関する法律、その他の関係法令を遵守し、お客様の個人情報を適切に取り扱います。
      
収集する個人情報は、お問い合わせやサービス提供に必要な範囲内で、適切に取得いたします。`,
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "2. 個人情報の利用目的",
      content: `お客様からお預かりした個人情報は、以下の目的で利用いたします：

• お問い合わせへの回答
• サービスの提供、契約の履行
• 新サービスや更新情報のご案内
• サービス品質向上のための調査、分析

これらの目的以外で個人情報を利用する場合は、あらかじめお客様の同意を得るものとします。`,
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "3. 個人情報の第三者提供",
      content: `当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：

• お客様の同意がある場合
• 法令に基づく場合
• 人の生命、身体または財産の保護のために必要がある場合
• 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
• 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合`,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "4. 個人情報の管理",
      content: `当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。`,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "5. お問い合わせ窓口",
      content: `個人情報の取り扱いに関するお問い合わせは、下記の窓口までご連絡ください：

メールアドレス：ziptech.plus@gmail.com

お問い合わせの内容により、ご本人様確認をさせていただく場合がございます。`,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "6. 保有個人データの開示等の請求",
      content: `お客様は、当社に対してご自身の保有個人データの開示等（利用目的の通知、開示、内容の訂正・追加・削除、利用の停止または消去、第三者への提供の停止）を請求することができます。

開示等の請求を行う場合は、お問い合わせ窓口までご連絡ください。`,
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "7. プライバシーポリシーの変更",
      content: `当社は、必要に応じて、このプライバシーポリシーの内容を変更することがあります。その場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。`,
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">プライバシーポリシー</h1>
          <p className="text-lg text-muted-foreground">
            お客様の個人情報の取り扱いについて
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <div className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          最終更新日：2024年2月1日
        </motion.div>
      </div>
    </div>
  );
}