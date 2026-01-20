import { Bot, Zap, Shield, BarChart3, Globe, Command, FileJson, Users, Cpu, MessageSquare, Clock, Lock, RefreshCw, Smartphone, Heart, Activity } from 'lucide-react';
import { PricingPlan, Feature, FaqItem, ComparisonRow, Advantage, Testimonial, Statistic } from './types';

export const CONTACT_INFO = {
  ownerPhone: '6288289338073',
  botPhone: '6285123336870',
  groupLink: 'https://chat.whatsapp.com/H19gbX0a8mvAdNcTLiCJ1h',
  channelLink: 'https://whatsapp.com/channel/0029VbCFHn19xVJfEvznNn05',
  youtubeLink: 'https://youtube.com/@kenhinnaste?si=zK4-102GhMwpurhl',
  pakasirUrl: 'https://app.pakasir.com/projects/d3iqz7ziq',
  pakasirSlug: 'kenshin',
  pakasirApiKey: 'McZCzyanCWkZmC969hNQA0u6YtuWLDtz'
};

export const FEATURES: Feature[] = [
  { icon: MessageSquare, title: 'Smart Auto Reply', description: 'Respon otomatis berbasis AI yang natural dan kontekstual.' },
  { icon: Users, title: 'Group Management', description: 'Moderasi otomatis: welcome message, antispam, dan user verification.' },
  { icon: Shield, title: 'Security System', description: 'Proteksi real-time dari link berbahaya (anti-link) dan bot spammer.' },
  { icon: BarChart3, title: 'Live Analytics', description: 'Pantau statistik aktivitas grup dan penggunaan bot secara visual.' },
  { icon: Zap, title: 'Ultra Fast Response', description: 'Infrastruktur server cloud dengan latensi di bawah 100ms.' },
  { icon: Command, title: 'Custom Commands', description: 'Buat trigger dan respon kustom tanpa coding.' },
  { icon: FileJson, title: 'Media Tools', description: 'Download story, konversi stiker, dan manipulasi gambar instan.' },
  { icon: Globe, title: 'Cross Platform', description: 'Sinkronisasi penuh di Web, Android, dan iOS.' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'weekly-std',
    name: 'Weekly Plan',
    price: 'Rp 10.000',
    duration: '7 Days',
    features: ['Group Bot Access', 'Basic Anti-Link', 'Standard Settings'],
    type: 'standard',
    priceValue: 10000
  },
  {
    id: 'monthly-std',
    name: 'Monthly Plan',
    price: 'Rp 30.000',
    duration: '30 Days',
    features: ['All Weekly Features', 'Priority Support', 'Custom Welcome'],
    type: 'standard',
    priceValue: 30000
  },
  {
    id: 'yearly-std',
    name: 'Yearly Plan',
    price: 'Rp 80.000',
    duration: '365 Days',
    features: ['Save 73%', 'Free Updates', 'Dedicated Support', 'Bonus Features'],
    type: 'standard',
    priceValue: 80000
  },
];

export const PREMIUM_PLANS: PricingPlan[] = [
  {
    id: 'weekly-prem',
    name: 'Premium Weekly',
    price: 'Rp 20.000',
    duration: '7 Days',
    features: ['Unlimited Requests', 'AI Advanced Access', 'Hard Anti-Spam', 'Custom Prefix'],
    type: 'premium',
    priceValue: 20000
  },
  {
    id: 'monthly-prem',
    name: 'Premium Monthly',
    price: 'Rp 40.000',
    duration: '30 Days',
    features: ['All Premium Features', 'No Cooldown', 'Premium Commands', 'Custom Bot Name'],
    isPopular: true,
    type: 'premium',
    priceValue: 40000
  },
  {
    id: 'yearly-prem',
    name: 'Premium Yearly',
    price: 'Rp 90.000',
    duration: '365 Days',
    features: ['Lifetime Updates', 'VIP Support 24/7', 'Custom Development', 'Prioritized Server'],
    type: 'premium',
    priceValue: 90000
  },
];

