'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Code2, Palette, Rocket } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Webアプリケーション開発",
      description: "最新技術を活用したカスタムWebアプリケーションの開発",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "UI/UXデザイン",
      description: "ユーザーを魅了する美しく直感的なインターフェース設計",
      icon: <Palette className="h-6 w-6 text-primary" />,
    },
    {
      title: "パフォーマンス最適化",
      description: "アプリケーションの速度と効率性を最大限に引き出す",
      icon: <Rocket className="h-6 w-6 text-primary" />,
    },
    {
      title: "品質保証",
      description: "包括的なテストと品質管理による信頼性の確保",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">サービス内容</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          現代のビジネスニーズに応える包括的なデジタルソリューションを提供します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}