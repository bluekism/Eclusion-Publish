import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Heart, 
  ArrowLeft, 
  Compass, 
  Info, 
  Mail, 
  Sparkles, 
  Instagram, 
  Globe, 
  MessageSquare, 
  ChevronRight, 
  Sun, 
  Cloud,
  Send,
  Check
} from 'lucide-react';
import { PRODUCTS, FOUNDERS, COLLABORATORS, CONTACTS } from './data';
import { Product } from './types';
import { ProductIllustration } from './components/ProductIllustration';
import { ChildAvatar } from './components/ChildAvatar';

// Peeking Tropical Leaf component inspired by Perrier screenshot side decorations
const PeekingLeaf: React.FC<{ className?: string; color?: string; style?: React.CSSProperties }> = ({ 
  className = "", 
  color = "#84eba7", 
  style 
}) => {
  return (
    <div className={`absolute pointer-events-none z-0 select-none ${className}`} style={style}>
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full opacity-85 drop-shadow-[4px_8px_12px_rgba(0,0,0,0.18)]" style={{ color }}>
        <path d="M 50,10 C 20,30 10,60 50,95 C 90,60 80,30 50,10" stroke="#104427" strokeWidth="2.5" />
        <path d="M 50,10 L 50,95" stroke="#104427" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 50,30 C 40,35 30,45 30,45" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
        <path d="M 50,45 C 40,50 35,62 35,62" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
        <path d="M 50,60 C 42,65 38,78 38,78" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
        <path d="M 50,30 C 60,35 70,45 70,45" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
        <path d="M 50,45 C 60,50 65,62 65,62" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
        <path d="M 50,60 C 58,65 62,78 62,78" stroke="#104427" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Comic-style Starburst/Explosion background for product highlights
const ComicStarburst: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-white/25 scale-110" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 50)">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle1 = (i * 360) / 16;
            const angle2 = ((i + 0.4) * 360) / 16;
            const rad1 = (angle1 * Math.PI) / 180;
            const rad2 = (angle2 * Math.PI) / 180;
            const r = 80;
            const x1 = Math.cos(rad1) * r;
            const y1 = Math.sin(rad1) * r;
            const x2 = Math.cos(rad2) * r;
            const y2 = Math.sin(rad2) * r;
            return (
              <polygon key={i} points={`0,0 ${x1},${y1} ${x2},${y2}`} />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default function App() {
  // Navigation State
  // 'landing' | 'shop' | 'about' | 'contact'
  const [activePage, setActivePage] = useState<'landing' | 'shop' | 'about' | 'contact'>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string>('Home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Encouragement Board State (Local Persistence)
  const [messages, setMessages] = useState<{ id: string; name: string; target: string; text: string; date: string; color: string }[]>([]);
  const [newMsgName, setNewMsgName] = useState('');
  const [newMsgTarget, setNewMsgTarget] = useState('Semua Anak');
  const [newMsgText, setNewMsgText] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('eclusion_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local storage messages", e);
      }
    } else {
      // Seed some lovely messages for the children
      const initialMsgs = [
        {
          id: 'msg-1',
          name: 'Kak Melati',
          target: 'Ayu',
          text: 'Topi kuning buatan Ayu lucu sekali! Warnanya cerah membuatku selalu bersemangat setiap memakainya. Teruslah berkarya ya, Ayu! ❤️',
          date: '15 Juli 2026',
          color: 'bg-amber-100 border-amber-300'
        },
        {
          id: 'msg-2',
          name: 'Budi Hartono',
          target: 'Banyu',
          text: 'Desain ombak biru di tas jinjing Eclusion rapi banget. Banyu hebat! Aku sangat mengagumi ketelitianmu.',
          date: '14 Juli 2026',
          color: 'bg-sky-100 border-sky-300'
        },
        {
          id: 'msg-3',
          name: 'Ibu Pertiwi',
          target: 'Semua Anak',
          text: 'Karya anak-anak Eclusion luar biasa indah! Kalian membuktikan bahwa keterbatasan bukan penghalang untuk bersinar. Bangga sekali!',
          date: '12 Juli 2026',
          color: 'bg-emerald-100 border-emerald-300'
        }
      ];
      setMessages(initialMsgs);
      localStorage.setItem('eclusion_messages', JSON.stringify(initialMsgs));
    }
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsgName.trim() || !newMsgText.trim()) return;

    const stickyColors = [
      'bg-amber-100 border-amber-300',
      'bg-sky-100 border-sky-300',
      'bg-pink-100 border-pink-300',
      'bg-emerald-100 border-emerald-300',
      'bg-purple-100 border-purple-300'
    ];
    const randomColor = stickyColors[Math.floor(Math.random() * stickyColors.length)];

    const newMessage = {
      id: `msg-${Date.now()}`,
      name: newMsgName,
      target: newMsgTarget,
      text: newMsgText,
      date: 'Hari ini',
      color: randomColor
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('eclusion_messages', JSON.stringify(updated));

    setNewMsgName('');
    setNewMsgText('');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  // Filter products based on selected category
  const filteredProducts = PRODUCTS.filter(prod => {
    if (selectedCategory === 'Home') return true;
    return prod.category === selectedCategory;
  });

  // Instagram redirection target as strictly requested
  const buyNowUrl = "https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA==";

  const navigateToShop = (category: string = 'Home') => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setActivePage('shop');
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#9fe1f5] font-sans text-slate-800 selection:bg-yellow-summer selection:text-slate-900 overflow-x-hidden relative py-6 sm:py-12 px-2 sm:px-6 flex flex-col justify-center">
      
      {/* Scenic Tropical Leaves peeking out behind the poster container, inspired by the Perrier brand showcase */}
      <PeekingLeaf className="w-28 h-28 sm:w-44 sm:h-44 -left-6 sm:-left-10 top-12 -rotate-[35deg]" color="#5ce1a6" />
      <PeekingLeaf className="w-24 h-24 sm:w-36 sm:h-36 -right-6 sm:-right-8 top-1/4 rotate-[45deg]" color="#3de089" />
      <PeekingLeaf className="w-28 h-28 sm:w-40 sm:h-40 -left-6 sm:-left-8 top-1/2 -rotate-[15deg]" color="#67ecc6" />
      <PeekingLeaf className="w-24 h-24 sm:w-36 sm:h-36 -right-6 sm:-right-8 top-3/4 rotate-[30deg]" color="#5ce1a6" />
      <PeekingLeaf className="w-28 h-28 sm:w-44 sm:h-44 -left-6 sm:-left-12 bottom-12 -rotate-[45deg]" color="#3de089" />

      {/* Main Forest Green Poster Column Wrapper (Conforming to Perrier styling) */}
      <div className="max-w-4xl w-full mx-auto bg-[#17814c] border-4 border-slate-900 rounded-[32px] sm:rounded-[48px] shadow-[16px_16px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col min-h-[95vh] z-10">
        
        {/* Master Poster Header (Styled in creamy off-white with black outline) */}
        <header id="master-header" className="border-b-4 border-slate-900 bg-[#fdfbf2] p-4 sm:p-5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
          {/* Left Floral/Daisy Doodle */}
          <div className="absolute -left-2 top-10 w-12 h-12 pointer-events-none hidden lg:block text-slate-800 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="4">
              <path d="M 50,50 C 40,30 30,30 35,45 C 20,35 15,45 35,50 C 20,60 25,70 40,60 C 45,75 55,75 50,60 C 65,70 70,60 55,50 C 70,40 65,30 50,45 Z" />
              <circle cx="50" cy="50" r="8" className="fill-yellow-summer" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left cursor-pointer" onClick={() => { setActivePage('landing'); setSelectedProduct(null); }}>
            {/* Playful Logo Icon */}
            <div className="w-14 h-14 bg-yellow-summer border-3 border-slate-900 rounded-full flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] animate-wiggle-slow">
              <Sun className="text-slate-900 fill-yellow-summer-light" size={28} />
            </div>
            
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-slate-900 uppercase">
                  ECLUSION
                </h1>
                <span className="font-mono text-xs font-black bg-slate-900 text-white px-2 py-0.5 rounded border border-slate-900 shadow-[1px_1px_0px_rgba(255,255,255,1)]">
                  2026
                </span>
              </div>
              
              <div className="mt-1.5 bg-slate-900 text-white text-[9px] sm:text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider inline-block border-2 border-slate-900 shadow-[2px_2px_0px_rgba(255,217,102,1)]">
                EMPOWERING • CREATIVITY • INCLUSION
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-slate-50 p-1.5 rounded-xl border-3 border-slate-900 text-xs font-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => { setActivePage('landing'); setSelectedProduct(null); }}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${activePage === 'landing' ? 'bg-yellow-summer text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'hover:bg-white text-slate-700'}`}
            >
              UTAMA
            </button>
            <button
              onClick={() => navigateToShop('Home')}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${activePage === 'shop' && !selectedProduct ? 'bg-yellow-summer text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'hover:bg-white text-slate-700'}`}
            >
              BELANJA
            </button>
            <button
              onClick={() => { setActivePage('about'); setSelectedProduct(null); }}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${activePage === 'about' ? 'bg-yellow-summer text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'hover:bg-white text-slate-700'}`}
            >
              TENTANG KAMI
            </button>
            <button
              onClick={() => { setActivePage('contact'); setSelectedProduct(null); }}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${activePage === 'contact' ? 'bg-yellow-summer text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'hover:bg-white text-slate-700'}`}
            >
              HUBUNGI KAMI
            </button>
          </nav>

          {/* Right Info Sticker (KUMMBA style cat & date) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right">
              <span className="text-[9px] font-mono font-black text-slate-400 block uppercase">ECLUSION DEPT</span>
              <span className="text-[10px] font-mono font-black text-slate-800">2026.07.16</span>
            </div>
            
            {/* Cute Cat Face Bubble */}
            <div className="w-12 h-12 bg-sky-200 border-3 border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-slate-900 fill-white" stroke="currentColor" strokeWidth="4">
                <path d="M 20,40 L 15,15 L 40,30" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 80,40 L 85,15 L 60,30" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="55" r="35" />
                <circle cx="38" cy="50" r="4" className="fill-slate-900" />
                <circle cx="62" cy="50" r="4" className="fill-slate-900" />
                <path d="M 46,62 Q 50,66 54,62" strokeLinecap="round" />
                <path d="M 50,58 L 50,62" />
                <path d="M 10,55 L 25,56" />
                <path d="M 10,63 L 25,61" />
                <path d="M 90,55 L 75,56" />
                <path d="M 90,63 L 75,61" />
              </svg>
            </div>
          </div>
        </header>

      {/* Main Content Router with Transitions */}
      <main className="relative z-10 flex-1 px-4 sm:px-8 py-8">
        <AnimatePresence mode="wait">
             {/* LANDING PAGE */}
          {activePage === 'landing' && (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col justify-start items-center gap-16"
              id="landing-container"
            >
              {/* SECTION 1: Scenic landscape Hero Header with layered hills */}
              <div className="w-full bg-[#9fe1f5] rounded-3xl sm:rounded-[36px] border-4 border-slate-900 overflow-hidden relative shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[460px] md:min-h-[520px]">
                {/* Rolling green hills background drawn using stacked SVGs */}
                <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-0">
                  <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                    {/* Back hills */}
                    <path d="M-20 120 Q80 70 200 110 T420 110 L420 160 L-20 160 Z" fill="#399f65" />
                    {/* Mid hills */}
                    <path d="M-20 130 Q120 90 260 125 T420 120 L420 160 L-20 160 Z" fill="#1e8750" />
                    {/* Front hills */}
                    <path d="M-20 140 Q160 110 300 135 T420 130 L420 160 L-20 160 Z" fill="#12713e" />
                    {/* Bottle/Sunburst peeking up in the background valley */}
                    <g transform="translate(200, 105)">
                      <circle cx="0" cy="0" r="28" fill="#feefc3" opacity="0.4" />
                      <path d="M-4 -20 L4 -20 L6 10 L-6 10 Z" fill="#104427" />
                      <circle cx="0" cy="-25" r="4" fill="#feefc3" />
                    </g>
                  </svg>
                </div>

                {/* Floating clouds & stars */}
                <div className="absolute top-8 left-8 text-white/80 animate-drift-right pointer-events-none">
                  <Cloud size={54} fill="currentColor" stroke="none" />
                </div>
                <div className="absolute top-20 right-12 text-white/60 pointer-events-none">
                  <Sparkles size={28} className="text-yellow-summer animate-pulse" />
                </div>

                {/* Center Content: Giant block typography title and pill button */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
                  <div className="mb-2 bg-slate-900 text-yellow-summer text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                    SPECIAL EDITION ART SHOWCASE
                  </div>

                  <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-[#faf8eb] tracking-tighter leading-none uppercase drop-shadow-[5px_5px_0px_rgba(15,23,42,1)] select-none">
                    ECLUSION
                  </h1>
                  
                  <p className="mt-4 text-slate-900 font-black text-xs sm:text-sm uppercase tracking-wider max-w-md bg-white/90 border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    “Empowering Creativity through Inclusion”
                  </p>

                  <button
                    onClick={() => navigateToShop('Home')}
                    className="mt-8 bg-[#fdfbf2] hover:bg-yellow-50 text-slate-900 font-display font-black text-sm px-8 py-3.5 rounded-full border-3 border-slate-900 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer uppercase tracking-tight"
                  >
                    DISCOVER COLLECTION
                  </button>
                </div>
              </div>

              {/* SECTION 2: PRODUCTS (KOLEKSI KARYA) Spotlight Section with Starburst & Art Specs Table */}
              <div className="w-full flex flex-col items-center">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-[#fdfbf2] tracking-wider text-center uppercase mb-8">
                  PRODUCTS
                </h2>

                {/* Main Cream Highlight Container with colorful stripes header */}
                <div className="w-full bg-[#fdfbf2] rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col relative">
                  {/* Decorative colorful retro stripes at the top of the box */}
                  <div className="h-4 flex border-b-4 border-slate-900">
                    <div className="flex-1 bg-[#ffd966]"></div>
                    <div className="flex-1 bg-[#ff5d62]"></div>
                    <div className="flex-1 bg-[#9fe1f5]"></div>
                    <div className="flex-1 bg-[#c084fc]"></div>
                  </div>

                  {/* Main contents split: Left Product Box, Right Specs fact sheet */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-6 md:p-8 items-center">
                    
                    {/* Left: Starburst Box displaying the highlighted green tote bag - now more compact */}
                    <div className="md:col-span-4 bg-[#369d62] rounded-2xl border-3 border-slate-900 aspect-square max-w-[240px] md:max-w-[280px] w-full mx-auto md:mx-0 flex items-center justify-center relative shadow-[3px_3px_0px_rgba(0,0,0,1)] overflow-hidden group">
                      <ComicStarburst />
                      <ProductIllustration 
                        imageKey="tote-green" 
                        className="w-36 h-36 md:w-44 md:h-44 object-contain relative z-10 animate-float drop-shadow-[4px_10px_10px_rgba(0,0,0,0.25)]" 
                      />
                      
                      <span className="absolute bottom-3 left-3 bg-[#fdfbf2] text-slate-900 border-2 border-slate-900 font-mono font-black text-[9px] px-2 py-0.5 rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] uppercase z-10">
                        BEST SELLER 🌟
                      </span>
                    </div>

                    {/* Right: Fact Sheet/Nutrition Table of the product details - more compact */}
                    <div className="md:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                          <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase tracking-tight leading-none">
                            TOTE BAG KOTAK HIJAU
                          </h3>
                          <span className="bg-[#ffd966] text-slate-900 font-mono font-black text-xs px-2.5 py-0.5 rounded-lg border-2 border-slate-900 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] shrink-0">
                            Rp 74.000
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          <span className="bg-[#3de089]/20 text-emerald-900 font-black text-[9px] uppercase px-2 py-0.5 rounded border border-emerald-900">Tote Bag</span>
                          <span className="bg-[#9fe1f5]/30 text-sky-900 font-black text-[9px] uppercase px-2 py-0.5 rounded border border-sky-900">Ayu (11 tahun)</span>
                          <span className="bg-[#ff5d62]/20 text-rose-900 font-black text-[9px] uppercase px-2 py-0.5 rounded border border-rose-900">Down Syndrome</span>
                        </div>

                        {/* Hand-drawn "NUTRITIONAL FACTS" specifications panel - smaller size */}
                        <div className="border-3 border-slate-900 bg-white p-3 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] font-mono text-[11px] max-w-md w-full">
                          <div className="border-b-4 border-slate-900 pb-0.5 mb-2">
                            <h4 className="font-display font-black text-sm text-slate-900 uppercase">ART SPECIFICATIONS</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase">100% Impact • Handcrafted with Love</p>
                          </div>
                          
                          <div className="flex justify-between border-b-2 border-slate-200 py-1 font-black">
                            <span>Nama Seniman (Illustrator)</span>
                            <span className="text-right text-slate-900">Ayu (11 y.o.)</span>
                          </div>
                          <div className="flex justify-between border-b-2 border-slate-200 py-1 font-black">
                            <span>Bahan Media (Material)</span>
                            <span className="text-right text-slate-900">Premium Canvas Dril</span>
                          </div>
                          <div className="flex justify-between border-b-2 border-slate-200 py-1">
                            <span>Kerapihan Jahitan (Stitching)</span>
                            <span className="text-right font-black text-slate-900">Sangat Tinggi (100%)</span>
                          </div>
                          <div className="flex justify-between border-b-2 border-slate-200 py-1">
                            <span>Dampak Sosial (Social Impact)</span>
                            <span className="text-right font-black text-emerald-600">Maksimal 🌟</span>
                          </div>
                          <div className="flex justify-between pt-1 font-black text-slate-900 text-[10px] uppercase">
                            <span>Dukungan Kemandirian</span>
                            <span className="text-right text-rose-600">100% KE SENIMAN</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <button
                          onClick={() => navigateToShop('Tote Bag')}
                          className="flex-1 bg-[#17814c] hover:bg-[#12673c] text-white font-display font-black text-xs py-3 px-5 rounded-xl border-3 border-slate-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-center uppercase"
                        >
                          BELI SEKARANG ➜
                        </button>
                        <button
                          onClick={() => {
                            const prod = PRODUCTS.find(p => p.imageKey === 'tote-green');
                            if (prod) setSelectedProduct(prod);
                            setActivePage('shop');
                          }}
                          className="bg-white hover:bg-slate-50 text-slate-900 font-display font-black text-[10px] py-3 px-5 rounded-xl border-3 border-slate-900 shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-center uppercase"
                        >
                          LIHAT DETAIL
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* SECTION 3: CREATORS (SENIMAN KAMI) Tilted Polaroid Stamp Row */}
              <div className="w-full flex flex-col items-center">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-[#fdfbf2] tracking-wider text-center uppercase mb-10">
                  CREATORS
                </h2>

                {/* Horizontal row of colorful tilted sticker-cards for child artists */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
                  {[
                    { id: "01", name: "AYU", label: "DETOX", specialty: "Motif Kotak Hijau", color: "bg-[#ffd966]", rotation: "-rotate-3 hover:-rotate-1", cat: "Tote Bag" },
                    { id: "02", name: "LARAS", label: "NATURAL", specialty: "Bunny Acrylic", color: "bg-[#ff5d62]", rotation: "rotate-2 hover:rotate-4", cat: "Key Chain" },
                    { id: "03", name: "BANYU", label: "CHILL", specialty: "Ombak Biru & Daisy", color: "bg-[#9fe1f5]", rotation: "-rotate-2 hover:rotate-0", cat: "Tote Bag" },
                    { id: "04", name: "BUMI", label: "FRESH", specialty: "Kaos Kaki Lavender", color: "bg-[#c084fc]", rotation: "rotate-3 hover:rotate-1", cat: "Socks" }
                  ].map((art) => (
                    <button
                      key={art.id}
                      onClick={() => navigateToShop(art.cat)}
                      className={`${art.color} ${art.rotation} rounded-2xl border-4 border-slate-900 p-5 sm:p-6 text-left shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between aspect-square cursor-pointer hover:scale-105`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="font-display font-black text-3xl text-slate-900/40">
                          {art.id}
                        </span>
                        <span className="bg-white/80 border-2 border-slate-900 font-mono font-black text-[9px] px-2 py-0.5 rounded uppercase">
                          {art.label}
                        </span>
                      </div>

                      <div className="mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-3 bg-white">
                          <ChildAvatar avatarKey={art.name.toLowerCase()} size="sm" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">
                          {art.name}
                        </h3>
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight mt-0.5">
                          {art.specialty}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 4: SHARE YOUR MOMENTS / Horizontal ticker block & Encouragement Board */}
              <div className="w-full bg-slate-950 rounded-3xl border-4 border-slate-900 overflow-hidden relative shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col">
                
                {/* Horizontal scrolling banner text ticker */}
                <div className="bg-[#ffd966] border-b-4 border-slate-900 py-4 overflow-hidden relative z-10 flex select-none">
                  <div className="animate-ticker whitespace-nowrap flex items-center gap-12 text-slate-900 font-display font-black text-2xl uppercase tracking-widest">
                    <span>SHARE YOUR MOMENTS • EMPOWERING CREATIVITY • SHARE THE LOVE • INCLUSION INDONESIA</span>
                    <span>SHARE YOUR MOMENTS • EMPOWERING CREATIVITY • SHARE THE LOVE • INCLUSION INDONESIA</span>
                  </div>
                </div>

                {/* Subtitle / Encouragement Board content */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1e8750] bg-notebook-grid">
                  
                  {/* Left Column: Brief details and Form bubble */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="bg-white rounded-2xl border-4 border-slate-900 p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] relative -rotate-1">
                      {/* Dialogue/Comic speech bubble pointer */}
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-r-4 border-t-4 border-slate-900 rotate-45 hidden lg:block"></div>
                      
                      <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight mb-2">
                        PAPAN PENYEMANGAT
                      </h3>
                      <p className="text-xs font-bold text-slate-600 mb-4 leading-relaxed">
                        Tuliskan pesan penyemangat bagi adik-adik pelukis disabilitas kita agar mereka terus berkarya! 🌸
                      </p>

                      <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Nama Anda"
                          value={newMsgName}
                          onChange={(e) => setNewMsgName(e.target.value)}
                          className="w-full p-2.5 rounded-lg border-2 border-slate-900 font-bold text-xs bg-slate-50 focus:bg-white focus:outline-none"
                          required
                        />
                        <select
                          value={newMsgTarget}
                          onChange={(e) => setNewMsgTarget(e.target.value)}
                          className="w-full p-2.5 rounded-lg border-2 border-slate-900 font-black text-xs bg-slate-50 focus:bg-white focus:outline-none uppercase"
                        >
                          <option value="Semua Anak">Untuk: Semua Anak</option>
                          <option value="Ayu">Untuk: Ayu</option>
                          <option value="Laras">Untuk: Laras</option>
                          <option value="Banyu">Untuk: Banyu</option>
                          <option value="Bumi">Untuk: Bumi</option>
                        </select>
                        <textarea
                          placeholder="Tulis pesan penyemangat di sini..."
                          value={newMsgText}
                          onChange={(e) => setNewMsgText(e.target.value)}
                          rows={3}
                          className="w-full p-2.5 rounded-lg border-2 border-slate-900 font-bold text-xs bg-slate-50 focus:bg-white focus:outline-none resize-none"
                          required
                        ></textarea>
                        
                        <button
                          type="submit"
                          className="bg-[#ff5d62] hover:bg-rose-500 text-white font-display font-black text-xs py-3 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all cursor-pointer uppercase text-center"
                        >
                          KIRIM STIKER PENYEMANGAT ➜
                        </button>
                      </form>

                      {isSent && (
                        <div className="absolute inset-0 bg-white/95 rounded-xl flex flex-col items-center justify-center p-6 text-center z-10 border-4 border-emerald-500 animate-bounce-gentle">
                          <Check size={40} className="text-emerald-600 mb-2 stroke-[3px]" />
                          <p className="font-display font-black text-base text-slate-950 uppercase">STIKER DIKIRIM!</p>
                          <p className="text-[10px] font-bold text-slate-500 mt-1">Terima kasih atas kepedulian Anda yang luar biasa ❤️</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Displaying Scrolling Sticky Notes representing the messages */}
                  <div className="lg:col-span-7 flex flex-col gap-4 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                    {messages.length > 0 ? (
                      messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`${msg.color} p-4 rounded-xl border-3 border-slate-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] relative rotate-[0.5deg]`}
                        >
                          <div className="flex justify-between items-start gap-2 mb-1.5 border-b-2 border-slate-900/10 pb-1">
                            <div>
                              <span className="font-mono font-black text-[10px] text-slate-800 uppercase bg-white/60 px-1.5 py-0.5 rounded border border-slate-900/20">
                                {msg.name}
                              </span>
                              <span className="text-[9px] font-mono text-slate-500 ml-2">
                                {msg.date}
                              </span>
                            </div>
                            <span className="bg-slate-900 text-white font-mono font-black text-[9px] px-2 py-0.5 rounded uppercase">
                              Ke: {msg.target}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-800 leading-relaxed italic">
                            "{msg.text}"
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white/80 p-8 rounded-xl border-3 border-dashed border-slate-400 text-center text-slate-500 font-bold text-xs uppercase">
                        Belum ada stiker penyemangat. Jadilah yang pertama mengirim!
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* SHOP PAGE (PRODUCT LIST & CATEGORIES) */}
          {activePage === 'shop' && !selectedProduct && (
            <motion.div
              key="shop-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-80px)]"
              id="shop-layout"
            >
              {/* Category / Sidebar Selector */}
              <div className="w-full lg:w-64 shrink-0" id="sidebar-container">
                <div className="bg-yellow-summer border-4 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sticky top-24">
                  
                  {/* Decorative sun rays at sidebar top */}
                  <div className="flex items-center gap-2 mb-6">
                    <Compass className="text-slate-900 animate-spin-slow" size={22} />
                    <h2 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">Kategori</h2>
                  </div>

                  {/* Navigation List conforming strictly to the screenshot categories */}
                  <div className="flex flex-col gap-2">
                    {['Home', 'Tote Bag', 'Key Chain', 'Hat', 'Socks', 'Others'].map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left px-5 py-3 rounded-xl font-black border-3 transition-all flex justify-between items-center cursor-pointer ${
                            isActive
                              ? 'bg-slate-900 text-white border-slate-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] translate-x-1'
                              : 'bg-white text-slate-900 border-slate-900 hover:bg-yellow-50 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                          }`}
                        >
                          <span>{cat === 'Home' ? 'Semua Karya' : cat}</span>
                          {isActive && <Heart size={14} className="fill-rose-500 stroke-rose-500" />}
                        </button>
                      );
                    })}
                  </div>

                  <hr className="my-6 border-slate-900 border-2 opacity-100" />

                  {/* Internal shortcuts for About and Contact inside sidebar */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setActivePage('about')}
                      className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-black text-slate-800 hover:text-slate-950 transition-colors flex items-center gap-2 cursor-pointer hover:translate-x-1"
                    >
                      <Info size={16} />
                      TENTANG KAMI
                    </button>
                    <button
                      onClick={() => setActivePage('contact')}
                      className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-black text-slate-800 hover:text-slate-950 transition-colors flex items-center gap-2 cursor-pointer hover:translate-x-1"
                    >
                      <Mail size={16} />
                      HUBUNGI KAMI
                    </button>
                  </div>

                  {/* Summer badge */}
                  <div className="mt-8 bg-white/90 p-4 rounded-xl border-3 border-slate-900 text-center text-xs text-slate-900 font-black uppercase tracking-tight shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    🐳 vibes: Fun Summer
                  </div>
                </div>
              </div>

              {/* Product Grid Area */}
              <div className="flex-1" id="product-grid-container">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div>
                    <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter">
                      {selectedCategory === 'Home' ? 'Koleksi Eclusion' : selectedCategory}
                    </h2>
                    <p className="text-slate-700 text-sm font-bold mt-1">
                      Menampilkan {filteredProducts.length} produk pilihan buatan anak disabilitas
                    </p>
                  </div>
                  
                  {/* Small Reset Filter */}
                  {selectedCategory !== 'Home' && (
                    <button 
                      onClick={() => setSelectedCategory('Home')}
                      className="text-xs font-black uppercase tracking-wider text-sky-900 hover:text-white hover:bg-slate-900 bg-sky-200 border-3 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer"
                    >
                      Lihat Semua
                    </button>
                  )}
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProducts.map((prod, index) => (
                      <motion.div
                        key={prod.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl border-4 border-slate-900 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col group"
                        onClick={() => setSelectedProduct(prod)}
                      >
                        {/* Rounded Illustration Box - White box exactly as seen in Screenshot 1 */}
                        <div className="bg-sky-50 rounded-xl border-3 border-slate-900 p-4 aspect-square flex items-center justify-center relative overflow-hidden group-hover:bg-yellow-50/50 transition-colors shadow-inner">
                          <ProductIllustration imageKey={prod.imageKey} imagePath={prod.imagePath} className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300" />
                          
                          {/* Top-Right Badge for Illustrator */}
                          <div className="absolute top-3 right-3 bg-white border-3 border-slate-900 text-xs font-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900"></span>
                            Art: {prod.illustrator}
                          </div>
                        </div>

                        {/* Product Meta */}
                        <div className="mt-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-display font-black text-xl text-slate-900 group-hover:text-sky-900 tracking-tight group-hover:translate-x-0.5 transition-all line-clamp-1 uppercase">
                              {prod.name}
                            </h3>
                            <span className="inline-block mt-2 text-xs font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border-2 border-slate-900">
                              {prod.category}
                            </span>
                          </div>

                          <div className="mt-5 pt-4 border-t-3 border-slate-900 flex items-center justify-between">
                            <span className="text-xl font-black text-slate-900">
                              {prod.priceFormatted}
                            </span>
                            
                            <span className="text-xs font-black uppercase text-sky-900 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform bg-sky-100 border-2 border-slate-900 px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                              Beli ➜
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border-4 border-slate-900 p-12 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    <p className="text-xl font-black text-slate-800 uppercase tracking-tight mb-2">Ups, produk belum tersedia</p>
                    <p className="text-sm font-bold text-slate-600 mb-6">Kami sedang mengkurasi lukisan baru dari anak-anak untuk kategori {selectedCategory}.</p>
                    <button 
                      onClick={() => setSelectedCategory('Home')}
                      className="bg-yellow-summer border-3 border-slate-900 px-6 py-3 rounded-xl font-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer uppercase text-sm"
                    >
                      Kembali ke Semua Produk
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* PRODUCT DETAIL VIEW (PER SCREENSHOT 2) */}
          {activePage === 'shop' && selectedProduct && (
            <motion.div
              key="product-detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-6xl mx-auto px-4 py-8"
              id="product-detail-container"
            >
              {/* Back Button */}
              <button
                id="btn-back-to-shop"
                onClick={() => setSelectedProduct(null)}
                className="inline-flex items-center gap-2 bg-white hover:bg-yellow-50 border-3 border-slate-900 font-display font-black px-6 py-3 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-8 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft size={18} />
                KEMBALI BELANJA
              </button>

              {/* Main Detail Grid Layout conforming to Screenshot 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Product Illustration Box & Artist Bio */}
                <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                  {/* Large Product Container with comic emerald starburst background */}
                  <div className="bg-[#369d62] rounded-2xl border-4 border-slate-900 p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center relative overflow-hidden">
                    <ComicStarburst />
                    <ProductIllustration imageKey={selectedProduct.imageKey} imagePath={selectedProduct.imagePath} className="w-80 h-80 object-contain animate-float relative z-10 drop-shadow-[4px_10px_12px_rgba(0,0,0,0.3)]" />
                    
                    {/* Floating Sun badge */}
                    <div className="absolute bottom-4 right-4 bg-yellow-summer p-2.5 rounded-full border-3 border-slate-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10">
                      <Sun className="text-slate-900 animate-spin-slow" size={24} />
                    </div>
                  </div>

                  {/* Artist Info Box exactly formatted as in screenshot */}
                  <div className="bg-white rounded-2xl border-4 border-slate-900 p-6 flex flex-col sm:flex-row items-center gap-6 relative shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    {/* "Artist" vertical label as shown in page 2 */}
                    <div className="hidden sm:block absolute -left-1 text-slate-900 font-display font-black uppercase text-lg transform -rotate-90 origin-left translate-y-6 tracking-wider">
                      Artist
                    </div>
                    
                    {/* Space padding for vertical label */}
                    <div className="hidden sm:block w-12"></div>

                    {/* Artist portrait & details */}
                    <div className="flex flex-col items-center shrink-0">
                      <ChildAvatar avatarKey={selectedProduct.illustratorAvatar} size="lg" />
                      <h4 className="font-display font-black text-lg text-slate-950 mt-2 uppercase tracking-tight">
                        {selectedProduct.illustrator}
                      </h4>
                    </div>

                    {/* Artist Bio text description */}
                    <div className="flex-1 text-center sm:text-left">
                      <h5 className="font-black text-rose-600 mb-1.5 flex items-center justify-center sm:justify-start gap-1.5 text-xs uppercase tracking-widest">
                        <Heart size={14} className="text-rose-500 fill-rose-400" />
                        Pelukis Berbakat
                      </h5>
                      <p className="text-slate-700 text-sm font-bold leading-relaxed">
                        {selectedProduct.illustratorBio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Product Description, Price, & Buy Now Button */}
                <div className="col-span-1 lg:col-span-6 bg-white rounded-2xl border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                  <span className="bg-sky-200 text-slate-900 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-slate-900 mb-4 inline-block">
                    {selectedProduct.category}
                  </span>

                  <h1 className="font-display font-black text-4xl md:text-5xl text-slate-900 tracking-tighter leading-tight mb-4 uppercase">
                    {selectedProduct.name}
                  </h1>

                  <div className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span>{selectedProduct.priceFormatted}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-black px-3 py-1.5 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      STOK TERBATAS
                    </span>
                  </div>

                  <p className="text-slate-700 font-bold leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="mb-8">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">FITUR PRODUK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map(tag => (
                        <span key={tag} className="text-xs font-black text-slate-800 bg-sky-summer-light px-3.5 py-1.5 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          # {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buying / Contact Instagram Trigger Button as requested */}
                  <div className="pt-6 border-t-3 border-slate-900">
                    <p className="text-xs font-black text-slate-600 text-center mb-4 uppercase tracking-wider">
                      Pesanan Anda membantu menghidupi kemandirian anak disabilitas! 🌸
                    </p>
                    
                    {/* Beli Sekarang button opens specified Instagram Link */}
                    <a
                      href={buyNowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#70a133] hover:bg-[#5b8527] text-white font-display font-black text-xl py-5 px-8 rounded-2xl border-4 border-slate-900 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] active:scale-95 transition-all duration-200 text-center uppercase tracking-tight"
                      id="btn-buy-now"
                    >
                      <ShoppingBag size={22} />
                      Beli Sekarang!!!!
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ABOUT US PAGE (FOUNDERS & COLLABORATORS) */}
          {activePage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto px-4 py-8"
              id="about-container"
            >
              {/* Back Button */}
              <button
                onClick={() => navigateToShop('Home')}
                className="inline-flex items-center gap-2 bg-white hover:bg-yellow-50 border-3 border-slate-900 font-display font-black px-6 py-3 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft size={16} />
                KEMBALI BELANJA
              </button>

              {/* Branding Header */}
              <div className="text-center mb-16 mt-8">
                <h1 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-3 uppercase tracking-tighter">
                  Tentang Eclusion
                </h1>
                <p className="text-lg md:text-xl font-black text-slate-700 font-sans tracking-tight max-w-lg mx-auto">
                  “Empowering Creativity through Inclusion”
                </p>
                <div className="w-24 h-2 bg-yellow-summer border-3 border-slate-900 mx-auto mt-6 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
              </div>

              {/* Our Founders Section as shown in page 3 */}
              <section className="mb-16">
                <h2 className="font-display font-black text-3xl text-slate-900 text-center mb-10 uppercase tracking-tight">
                  OUR FOUNDERS
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {FOUNDERS.map((founder) => (
                    <div key={founder.name} className="bg-white rounded-2xl border-4 border-slate-900 p-6 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center">
                      <ChildAvatar avatarKey={founder.avatarKey} size="lg" className="mb-4" />
                      <h3 className="font-display font-black text-xl text-slate-900 mb-1 uppercase tracking-tight">{founder.name}</h3>
                      <span className="text-xs font-black text-sky-900 bg-sky-100 px-4 py-1.5 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4 block uppercase tracking-wide">
                        {founder.role}
                      </span>
                      <p className="text-slate-700 text-sm font-bold leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Collaborators Section as shown in page 3 */}
              <section className="mb-16">
                <h2 className="font-display font-black text-3xl text-slate-900 text-center mb-10 uppercase tracking-tight">
                  OUR COLLABORATORS
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {COLLABORATORS.map((collab) => (
                    <div key={collab.name} className="bg-white rounded-2xl border-4 border-slate-900 p-6 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center">
                      <ChildAvatar avatarKey={collab.avatarKey} size="lg" className="mb-4" />
                      <h3 className="font-display font-black text-xl text-slate-900 mb-1 uppercase tracking-tight">{collab.name}</h3>
                      <span className="text-xs font-black text-pink-900 bg-pink-100 px-4 py-1.5 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4 block uppercase tracking-wide">
                        {collab.role}
                      </span>
                      <p className="text-slate-700 text-sm font-bold leading-relaxed">
                        {collab.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </section>


            </motion.div>
          )}

          {/* CONTACT US PAGE (CONFORMING TO SCREENSHOT 5) */}
          {activePage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto px-4 py-8"
              id="contact-container"
            >
              {/* Back Button */}
              <button
                onClick={() => navigateToShop('Home')}
                className="inline-flex items-center gap-2 bg-white hover:bg-yellow-50 border-3 border-slate-900 font-display font-black px-6 py-3 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer mb-8"
              >
                <ArrowLeft size={16} />
                KEMBALI BELANJA
              </button>

              {/* Branding Header */}
              <div className="text-center mb-16 mt-8">
                <h1 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-3 uppercase tracking-tighter">
                  Contact Us
                </h1>
                <p className="text-lg md:text-xl font-black text-slate-700 font-sans tracking-tight max-w-lg mx-auto">
                  “Empowering Creativity through Inclusion”
                </p>
                <div className="w-24 h-2 bg-yellow-summer border-3 border-slate-900 mx-auto mt-6 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
              </div>

              {/* Contact Icons Row as shown in page 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                
                {/* Instagram Circle */}
                <a 
                  href={buyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border-4 border-slate-900 p-8 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-pink-100 border-4 border-pink-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform relative overflow-hidden">
                    {/* Scenic cloud circles as requested by page 5 avatar look */}
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute inset-0">
                      <rect width="100" height="100" fill="#FCE7F3" />
                      <circle cx="50" cy="50" r="30" fill="#FFF" opacity="0.6" />
                      <path d="M0 70 Q25 50 50 70 T100 70 L100 100 L0 100 Z" fill="#F472B6" />
                    </svg>
                    <Instagram size={36} className="text-pink-600 relative z-10" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">Instagram</h3>
                  <p className="text-slate-700 text-sm mt-1 font-bold group-hover:text-pink-600 transition-colors">@eclusion.id</p>
                </a>

                {/* Website Circle */}
                <a 
                  href={buyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border-4 border-slate-900 p-8 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-sky-100 border-4 border-sky-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform relative overflow-hidden">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute inset-0">
                      <rect width="100" height="100" fill="#E0F2FE" />
                      <circle cx="50" cy="50" r="30" fill="#FFF" opacity="0.6" />
                      <path d="M0 70 Q25 50 50 70 T100 70 L100 100 L0 100 Z" fill="#38BDF8" />
                    </svg>
                    <Globe size={36} className="text-sky-600 relative z-10" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">Website</h3>
                  <p className="text-slate-700 text-sm mt-1 font-bold group-hover:text-sky-600 transition-colors">www.eclusion.id</p>
                </a>

                {/* WhatsApp Circle */}
                <a 
                  href={buyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border-4 border-slate-900 p-8 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform relative overflow-hidden">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute inset-0">
                      <rect width="100" height="100" fill="#D1FAE5" />
                      <circle cx="50" cy="50" r="30" fill="#FFF" opacity="0.6" />
                      <path d="M0 70 Q25 50 50 70 T100 70 L100 100 L0 100 Z" fill="#34D399" />
                    </svg>
                    <MessageSquare size={36} className="text-emerald-600 relative z-10" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">Whatsapp</h3>
                  <p className="text-slate-700 text-sm mt-1 font-bold group-hover:text-emerald-600 transition-colors">+62 812-3456-7890</p>
                </a>

              </div>

              {/* Real Interactive Encouragement Board (Papan Penyemangat) - Extremely aligned with "Empowering Creativity through Inclusion" */}
              <div className="bg-white rounded-2xl border-4 border-slate-900 p-6 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative" id="encouragement-board">
                {/* Visual Sun sticker */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-yellow-300 border-3 border-slate-900 rounded-full flex items-center justify-center animate-bounce-gentle shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  🌞
                </div>

                <div className="text-center mb-10">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-slate-950 flex items-center justify-center gap-2 uppercase tracking-tight">
                    <Heart className="fill-rose-500 text-rose-500" />
                    Papan Penyemangat Anak-Anak
                  </h2>
                  <p className="text-slate-700 text-sm font-bold max-w-lg mx-auto mt-3">
                    Anak-anak disabilitas sangat senang membaca pesan dukungan dari Anda! Tuliskan ucapan penyemangat, cinta, atau pendapat Anda tentang karya mereka di bawah ini.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Message Input Form */}
                  <form onSubmit={handleSendMessage} className="lg:col-span-5 bg-sky-summer-light/50 border-3 border-slate-900 p-6 rounded-xl flex flex-col gap-4">
                    <h3 className="font-display font-black text-sm text-slate-900 uppercase tracking-wider">KIRIM PESAN KASIH</h3>
                    
                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1.5 uppercase">Nama Anda</label>
                      <input 
                        type="text" 
                        required
                        value={newMsgName}
                        onChange={(e) => setNewMsgName(e.target.value)}
                        placeholder="Contoh: Kak Siska"
                        className="w-full bg-white border-3 border-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold focus:outline-none focus:bg-yellow-50 focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1.5 uppercase font-sans">Kirim Pesan Untuk</label>
                      <select 
                        value={newMsgTarget}
                        onChange={(e) => setNewMsgTarget(e.target.value)}
                        className="w-full bg-white border-3 border-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold focus:outline-none cursor-pointer focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        <option value="Semua Anak">Semua Anak</option>
                        <option value="Ayu">Ayu (Desainer Topi & Tote Bag Kotak)</option>
                        <option value="Naura">Naura (Desainer Tote Wave & Smiley Daisy)</option>
                        <option value="Nadia">Nadia (Desainer Bunny Keychain)</option>
                        <option value="Samudra">Samudra (Desainer Kaos Kaki Lavender & Ungu)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1.5 uppercase">Pesan Hangat Anda</label>
                      <textarea 
                        required
                        rows={3}
                        value={newMsgText}
                        onChange={(e) => setNewMsgText(e.target.value)}
                        placeholder="Tuliskan ucapan penyemangat yang manis di sini..."
                        className="w-full bg-white border-3 border-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold focus:outline-none focus:bg-yellow-50 resize-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-yellow-summer hover:bg-yellow-400 font-display font-black text-sm py-4 px-4 rounded-xl border-3 border-slate-900 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                    >
                      {isSent ? (
                        <>
                          <Check size={16} className="text-emerald-700" />
                          <span className="text-slate-900">Terkirim! Terima kasih ❤️</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Kirim Papan Penyemangat</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Encouragement Sticky Notes List */}
                  <div className="lg:col-span-7 flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-2">
                    <h3 className="font-display font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={16} className="text-yellow-600 fill-yellow-400" />
                      KOTAK PESAN KASIH SAYANG
                    </h3>

                    {messages.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ rotate: 1, scale: 1.02 }}
                            className={`${msg.color} border-3 border-slate-900 rounded-xl p-5 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden`}
                          >
                            {/* Tape illustration */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/70 transform rotate-1 border-x-2 border-slate-900"></div>
                            
                            <div className="pt-2">
                              <span className="text-[10px] bg-slate-900 text-white font-black px-3 py-1 rounded-md inline-block mb-3 border-2 border-slate-900 uppercase tracking-wider">
                                Untuk: {msg.target}
                              </span>
                              <p className="text-xs font-bold text-slate-800 leading-relaxed italic mb-4">
                                "{msg.text}"
                              </p>
                            </div>

                            <div className="flex justify-between items-center border-t-2 border-slate-900 pt-3 text-[10px] font-black uppercase text-slate-600">
                              <span>Dari: {msg.name}</span>
                              <span>{msg.date}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-slate-50 border-3 border-dashed border-slate-300 rounded-xl">
                        <p className="text-sm font-black text-slate-400 uppercase tracking-wider mb-1">Belum ada pesan terkirim.</p>
                        <p className="text-xs text-slate-400">Jadilah yang pertama mengirimkan pesan kasih!</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer inside Scrapbook Container (Inspired by KUMMBA ruler/block footers) */}
      <footer className="bg-slate-900 text-white py-12 px-6 sm:px-10 mt-auto border-t-4 border-slate-900 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-yellow-summer tracking-tighter uppercase mb-1">
              Eclusion
            </h2>
            <p className="text-slate-300 text-xs font-black uppercase tracking-tight">
              “Empowering Creativity through Inclusion”
            </p>
            <p className="text-slate-500 text-[10px] mt-3">
              Copyright © 2026 Eclusion Indonesia. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-[10px] font-black uppercase tracking-wider text-slate-400">
            <button onClick={() => { setActivePage('landing'); setSelectedProduct(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-yellow-summer transition-colors cursor-pointer">Beranda</button>
            <button onClick={() => navigateToShop('Home')} className="hover:text-yellow-summer transition-colors cursor-pointer">Belanja</button>
            <button onClick={() => { setActivePage('about'); setSelectedProduct(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-yellow-summer transition-colors cursor-pointer">Tentang Kami</button>
            <button onClick={() => { setActivePage('contact'); setSelectedProduct(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-yellow-summer transition-colors cursor-pointer">Hubungi Kami</button>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={buyNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-summer hover:bg-yellow-400 text-slate-900 p-2.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all"
              aria-label="Instagram Eclusion"
            >
              <Instagram size={16} />
            </a>
            <a 
              href={buyNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-300 text-slate-900 p-2.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all"
              aria-label="Website Eclusion"
            >
              <Globe size={16} />
            </a>
            <a 
              href={buyNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-400 text-slate-900 p-2.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all"
              aria-label="Whatsapp Eclusion"
            >
              <MessageSquare size={16} />
            </a>
          </div>

        </div>
      </footer>

      </div>
    </div>
  );
}
