import React, { useState } from 'react';
import { QuizResult, ArchetypeID, ProductRecommendation } from '../types';
import { ARCHETYPES, PRODUCT_MATRIX } from '../constants';
import { Button } from './Button';
import { RefreshCw, Download, Star, Shield, Zap, Heart, Wind, Quote, ArrowDown, Sparkles, CircleDot, Mountain, Hexagon, Flame, Droplets, Orbit, ArrowRight, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check, Mail } from 'lucide-react';

interface ResultPageProps {
  result: QuizResult;
  onRetake: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ result, onRetake }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const archetype = ARCHETYPES[result.archetype];
  const recommendations = PRODUCT_MATRIX[result.archetype][result.subNeed] || 
                          PRODUCT_MATRIX[result.archetype]['protection']; 
  
  const allProducts = Object.values(PRODUCT_MATRIX[result.archetype]) as ProductRecommendation[];
  
  const supportive1 = allProducts.find(p => p.id !== recommendations.id && p.type === 'Supportive');
  const supportive2 = [...allProducts].reverse().find(p => p.id !== recommendations.id && p.id !== supportive1?.id && p.type === 'Supportive');

  // Helper: Download PDF (Trigger Native Print)
  const handleDownloadPDF = () => {
    window.print();
  };

  // Helper: Handle Social Share
  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const text = `I discovered my energy archetype is ${archetype.name}. Find yours at Etheria.`;
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
      return;
    }

    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(links[platform], '_blank', 'width=600,height=400');
  };

  // Helper: Footer Email Subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      // In a real app, send to API here
    }
  };

  // Helper to render long text with line breaks as paragraphs
  const renderLongText = (text: string, isDark: boolean = false) => {
    return text.split('\n\n').map((paragraph, idx) => {
      // Check for ALL CAPS headers in text (a simple convention used in constants)
      // Headers are usually short, e.g. "PATTERN I — THE FREQUENCY"
      const isHeader = paragraph === paragraph.toUpperCase() && paragraph.length < 80;
      
      if (isHeader) {
        return (
          <h4 key={idx} className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-stone-500' : 'text-stone-400'} mt-8 mb-3 pt-2 text-left`}>
            {paragraph}
          </h4>
        );
      }
      return (
        <p key={idx} className={`${isDark ? 'text-stone-800' : 'text-stone-600'} text-lg md:text-xl leading-8 font-reading mb-6 text-justify`}>
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 animate-fade-in font-sans selection:bg-stone-200 text-stone-900 print:bg-white">
      
      {/* =========================================
          PHASE 1: THE DIAGNOSIS
      ========================================= */}

      {/* --- CHAPTER 1: IDENTITY (Hero + Specs) --- */}
      <section className="relative pt-20 pb-12 px-6 bg-white rounded-b-[2rem] shadow-sm z-10 overflow-hidden print:shadow-none print:rounded-none">
        
        {/* Subtle Ambient Gradient based on Archetype */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${archetype.bgGradient} opacity-[0.06] pointer-events-none`} />
        
        {/* Central Glow Effect */}
        <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[70%] h-[500px] bg-gradient-to-b ${archetype.bgGradient} opacity-[0.1] blur-[100px] rounded-full pointer-events-none`} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block border border-stone-200/60 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full mb-6">
            <p className="text-stone-500 uppercase tracking-[0.2em] text-[10px] font-bold">Personal Energetic Blueprint</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4 tracking-tight leading-none font-medium">
            {archetype.name}
          </h1>
          
          <p className="text-xl md:text-3xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-reading italic mb-8">
            "{archetype.description}"
          </p>

          {/* Cross-System Specs */}
          <div className="grid grid-cols-3 border-t border-stone-200/50 pt-6 max-w-2xl mx-auto relative">
            <div className="flex flex-col items-center gap-2 border-r border-stone-200/50">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Chakra</span>
              <span className="font-serif text-xl text-stone-900 font-medium">{archetype.chakra}</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-r border-stone-200/50">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Element</span>
              <span className="font-serif text-xl text-stone-900 font-medium">{archetype.element}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Symbol</span>
              <span className="font-serif text-xl text-stone-900 font-medium">{archetype.symbol}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 2: DIAGNOSIS (Pattern + Block) --- */}
      <section className="bg-stone-50 py-16 px-6 print:bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Phase I — Diagnosis</span>
          </div>

          {/* Section 1: The Light / Pattern */}
          <div className="mb-10 relative bg-white p-8 md:p-12 shadow-lg shadow-stone-200/50 border border-stone-100 rounded-sm print:shadow-none print:border-stone-200">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 border border-stone-200 text-stone-900 px-5 py-2 text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-sm">
               <Zap size={14} className="text-stone-500" /> The Energy Frequency
            </div>

            <div className="max-w-none text-left pt-4">
              {renderLongText(archetype.patternInsight, true)}
            </div>
          </div>

          <div className="w-full h-px bg-stone-200 mb-10"></div>

          {/* Section 2: The Shadow / Block */}
          <div className="relative bg-white p-8 md:p-12 shadow-lg shadow-stone-200/50 border border-stone-100 rounded-sm print:shadow-none print:border-stone-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-stone-50 px-5 py-2 text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-md print:bg-white print:text-stone-900 print:border print:border-stone-900">
               <Sparkles size={14} /> The Energetic Block
            </div>
            
            <div className="max-w-none pt-4">
              {renderLongText(archetype.blindSpot, false)}
            </div>
          </div>

          {/* Section 3: Why This Report Resonates */}
          <div className="mt-12 text-center max-w-2xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-stone-300"></span>
              Why This Report Resonates
              <span className="w-8 h-px bg-stone-300"></span>
            </h4>
            <p className="text-stone-600 font-reading text-lg leading-relaxed italic">
              "Based on your responses regarding emotional sensitivity and self-care preferences, your current dominant energetic need is <span className="text-stone-900 font-semibold not-italic capitalize">{result.subNeed.replace(/_/g, ' ')}</span>."
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          PHASE 2: THE ALIGNMENT (Path Forward)
      ========================================= */}

      {/* --- CHAPTER 3: ROADMAP --- */}
      <section className="bg-white py-16 px-6 border-t border-stone-100 print:border-none">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold block mb-4">Phase II — Alignment</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-3">The Path Forward</h2>
            <p className="text-stone-600 font-reading italic">Three phases to return to your center.</p>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100 border border-stone-100 shadow-sm print:shadow-none print:border-stone-200">
            <div className="p-6 hover:bg-stone-50 transition-colors duration-500 group">
               <span className="block text-4xl font-serif text-stone-300 group-hover:text-stone-400 transition-colors mb-3">I</span>
               <h3 className="text-xs font-bold uppercase tracking-widest text-primary-dark mb-2">Immediate Focus</h3>
               <p className="text-lg font-serif text-stone-900 mb-2 capitalize font-medium">{result.subNeed.replace(/_/g, ' ')}</p>
               <p className="text-sm text-stone-600 leading-relaxed font-reading text-justify">Stabilize your energy by addressing this acute need first.</p>
            </div>
            
            <div className="p-6 hover:bg-stone-50 transition-colors duration-500 group">
               <span className="block text-4xl font-serif text-stone-300 group-hover:text-stone-400 transition-colors mb-3">II</span>
               <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Secondary Phase</h3>
               <p className="text-lg font-serif text-stone-900 mb-2 font-medium">Protection</p>
               <p className="text-sm text-stone-600 leading-relaxed font-reading text-justify">Build resilience and boundaries once your core is stable.</p>
            </div>

            <div className="p-6 hover:bg-stone-50 transition-colors duration-500 group">
               <span className="block text-4xl font-serif text-stone-300 group-hover:text-stone-400 transition-colors mb-3">III</span>
               <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Integration</h3>
               <p className="text-lg font-serif text-stone-900 mb-2 font-medium">Expansion</p>
               <p className="text-sm text-stone-600 leading-relaxed font-reading text-justify">Move from healing to thriving and creative manifestation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 4: MANTRA (Bridge) --- */}
      <section className="py-20 px-6 bg-stone-900 text-stone-50 text-center relative overflow-hidden print:bg-white print:text-stone-900 print:border-y print:border-stone-300">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Quote className="text-stone-600 mx-auto mb-8 opacity-50" size={32} />
          <h3 className="text-2xl md:text-4xl font-reading leading-tight mb-8 text-stone-100 print:text-stone-900">
            {archetype.affirmation}
          </h3>
          <div className="w-12 h-px bg-stone-700 mx-auto mb-4 print:bg-stone-300"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Your Personal Mantra</p>
        </div>
      </section>

      {/* --- CHAPTER 5: RITUAL KIT --- */}
      <section className="py-12 px-6 bg-white no-print">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">Your Ritual Kit</h2>
            <p className="text-lg text-stone-600 font-reading italic">Sacred tools to anchor your {archetype.name} frequency.</p>
          </div>

          {/* PART A: ELEMENTAL FOUNDATIONS */}
          <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 text-center md:text-left">The Foundations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1: Chakra */}
              <div className="bg-stone-50 rounded-sm border border-stone-100 flex flex-col h-full group hover:shadow-md transition-shadow duration-500 overflow-hidden">
                 <div className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-primary-dark">
                      <div className="p-2 bg-white rounded-full border border-stone-100">
                         <CircleDot size={18} />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-widest">{archetype.chakra}</h3>
                    </div>
                    <p className="text-stone-700 font-reading leading-relaxed text-justify text-sm">
                      {archetype.chakraMeaning}
                    </p>
                 </div>
                 
                 {/* Upsell - Redesigned */}
                 <div className="px-6 pb-6 mt-auto">
                    <div className="w-full aspect-[4/3] bg-white border border-stone-100 mb-4 overflow-hidden rounded-sm">
                       <img src={archetype.chakraUpsell.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={archetype.chakraUpsell.name} />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-lg text-stone-900 leading-tight mb-3">{archetype.chakraUpsell.name}</p>
                       <Button variant="outline" fullWidth className="py-2 text-[10px] uppercase tracking-wider h-auto border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900">
                         Explore Tool
                       </Button>
                    </div>
                 </div>
              </div>

              {/* Card 2: Element */}
              <div className="bg-stone-50 rounded-sm border border-stone-100 flex flex-col h-full group hover:shadow-md transition-shadow duration-500 overflow-hidden">
                 <div className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-stone-600">
                      <div className="p-2 bg-white rounded-full border border-stone-100">
                         <Droplets size={18} />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-widest">{archetype.element}</h3>
                    </div>
                    <p className="text-stone-700 font-reading leading-relaxed text-justify text-sm">
                      {archetype.elementMeaning}
                    </p>
                 </div>
                 
                 {/* Upsell - Redesigned */}
                 <div className="px-6 pb-6 mt-auto">
                    <div className="w-full aspect-[4/3] bg-white border border-stone-100 mb-4 overflow-hidden rounded-sm">
                       <img src={archetype.elementUpsell.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={archetype.elementUpsell.name} />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-lg text-stone-900 leading-tight mb-3">{archetype.elementUpsell.name}</p>
                       <Button variant="outline" fullWidth className="py-2 text-[10px] uppercase tracking-wider h-auto border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900">
                         Explore Tool
                       </Button>
                    </div>
                 </div>
              </div>

              {/* Card 3: Symbol */}
              <div className="bg-stone-50 rounded-sm border border-stone-100 flex flex-col h-full group hover:shadow-md transition-shadow duration-500 overflow-hidden">
                 <div className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-stone-600">
                      <div className="p-2 bg-white rounded-full border border-stone-100">
                         <Orbit size={18} />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-widest">{archetype.symbol}</h3>
                    </div>
                    <p className="text-stone-700 font-reading leading-relaxed text-justify text-sm">
                      {archetype.symbolMeaning}
                    </p>
                 </div>
                 
                 {/* Upsell - Redesigned */}
                 <div className="px-6 pb-6 mt-auto">
                    <div className="w-full aspect-[4/3] bg-white border border-stone-100 mb-4 overflow-hidden rounded-sm">
                       <img src={archetype.symbolUpsell.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={archetype.symbolUpsell.name} />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-lg text-stone-900 leading-tight mb-3">{archetype.symbolUpsell.name}</p>
                       <Button variant="outline" fullWidth className="py-2 text-[10px] uppercase tracking-wider h-auto border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900">
                         Explore Tool
                       </Button>
                    </div>
                 </div>
              </div>

            </div>
          </div>

          {/* PART B: PERSONALIZED ANCHOR */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 text-center md:text-left">Your Daily Prescription</h3>
            <div className="relative border border-stone-100 bg-stone-900 text-stone-50 p-6 md:p-10 shadow-2xl">
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-full md:w-1/2 aspect-[4/3] bg-stone-800 overflow-hidden shadow-inner relative group border border-stone-700">
                    <img src={recommendations.image} alt={recommendations.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 text-xs font-serif italic border border-white/10 text-white">
                      Primary Anchor
                    </div>
                 </div>
                 
                 <div className="w-full md:w-1/2 flex flex-col h-full">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{recommendations.name}</h3>
                    <p className="text-stone-300 font-reading text-lg leading-relaxed mb-6 text-justify">
                      {recommendations.description}
                    </p>
                    
                    <div className="bg-stone-800/50 p-6 border-l-2 border-stone-500 mb-6">
                       <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Ritual Application</p>
                       <p className="text-stone-200 font-reading italic">"{recommendations.ritual}"</p>
                    </div>
                    
                    <div className="mb-6">
                       <Button variant="secondary" className="w-full md:w-auto px-10 border-none bg-white text-stone-900 hover:bg-stone-200">
                         Shop This Anchor
                       </Button>
                    </div>
                       
                     {/* Supportive Text Links - Redesigned as Cards */}
                     {(supportive1 || supportive2) && (
                        <div className="pt-8 mt-auto border-t border-stone-800/50">
                           <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-4 font-bold">Pair With</p>
                           <div className="grid grid-cols-2 gap-4">
                             {supportive1 && (
                               <div className="group cursor-pointer bg-stone-800/30 p-3 rounded-sm hover:bg-stone-800/60 transition-colors">
                                  <div className="aspect-square bg-stone-800 border border-stone-700 mb-3 overflow-hidden rounded-sm relative">
                                      <img src={supportive1.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                  </div>
                                  <p className="text-stone-200 font-serif text-sm mb-3 leading-tight min-h-[2.5em]">{supportive1.name}</p>
                                  <Button variant="outline" fullWidth className="py-2 text-[10px] uppercase tracking-wider h-auto border-stone-600 text-stone-400 hover:text-white hover:border-white bg-transparent">
                                     Explore
                                  </Button>
                               </div>
                             )}
                             {supportive2 && (
                               <div className="group cursor-pointer bg-stone-800/30 p-3 rounded-sm hover:bg-stone-800/60 transition-colors">
                                  <div className="aspect-square bg-stone-800 border border-stone-700 mb-3 overflow-hidden rounded-sm relative">
                                      <img src={supportive2.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                  </div>
                                  <p className="text-stone-200 font-serif text-sm mb-3 leading-tight min-h-[2.5em]">{supportive2.name}</p>
                                  <Button variant="outline" fullWidth className="py-2 text-[10px] uppercase tracking-wider h-auto border-stone-600 text-stone-400 hover:text-white hover:border-white bg-transparent">
                                     Explore
                                  </Button>
                               </div>
                             )}
                           </div>
                        </div>
                     )}
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SOCIAL SHARE & DOWNLOAD --- */}
      <section className="py-16 px-6 bg-stone-50 no-print border-t border-stone-200">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <h3 className="font-serif text-2xl text-stone-900 mb-2">Share Your Frequency</h3>
               <p className="text-stone-500 font-reading italic text-sm">Inspire others to find their center.</p>
            </div>
            
            <div className="flex items-center gap-4">
               <button onClick={() => handleShare('facebook')} className="p-3 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all">
                  <Facebook size={20} />
               </button>
               <button onClick={() => handleShare('twitter')} className="p-3 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all">
                  <Twitter size={20} />
               </button>
               <button onClick={() => handleShare('linkedin')} className="p-3 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all">
                  <Linkedin size={20} />
               </button>
               <button onClick={() => handleShare('copy')} className="p-3 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all relative">
                  {linkCopied ? <Check size={20} className="text-green-600"/> : <LinkIcon size={20} />}
               </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-16 px-6 border-t border-stone-200 bg-white no-print">
        <div className="max-w-md mx-auto text-center">
            
            {/* Email Capture (Footer) */}
            {!result.email && !subscribed && (
              <div className="mb-12 bg-stone-50 p-8 rounded-sm border border-stone-100">
                <div className="flex items-center justify-center gap-2 mb-4 text-stone-400">
                   <Mail size={16} />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Stay Aligned</span>
                </div>
                <h4 className="font-serif text-xl text-stone-900 mb-2">Receive Monthly Rituals</h4>
                <p className="text-stone-500 text-sm mb-6 font-reading">Deepen your practice with seasonal guidance tailored to {archetype.name}.</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white border border-stone-200 px-4 py-2 text-sm outline-none focus:border-stone-400 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="px-6 py-2 text-xs uppercase tracking-wider">Join</Button>
                </form>
              </div>
            )}
            
            {subscribed && (
               <div className="mb-12 bg-stone-50 p-6 rounded-sm border border-stone-100 flex flex-col items-center">
                  <Check size={24} className="text-stone-400 mb-2" />
                  <p className="text-stone-900 font-serif italic">You are subscribed. Welcome.</p>
               </div>
            )}

            <p className="font-reading text-xl text-stone-900 mb-8 italic">"Begin your rebalancing journey today."</p>
            <Button variant="primary" fullWidth className="py-4 text-sm tracking-widest uppercase font-bold">
                Shop Your Full Ritual
            </Button>
            <div className="mt-8 flex flex-col items-center gap-4 text-xs text-stone-500 font-sans font-medium">
              <button onClick={handleDownloadPDF} className="flex items-center gap-2 hover:text-stone-900 transition-colors uppercase tracking-wider">
                  <Download size={14} /> Download Report PDF
              </button>
              <button onClick={onRetake} className="flex items-center gap-2 hover:text-stone-900 transition-colors uppercase tracking-wider">
                  <RefreshCw size={14} /> Restart Assessment
              </button>
            </div>
             <p className="mt-8 text-[9px] text-stone-400 uppercase tracking-widest">For self-reflection only. Not medical advice.</p>
        </div>
      </section>

    </div>
  );
};