export const ADMIN_CONFIG = {
  whatsapp: "6282320114535",
  brand: "EverLetter",
  tagline: "Turn Feelings Into Memories",
  website: "deareverletter.vercel.app",
  products: [
    { id: "bloom", name: "Bloom", tier: "Premium", price: "65K", emoji: "🌸", color: "from-pink-400 to-rose-500" },
    { id: "nocturne", name: "Nocturne", tier: "Premium", price: "70K", emoji: "🌙", color: "from-indigo-400 to-purple-500" },
    { id: "eterna", name: "Eterna", tier: "Premium", price: "75K", emoji: "💌", color: "from-rose-400 to-pink-500" },
    { id: "heartverse", name: "HeartVerse", tier: "Premium", price: "80K", emoji: "💝", color: "from-red-400 to-rose-500" },
    { id: "cinematic", name: "Cinematic Letter", tier: "Ultra Premium", price: "95K", emoji: "🎬", color: "from-amber-400 to-orange-500" },
    { id: "signature", name: "Signature Memory", tier: "Ultra Premium", price: "110K", emoji: "✨", color: "from-yellow-400 to-amber-500" },
  ],
  music: {
    romantic: "/music/romantic-piano.mp3",
    cinematic: "/music/cinematic-strings.mp3",
    elegant: "/music/elegant-piano.mp3",
  },
  social: {
    tiktok: "",
    instagram: "",
  },
  copywriting: {
    heroTitle: "Ungkapkan Perasaanmu dengan Indah",
    heroSubtitle: "Buat surat digital personal yang tak terlupakan untuk orang tersayang",
    cta: "Pesan via WhatsApp",
    ctaMessage: "Halo EverLetter, saya ingin memesan {product} untuk orang tersayang saya.",
  },
};

export type AdminConfig = typeof ADMIN_CONFIG;
export default ADMIN_CONFIG;
