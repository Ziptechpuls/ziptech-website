"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Boxes, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary relative group"
      onClick={() => setIsOpen(false)}
    >
      {children}
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
    </Link>
  );

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Boxes className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="company-logo text-xl">Ziptech⁺</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="/services">サービス</NavLink>
              <NavLink href="/works">制作実績</NavLink>
              <NavLink href="/about">会社概要</NavLink>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:block">
              <Button className="rounded-full">
                お問い合わせ
              </Button>
            </Link>
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>メニュー</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLink href="/services">サービス</NavLink>
                  <NavLink href="/works">制作実績</NavLink>
                  <NavLink href="/about">会社概要</NavLink>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="rounded-full w-full">
                      お問い合わせ
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}