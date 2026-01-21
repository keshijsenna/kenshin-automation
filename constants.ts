import { Zap, Shield, RefreshCw, Heart, Users, Command, MessageSquare, Activity, Globe, Cpu } from 'lucide-react';
import { PricingPlan, ComparisonRow, Advantage, Testimonial, Statistic, FaqItem } from './types';

export const CONTACT_INFO = {
  ownerPhone: '6288289338073',
  botPhone: '6285123336870',
  groupLink: 'https://chat.whatsapp.com/H19gbX0a8mvAdNcTLiCJ1h',
  channelLink: 'https://whatsapp.com/channel/0029VbCFHn19xVJfEvznNn05',
  youtubeLink: 'https://youtube.com/@kenhinnaste?si=zK4-102GhMwpurhl',
};

export const STANDARD_PLANS: PricingPlan[] = [
  { id: 'std-w', name: 'Standard Weekly', price: 'Rp 10.000', duration: '7 Days', features: ['Group Access', 'Anti-Link Basic', '99.5% Uptime'], type: 'standard', priceValue: 10000 },
  { id: 'std-m', name: 'Standard Monthly', price: 'Rp 30.000', duration: '30 Days', features: ['Custom Welcome', 'Standard Speed', 'Regular Support'], type: 'standard', priceValue: 30000 },
  { id: 'std-y', name: 'Standard Yearly', price: 'Rp 80.000', duration: '1 Year', features: ['Full Config', 'Priority Node', 'Best Value'], type: 'standard', priceValue: 80000 },
];

export const ADVANCED_PLANS: PricingPlan[] = [
  { id: 'adv-w', name: 'Premium Weekly', price: 'Rp 20.000', duration: '7 Days', features: ['Advanced AI Core', 'No Command Cooldown', 'Media Downloader Pro'], type: 'premium', priceValue: 20000 },
  { id: 'adv-m', name: 'Premium Monthly', price: 'Rp 40.000', duration: '30 Days', features: ['Neural Chat GPT-4', 'Custom Bot Profile', 'Audio Transcription'], isPopular: true, type: 'premium', priceValue: 40000 },
  { id: 'adv-y', name: 'Premium Yearly', price: 'Rp 90.000', duration: '1 Year', features: ['Unlimited Requests', 'Beta Module Access', 'Private Node 01'], type: 'premium', priceValue: 90000 },
];

export const VIP_PLANS: PricingPlan[] = [
  { id: 'vip-w', name: 'VIP Weekly', price: 'Rp 40.000', duration: '7 Days', features: ['Group-Wide Premium Access', 'All Members Auto-Premium', 'VIP Dedicated Node'], type: 'premium', priceValue: 40000 },
  { id: 'vip-m', name: 'VIP Monthly', price: 'Rp 60.000', duration: '30 Days', features: ['Total Group Automation', 'No Buy 1/1 Needed', 'Direct Owner Line'], isPopular: true, type: 'premium', priceValue: 60000 },
  { id: 'vip-y', name: 'VIP Yearly', price: 'Rp 110.000', duration: '1 Year', features: ['Ultimate Cluster Access', 'Bespoke Dev Modules', 'Elite Support'], type: 'premium', priceValue: 110000 },
];

export const SCRIPT_PLAN: PricingPlan = {
  id: 'script-core',
  name: 'Marceline Script Core',
  price: 'Rp 80.000',
  duration: 'Lifetime',
  features: [
    'Full Source Code (Unencrypted)',
    'Node.js ESM Architecture',
    'Private API Integration',
    'Self-Hosting Handbook',
    'Developer Priority Support'
  ],
  type: 'script',
  priceValue: 80000
};

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Response Latency', sewa: '0.8s', premium: '0.12s' },
  { feature: 'Encryption Layer', sewa: 'AES-128', premium: 'AES-256-GCM' },
  { feature: 'Neural AI Core', sewa: false, premium: true },
  { feature: 'Group-Wide Auth', sewa: false, premium: 'VIP Tier Only' },
  { feature: 'Dedicated Node', sewa: false, premium: true },
  { feature: 'Priority Support', sewa: 'Standard', premium: 'Elite' },
  { feature: 'No Cooldown', sewa: false, premium: true },
  { feature: 'Custom Bot Name', sewa: false, premium: true },
];

export const STATISTICS: Statistic[] = [
  { label: 'Live Clusters', value: '14', icon: Command },
  { label: 'Latency', value: '0.12s', icon: Activity },
  { label: 'Sync Rate', value: '100%', icon: RefreshCw },
  { label: 'Total Nodes', value: '512', icon: Users }
];

export const ADVANTAGES_DATA: Advantage[] = [
  { icon: Zap, title: "Neural Marceline", description: "Engine tercepat untuk respon tanpa hambatan (<0.2s)." },
  { icon: Shield, title: "Guardian Core", description: "Keamanan data tingkat militer dengan Anti-Ban v5." },
  { icon: RefreshCw, title: "Pulse Update", description: "Pembaruan otomatis modul tanpa downtime server." },
  { icon: Heart, title: "Human Context", description: "AI yang memahami emosi dan konteks obrolan Anda." }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Kenshin', role: 'System Architect', comment: 'Marceline bukan sekadar bot, ini adalah puncak automasi WhatsApp.', avatar: 'K' },
  { name: 'Rizky VIP', role: 'Community Lead', comment: 'Fitur VIP sangat membantu manajemen grup skala besar. Sangat efisien!', avatar: 'RV' }
];

export const FAQ_DATA: FaqItem[] = [
  { question: 'Apa bedanya Premium dan VIP?', answer: 'Premium berlaku untuk 1 user, sementara VIP mengaktifkan fitur premium untuk SELURUH member di grup tersebut secara otomatis (Group-Wide Auth).' },
  { question: 'Berapa harga Script Marceline?', answer: 'Script Core Marceline dihargai Rp 80.000 untuk lisensi seumur hidup dengan akses penuh kode sumber.' }
];

export const TECHNICAL_SPECS = [
  "Marceline Engine v4.5", "Node.js 21.x LTS", "ESM Module Architecture", "AES-256-GCM Encryption", 
  "PM2 Cluster Scaling", "WSS Encrypted Tunnel", "Redis 7.2 Cache", "NoSQL Database",
  "Anti-Call Guardian", "Neural Interface v3", "Zero-Latency Buffer", "Load Balancer L7",
  "Ghost Mode Stealth", "Custom AI Modules", "Auto-Restart Protocol", "Media Processor FFmpeg",
  "Contextual Memory v4", "Private IP Rotation", "Cloud Backup Sync", "Rate Limiter Pro",
  "Socket.io Integration", "Express.js API Gateway", "JWT Authentication", "Webhooks Enabled",
  "Horizontal Scaling", "Memory Leak Guard", "Payload Optimizer", "Deep-Link OAuth",
  "Secure Shell Isolation", "Event-Driven System", "Microservices Ready", "Heartbeat Monitor",
  "Bespoke Scraper Core", "Anti-Spam Adaptive", "Broadcast Scalability", "Packet Filter v5",
  "Dynamic DNS Support", "WAF Protection", "Intrusion Detection", "Log Aggregation",
  "Atomic File Writes", "Stream Buffer Mgmt", "High-Avail Cluster", "Auto-Handshake v2",
  "Module Hot Reload", "Dev Container Ready", "CI/CD Deployment", "Git-Hook Integration",
  "Neural Token Optimizer", "Encrypted Key Storage", "Bespoke Middleware", "Elite Support API"
];
