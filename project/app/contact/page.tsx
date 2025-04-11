"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import 'leaflet/dist/leaflet.css';

// Dynamically import the map components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "メールアドレス",
      details: "ziptech.plus@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "所在地",
      details: "〒902-0077 沖縄県那覇市長田2丁目34-6",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `お問い合わせ: ${formData.name}様より`;
    const body = `
名前: ${formData.name}
メールアドレス: ${formData.email}
会社名: ${formData.company}

お問い合わせ内容:
${formData.message}
    `;

    const mailtoLink = `mailto:ziptech.plus@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "メール作成画面を開きました",
      description: "お使いのメールクライアントでメールを送信してください。",
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Map component that will only be rendered on the client side
  const MapComponent = () => {
    useEffect(() => {
      // This will only run on the client side
      const L = require('leaflet');
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }, []);

    return (
      <div className="w-full h-[300px] md:h-[400px] relative">
        <MapContainer
          center={[26.2124, 127.6809]}
          zoom={16}
          scrollWheelZoom={false}
          className="rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[26.2124, 127.6809]}>
            <Popup>
              <div className="p-1">
                <p className="font-semibold">Ziptech⁺</p>
                <p className="text-sm text-muted-foreground">〒902-0077 沖縄県那覇市長田2丁目34-6</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            プロジェクトについてのご相談やお見積りのご依頼など、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">会社名</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="株式会社〇〇"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ご相談内容をご記入ください"
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                >
                  メールを作成する
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="text-muted-foreground">{info.details}</p>
                </div>
              </motion.div>
            ))}

            <Card className="p-6 mt-8">
              <MapComponent />
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}