/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Target, 
  Palette, 
  FileText, 
  TrendingUp, 
  Settings, 
  Rocket, 
  Eye, 
  ChevronRight, 
  Menu, 
  X, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  Utensils,
  Search,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Tab = 'plan' | 'prototype';

// --- Components ---

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-4">
    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
  </div>
);

const PlanCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
    <h3 className="text-lg font-semibold text-stone-700 mb-4 flex items-center gap-2">
      <div className="w-2 h-2 bg-orange-500 rounded-full" />
      {title}
    </h3>
    <div className="space-y-4 text-stone-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const TimelineItem = ({ phase, duration, tasks }: { phase: string, duration: string, tasks: string[] }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-orange-200 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white" />
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-stone-800">{phase}</h4>
      <span className="text-xs font-medium bg-orange-50 text-orange-600 px-2 py-1 rounded-full">{duration}</span>
    </div>
    <ul className="list-disc list-inside text-sm text-stone-500 space-y-1">
      {tasks.map((task, i) => <li key={i}>{task}</li>)}
    </ul>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('plan');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Switcher */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-stone-200 p-1.5 rounded-full shadow-xl flex gap-1">
        <button 
          onClick={() => setActiveTab('plan')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'plan' ? 'bg-orange-600 text-white shadow-lg' : 'text-stone-500 hover:text-stone-800'}`}
        >
          <FileText size={18} />
          Strategic Plan
        </button>
        <button 
          onClick={() => setActiveTab('prototype')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'prototype' ? 'bg-orange-600 text-white shadow-lg' : 'text-stone-500 hover:text-stone-800'}`}
        >
          <Eye size={18} />
          Live Prototype
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'plan' ? (
          <motion.div 
            key="plan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-6 pt-12 pb-32"
          >
            <header className="mb-12 text-center">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Strategic Roadmap
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">
                Elly Lyimo Group <span className="text-orange-600">Digital Growth Plan</span>
              </h1>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                A comprehensive blueprint to transform Elly Lyimo Group into Tanzania's leading digital food brand.
              </p>
            </header>

            {/* 1. Business & Audience Analysis */}
            <section className="mb-16">
              <SectionHeader title="1. Business & Audience Analysis" icon={Target} />
              <div className="grid md:grid-cols-2 gap-6">
                <PlanCard title="Goal & Target Audience">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Goal:</strong> Build a professional, user-friendly, and conversion-focused website.</p>
                    <p className="text-sm"><strong>Target Audience:</strong> Tanzanian consumers interested in quality food products.</p>
                  </div>
                </PlanCard>
                <PlanCard title="Unique Selling Propositions (USPs)">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> 100% Organic Tanzanian Sourced</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> Farm-to-Table Transparency</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> Heritage Recipes with Modern Standards</li>
                  </ul>
                </PlanCard>
              </div>
            </section>

            {/* 2. Brand & Messaging Strategy */}
            <section className="mb-16">
              <SectionHeader title="2. Brand & Messaging Strategy" icon={Palette} />
              <PlanCard title="Visual Identity & Tone">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="text-xs font-bold text-orange-800 uppercase mb-1">Primary Color</p>
                    <div className="h-8 bg-orange-600 rounded-md mb-2" />
                    <p className="text-xs text-stone-500">"Sun-baked Terracotta" (#EA580C)</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p className="text-xs font-bold text-emerald-800 uppercase mb-1">Secondary Color</p>
                    <div className="h-8 bg-emerald-700 rounded-md mb-2" />
                    <p className="text-xs text-stone-500">"Lush Highland Green" (#047857)</p>
                  </div>
                  <div className="p-4 bg-stone-100 rounded-xl border border-stone-200">
                    <p className="text-xs font-bold text-stone-800 uppercase mb-1">Typography</p>
                    <p className="text-lg font-serif">Playfair Display</p>
                    <p className="text-xs text-stone-500">Elegant, Trustworthy, Heritage</p>
                  </div>
                </div>
                <p className="text-sm"><strong>Brand Tone:</strong> Warm, authentic, professional, and celebratory of Tanzanian culture. We speak like a trusted family member who is also an expert in nutrition.</p>
              </PlanCard>
            </section>

            {/* 3. Website Structure & UX */}
            <section className="mb-16">
              <SectionHeader title="3. Website Structure & UX" icon={Layout} />
              <PlanCard title="Sitemap & Navigation">
                <div className="flex flex-wrap gap-2">
                  {['Home', 'Our Story', 'Products', 'Recipes', 'Wholesale', 'Contact'].map(item => (
                    <span key={item} className="px-3 py-1 bg-stone-100 rounded-md text-sm font-medium text-stone-600 border border-stone-200">{item}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm"><strong>Mobile-First Approach:</strong> Sticky "Order via WhatsApp" button, thumb-friendly navigation, and lightning-fast product filtering.</p>
              </PlanCard>
            </section>

            {/* 4. Content Strategy */}
            <section className="mb-16">
              <SectionHeader title="4. Content Strategy" icon={FileText} />
              <div className="grid md:grid-cols-2 gap-6">
                <PlanCard title="SEO Keywords (Tanzania)">
                  <div className="flex flex-wrap gap-2">
                    {['Organic Honey Tanzania', 'Pure Sunflower Oil Morogoro', 'Best Spices Zanzibar', 'Healthy Tanzanian Recipes'].map(k => (
                      <span key={k} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100 italic">#{k}</span>
                    ))}
                  </div>
                </PlanCard>
                <PlanCard title="Content Pillars">
                  <ul className="text-sm space-y-2">
                    <li><strong>Educational:</strong> Benefits of organic farming.</li>
                    <li><strong>Cultural:</strong> Traditional recipes with a twist.</li>
                    <li><strong>Transparency:</strong> Meet our farmers (Video series).</li>
                  </ul>
                </PlanCard>
              </div>
            </section>

            {/* 5. Conversion Optimization */}
            <section className="mb-16">
              <SectionHeader title="5. Conversion Optimization" icon={TrendingUp} />
              <PlanCard title="Lead Capture & Trust">
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="font-bold">WhatsApp Integration</p>
                      <p>Direct chat for inquiries, reducing friction for local users who prefer chat over forms.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Social Proof</p>
                      <p>Displaying TBS (Tanzania Bureau of Standards) certifications and customer testimonials prominently.</p>
                    </div>
                  </div>
                </div>
              </PlanCard>
            </section>

            {/* 6. Technical Recommendations */}
            <section className="mb-16">
              <SectionHeader title="6. Technical Recommendations" icon={Settings} />
              <PlanCard title="CMS & Performance">
                <ul className="text-sm space-y-2">
                  <li><strong>CMS:</strong> WordPress + WooCommerce for easy product management and scalability.</li>
                  <li><strong>Mobile:</strong> 100% responsive design with "Mobile-First" priority for Tanzanian users.</li>
                  <li><strong>Speed:</strong> Image optimization and CDN (Cloudflare) for fast loading on 3G/4G networks.</li>
                  <li><strong>Integrations:</strong> Selcom/Pesapal for local payments, Google Maps for location, and WhatsApp API.</li>
                </ul>
              </PlanCard>
            </section>

            {/* 7. Marketing & Growth Strategy */}
            <section className="mb-16">
              <SectionHeader title="7. Marketing & Growth Strategy" icon={TrendingUp} />
              <div className="grid md:grid-cols-2 gap-6">
                <PlanCard title="Social Media">
                  <p className="text-sm">Instagram, Facebook & Twitter campaigns using the handle <strong>@ellylyimo</strong>, focusing on "Behind the Scenes" of food production and quick recipe reels.</p>
                </PlanCard>
                <PlanCard title="Local SEO">
                  <p className="text-sm">Optimizing Google Business Profile for "Morogoro Region" and "Tanzania Food Suppliers".</p>
                </PlanCard>
              </div>
            </section>

            {/* 8. Visual Mockups & Branding */}
            <section className="mb-16">
              <SectionHeader title="8. Visual Mockups & Branding" icon={Palette} />
              <PlanCard title="Hero & Product Photography">
                <p className="text-sm">High-resolution images of fresh Tanzanian produce, vibrant market scenes, and close-ups of finished dishes to evoke appetite and trust.</p>
              </PlanCard>
            </section>

            {/* 9. Launch & Post-Launch Plan */}
            <section className="mb-16">
              <SectionHeader title="9. Launch & Post-Launch Plan" icon={Rocket} />
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 mb-8">
                <TimelineItem 
                  phase="Phase 1: Discovery & Strategy" 
                  duration="Week 1-2" 
                  tasks={['Audience research', 'Keyword mapping', 'Brand style guide finalization']} 
                />
                <TimelineItem 
                  phase="Phase 2: Design & Content" 
                  duration="Week 3-5" 
                  tasks={['UI/UX Design', 'Product photography', 'Copywriting in Swahili & English']} 
                />
                <TimelineItem 
                  phase="Phase 3: Development & Integration" 
                  duration="Week 6-8" 
                  tasks={['CMS Setup', 'WhatsApp/Payment integration', 'Mobile optimization']} 
                />
                <TimelineItem 
                  phase="Phase 4: Launch & Maintenance" 
                  duration="Week 9+" 
                  tasks={['Beta testing', 'Official launch event', 'Monthly security & content updates']} 
                />
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <SectionHeader title="⚡ Core Features" icon={Award} />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Mobile-first Design',
                  'High-Conversion CTAs',
                  'Tanzanian SEO',
                  'WhatsApp Integration',
                  'Payment Gateways',
                  'Social Proof'
                ].map(feature => (
                  <div key={feature} className="p-4 bg-white border border-stone-100 rounded-xl shadow-sm flex items-center gap-2 text-sm font-bold text-stone-700">
                    <CheckCircle2 size={16} className="text-orange-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            {/* Repository & Usage */}
            <section className="mb-16">
              <SectionHeader title="🚀 Project Implementation" icon={Rocket} />
              <div className="grid md:grid-cols-2 gap-6">
                <PlanCard title="How to Use">
                  <ol className="text-sm list-decimal list-inside space-y-2">
                    <li>Clone the repository</li>
                    <li>Follow the implementation plan</li>
                    <li>Customize branding & images</li>
                    <li>Deploy to Netlify/Vercel/cPanel</li>
                  </ol>
                </PlanCard>
                <PlanCard title="Repository Structure">
                  <pre className="text-[10px] bg-stone-50 p-3 rounded-lg border border-stone-200 font-mono">
{`elly-lyimo-website/
├─ assets/      # Images, logos
├─ wireframes/  # Layout designs
├─ content/     # SEO content
├─ code/        # CMS templates
└─ docs/        # Strategy docs`}
                  </pre>
                </PlanCard>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="prototype"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white"
          >
            {/* --- PROTOTYPE WEBSITE --- */}
            
            {/* Header */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
              <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xl">EL</div>
                  <span className={`font-black text-xl tracking-tight ${scrolled ? 'text-stone-900' : 'text-white'}`}>ELLY LYIMO <span className="text-orange-600">GROUP</span></span>
                </div>
                
                <div className="hidden md:flex items-center gap-8">
                  {['Home', 'Products', 'Recipes', 'About', 'Contact'].map(item => (
                    <a key={item} href="#" className={`text-sm font-semibold hover:text-orange-600 transition-colors ${scrolled ? 'text-stone-600' : 'text-white'}`}>{item}</a>
                  ))}
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                    Order Now
                  </button>
                </div>

                <button className="md:hidden text-orange-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  className="fixed inset-0 bg-white z-40 pt-24 px-6"
                >
                  <div className="flex flex-col gap-6 text-center">
                    {['Home', 'Products', 'Recipes', 'About', 'Contact'].map(item => (
                      <a key={item} href="#" className="text-2xl font-bold text-stone-800" onClick={() => setIsMenuOpen(false)}>{item}</a>
                    ))}
                    <button className="bg-orange-600 text-white py-4 rounded-xl text-lg font-bold">Order via WhatsApp</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920" 
                  alt="Tanzanian Food" 
                  className="w-full h-full object-cover brightness-[0.4]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <span className="inline-block px-4 py-1 bg-orange-600 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    Authentic Tanzanian Taste
                  </span>
                  <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6">
                    From Our <span className="text-orange-500 italic">Farms</span> To Your <span className="text-orange-500 italic">Table</span>.
                  </h1>
                  <p className="text-xl text-stone-200 mb-10 max-w-xl leading-relaxed">
                    Elly Lyimo Group brings you the finest organic grains, spices, and heritage foods from the heart of Tanzania.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2 group">
                      Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                      Our Story
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-12 right-6 hidden lg:flex gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
                  <p className="text-3xl font-black">500+</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Local Farmers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Organic Certified</p>
                </div>
              </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-stone-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                    <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Our Collection</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-stone-900">Premium <span className="italic font-serif text-stone-500">Selections</span></h3>
                  </div>
                  <a href="#" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View All Products <ChevronRight size={20} />
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: 'Pure Kilimanjaro Honey', price: 'Tsh 15,000', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800' },
                    { name: 'Organic Highland Rice', price: 'Tsh 25,000', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800' },
                    { name: 'Zanzibar Spice Blend', price: 'Tsh 8,000', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800' },
                  ].map((p, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 group"
                    >
                      <div className="h-64 overflow-hidden relative">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-900">
                          {p.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-stone-900 mb-2">{p.name}</h4>
                        <p className="text-sm text-stone-500 mb-6">Sourced directly from our partner farms in the northern highlands.</p>
                        <button className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                          <ShoppingBag size={18} /> Add to Cart
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* About / Mission */}
            <section className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full z-0" />
                  <img 
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000" 
                    alt="Farmer" 
                    className="relative z-10 rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl z-20 shadow-xl max-w-[240px]">
                    <p className="text-4xl font-black mb-1">10+</p>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Years of Excellence in Tanzanian Food</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Our Story</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">Empowering <span className="text-emerald-600">Communities</span> Through Quality Food.</h3>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    Founded by Elly Lyimo, our group started with a simple mission: to bridge the gap between small-scale Tanzanian farmers and the global market while ensuring local families have access to the most nutritious, organic food possible.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      { icon: Users, title: 'Community First', desc: 'We support over 500 farming families across Tanzania.' },
                      { icon: Utensils, title: 'Heritage Recipes', desc: 'Preserving traditional flavors for the next generation.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-stone-900">{item.title}</p>
                          <p className="text-sm text-stone-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-stone-900 font-black flex items-center gap-2 group">
                    Learn More About Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>

            {/* Recipes / Blog Teaser */}
            <section className="py-24 bg-stone-900 text-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Kitchen Inspiration</h2>
                  <h3 className="text-4xl md:text-5xl font-black">Cook Like a <span className="text-orange-500 italic">Local</span></h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[400px]">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" alt="Recipe" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <span className="bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Healthy Choice</span>
                      <h4 className="text-3xl font-black mb-2">The Ultimate Pilau Guide</h4>
                      <p className="text-stone-300 mb-6">Master the art of Zanzibar spices with our secret family recipe.</p>
                      <button className="flex items-center gap-2 font-bold text-orange-500">Read Recipe <ChevronRight size={20} /></button>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[400px]">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" alt="Recipe" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Quick & Easy</span>
                      <h4 className="text-3xl font-black mb-2">Modern Ugali Bowls</h4>
                      <p className="text-stone-300 mb-6">A nutritious twist on Tanzania's favorite staple food.</p>
                      <button className="flex items-center gap-2 font-bold text-emerald-500">Read Recipe <ChevronRight size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-50 pt-24 pb-12 border-t border-stone-200">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xl">EL</div>
                      <span className="font-black text-xl tracking-tight text-stone-900">ELLY LYIMO <span className="text-orange-600">GROUP</span></span>
                    </div>
                    <p className="text-stone-500 max-w-sm mb-8">
                      Dedicated to bringing the best of Tanzania's agricultural heritage to your home with integrity and passion.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://instagram.com/ellylyimo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-orange-600 hover:text-white transition-all"><Instagram size={20} /></a>
                      <a href="https://facebook.com/ellylyimo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-orange-600 hover:text-white transition-all"><Facebook size={20} /></a>
                      <a href="https://twitter.com/ellylyimo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-orange-600 hover:text-white transition-all"><Twitter size={20} /></a>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
                    <ul className="space-y-4 text-sm text-stone-500">
                      <li><a href="#" className="hover:text-orange-600 transition-colors">Our Products</a></li>
                      <li><a href="#" className="hover:text-orange-600 transition-colors">Recipe Blog</a></li>
                      <li><a href="#" className="hover:text-orange-600 transition-colors">Wholesale Inquiries</a></li>
                      <li><a href="#" className="hover:text-orange-600 transition-colors">Sustainability</a></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-xs">Contact Us</h5>
                    <ul className="space-y-4 text-sm text-stone-500">
                      <li className="flex items-start gap-3"><MapPin size={18} className="text-orange-600 shrink-0" /> Morogoro Region, Tanzania</li>
                      <li className="flex items-center gap-3"><Phone size={18} className="text-orange-600 shrink-0" /> +255 765 809</li>
                      <li className="flex items-center gap-3"><MessageCircle size={18} className="text-orange-600 shrink-0" /> Chat on WhatsApp</li>
                      <li className="flex items-center gap-3 text-xs opacity-80">info@ellylyimogroup.co.tz</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-400 font-medium">
                  <p>© 2026 Elly Lyimo Group. All rights reserved.</p>
                  <div className="flex gap-8">
                    <a href="#" className="hover:text-stone-600">Privacy Policy</a>
                    <a href="#" className="hover:text-stone-600">Terms of Service</a>
                  </div>
                </div>
              </div>
            </footer>

            {/* Sticky WhatsApp CTA */}
            <div className="fixed bottom-24 right-6 z-40">
              <button className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center gap-2 pr-6">
                <div className="bg-white/20 p-1 rounded-full"><MessageCircle size={24} /></div>
                <span className="font-bold">Order on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
