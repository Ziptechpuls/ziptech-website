"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Laptop, Smartphone, ArrowDown, CheckCircle2, Sparkles, Target, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "デジタルトランスフォーメーション",
      description: "最新のテクノロジーを活用し、ビジネスプロセスのデジタル化を実現します。"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "ブランディングデザイン",
      description: "企業価値を高める、魅力的なブランドアイデンティティを構築します。"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "クロスプラットフォーム開発",
      description: "あらゆるデバイスで最適な体験を提供するアプリケーションを開発します。"
    }
  ]

  const features = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      text: "革新的な技術スタック"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "セキュリティファースト"
    },
    {
      icon: <Target className="h-5 w-5" />,
      text: "ゴール指向の開発"
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      text: "24時間サポート体制"
    }
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1537420327992-d6e192287183?auto=format&fit=crop&q=80"
            alt="Space background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          {/* Animated stars overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,0)_2px)_repeat] bg-[length:50px_50px] opacity-30 animate-[twinkle_3s_ease-in-out_infinite]" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              デジタルの力で、
              <br className="hidden sm:block" />
              ビジネスの未来を創造する
            </h1>
            <p className="text-base sm:text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              私たちは、最新のテクノロジーと創造的なアイデアで、
              <br className="hidden sm:block" />
              お客様のビジネスに革新的なソリューションを提供します。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  <Link href="/contact" className="relative group">
                    <span className="relative z-10">無料相談はこちら</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full bg-transparent text-white border-white hover:bg-white/10 hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                  variant="outline"
                >
                  <Link href="/works" className="relative group">
                    <span className="relative z-10">実績を見る</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <span className="text-sm font-semibold text-primary">OUR SERVICES</span>
            <h2 className="text-3xl font-bold mt-2">ビジネスを加速する３つの強み</h2>
            <p className="mt-4 text-muted-foreground">
              お客様のニーズに合わせた最適なソリューションをご提案します
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary bg-primary/10 w-fit p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 blur-2xl opacity-50 -z-10" />
              <span className="text-sm font-semibold text-primary">WHY CHOOSE US</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                なぜOki Techが選ばれるのか
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-primary bg-primary/10 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="mt-8 rounded-full">
                <Link href="/about">
                  詳しく見る
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/0 to-primary/20 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
                  alt="Team working"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold opacity-80">START NOW</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              プロジェクトについて相談する
            </h2>
            <p className="mb-8 opacity-90">
              お客様のビジョンを実現するため、まずはお気軽にご相談ください。
              <br className="hidden sm:block" />
              初回相談は無料です。
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto rounded-full"
            >
              <Link href="/contact">
                無料相談を予約する
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}