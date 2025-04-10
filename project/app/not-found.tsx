"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">ページが見つかりません</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Button asChild className="rounded-full">
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}