export const SCRIPT_PLAN: PricingPlan = {
  id: 'script',
  name: 'Source Code',
  price: 'Rp 80.000',
  duration: 'Lifetime',
  features: ['Full Source Code', 'Documentation', 'Setup Tutorial', 'Free Updates (3 Months)', 'Installation Support'],
  type: 'script',
  priceValue: 80000
};

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Group Management', sewa: true, premium: true },
  { feature: 'Anti-Link System', sewa: 'Standard', premium: 'Advanced AI' },
  { feature: 'Daily Request Limit', sewa: '100 Requests', premium: 'Unlimited' },
  { feature: 'Premium Commands', sewa: false, premium: 'Full Access' },
  { feature: 'AI Chat Capabilities', sewa: 'Basic', premium: 'GPT-4 Integration' },
  { feature: 'Custom Commands', sewa: 'Limited', premium: 'Unlimited' },
  { feature: 'Tech Support', sewa: 'Standard', premium: 'Priority 24/7' },
  { feature: 'Cooldown Timer', sewa: '5 Seconds', premium: 'No Cooldown' },
];

export const ADVANTAGES_DATA: Advantage[] = [
  { icon: Zap, title: 'Low Latency', description: 'Respon instan <1 detik dengan arsitektur server terdistribusi.' },
  { icon: Lock, title: 'E2E Encryption', description: 'Keamanan data prioritas utama dengan standar enkripsi industri.' },
  { icon: RefreshCw, title: 'Auto Updates', description: 'Sistem selalu diperbarui secara otomatis tanpa downtime.' },
  { icon: Shield, title: 'Anti-Ban Tech', description: 'Algoritma cerdas untuk meminimalisir risiko blokir WhatsApp.' },
  { icon: Smartphone, title: 'Multi-Device', description: 'Akses kontrol penuh dari Smartphone, Tablet, dan Desktop.' },
  { icon: Command, title: 'Fully Customizable', description: 'Atur nama, foto profil, dan personality bot sesuai brand.' },
  { icon: Activity, title: 'Deep Analytics', description: 'Insight mendalam tentang performa grup dan interaksi member.' },
  { icon: Heart, title: 'Dedicated Support', description: 'Tim teknis profesional siap membantu kendala integrasi.' },
];

export const FAQ_DATA: FaqItem[] = [
  { question: 'Apa itu Bot WhatsApp Kenshin?', answer: 'Kenshin adalah asisten virtual WhatsApp berbasis AI yang membantu mengelola grup, menjawab pesan otomatis, dan menyediakan fitur hiburan serta utilitas canggih.' },
  { question: 'Bagaimana cara kerja bot?', answer: 'Bot bekerja di cloud server 24/7. Setelah diundang ke grup dan dijadikan admin, bot akan otomatis memantau dan merespon sesuai perintah (command) atau trigger yang disetting.' },
  { question: 'Apakah aman digunakan?', answer: 'Sangat aman. Bot hanya memproses pesan yang diperlukan dan tidak menyimpan data percakapan pribadi. Kami menggunakan protokol keamanan standar WhatsApp.' },
  { question: 'Berapa lama proses aktivasi?', answer: 'Proses aktivasi instan (kurang dari 5 menit) setelah pembayaran terkonfirmasi via WhatsApp.' },
  { question: 'Apakah bisa refund?', answer: 'Kami memberikan garansi uang kembali jika bot tidak dapat berfungsi sama sekali pada perangkat Anda dalam waktu 1x24 jam.' },
  { question: 'Bagaimana cara perpanjang sewa?', answer: 'Anda akan mendapat notifikasi H-3 sebelum masa aktif habis. Cukup lakukan pembayaran ulang untuk paket yang diinginkan.' },
  { question: 'Apakah script bot dijual?', answer: 'Ya, kami menjual source code full version bagi Anda yang ingin host sendiri atau belajar pengembangannya.' },
  { question: 'Apakah ada limitasi untuk paket biasa?', answer: 'Ya, paket biasa memiliki limit request harian dan cooldown command untuk menjaga performa server tetap stabil.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Aditya Pratama', role: 'Community Manager', comment: 'Bot ini sangat membantu moderasi grup komunitas game saya. Fitur anti-link nya sangat efektif.', avatar: 'AP' },
  { name: 'Sarah Wijaya', role: 'Online Shop Owner', comment: 'Auto reply-nya bikin customer service jadi lebih efisien. Sangat recommended untuk automasi bisnis.', avatar: 'SW' },
  { name: 'Budi Santoso', role: 'Edu Group Admin', comment: 'Fitur welcome message dan rules otomatis membuat grup belajar kami jadi lebih tertib dan profesional.', avatar: 'BS' },
];

export const STATISTICS: Statistic[] = [
  { label: 'Total Users', value: '1,500+', icon: Users },
  { label: 'Active Groups', value: '300+', icon: Globe },
  { label: 'Uptime', value: '99.9%', icon: Activity },
  { label: 'Latency', value: '0.4s', icon: Zap },
];
