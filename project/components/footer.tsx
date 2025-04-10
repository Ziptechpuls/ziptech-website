"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Boxes, Github, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const footerLinks = [
    {
      title: "サービス",
      links: [
        { name: "Webアプリケーション開発", href: "/services" },
        { name: "UI/UXデザイン", href: "/services" },
        { name: "パフォーマンス最適化", href: "/services" },
        { name: "品質保証", href: "/services" },
      ],
    },
    {
      title: "会社情報",
      links: [
        { name: "制作実績", href: "/works" },
        { name: "会社概要", href: "/about" },
        { name: "お問い合わせ", href: "/contact" },
        { name: "プライバシーポリシー", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "X (Twitter)" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 w-fit">
              <Boxes className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="company-logo text-xl">Ziptech⁺</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              最新のテクノロジーと創造的なアイデアで、
              お客様のビジネスに革新的なソリューションを提供します。
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((group, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-sm">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ziptech⁺. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}