import React, { useState, useRef } from 'react';
import { QuizResult, ArchetypeID, ProductRecommendation } from '../types';
import { ARCHETYPES, PRODUCT_MATRIX } from '../constants';
import { Button } from './Button';
import { RefreshCw, Download, Quote, ArrowDown, Minus, Plus, Sparkles, Check, ArrowRight, Star } from 'lucide-react';

interface ResultPageProps {
  result: QuizResult;
  onRetake: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ result, onRetake }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  // Ref for the product section to scroll to
  const productSectionRef = useRef<HTMLDivElement>(null);

  const archetype = ARCHETYPES[result.archetype];
  const recommendations = PRODUCT_MATRIX[result.archetype][result.subNeed] || 
                          PRODUCT_MATRIX[result.archetype]['protection']; 
  
  // --- Price Calculation Logic ---
  const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  
  const mainPrice = parsePrice(recommendations.price);
  const upsellTotal = recommendations.upsells 
    ? recommendations.upsells.reduce((acc, item) => acc + parsePrice(item.price), 0) 
    : 0;
  
  const totalValue = mainPrice + upsellTotal;
  const bundlePrice = Math.floor(totalValue * 0.85); // 15% Discount
  const savings = totalValue - bundlePrice;

  const handleDownloadPDF = () => { window.print(); };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) setSubscribed(true);
  };

  const scrollToProduct = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderLongText = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => {
      const isHeader = paragraph === paragraph.toUpperCase() && paragraph.length < 80;
      if (isHeader) {
        return (
          <h4 key={idx} className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mt-8 mb-4 pt-4 border-t border-white/10">
            {paragraph}
          </h4>
        );
      }
      return (
        <p key={idx} className="text-stone-300 text-lg md:text-xl leading-loose font-reading mb-6">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-stone-700 selection:text-white text-stone-100 print:bg-white print:text-black pb-20 overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none" 
        style={{ 
          backgroundImage: `url("background.jpg")`,
          filter: 'contrast(1.1) brightness(0.6)'
        }} 
      />
      <div className="fixed inset-0 z-0 bg-stone-950/40 pointer-events-none"></div>

      {/* HEADER / COVER */}
      <section className="relative pt-32 pb-24 px-6 text-center z-10">
        
        <div className="max-w-4xl mx-auto relative">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-6">Energetic Blueprint</p>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 font-light italic drop-shadow-xl">
            {archetype.name}
          </h1>
          
          <div className="w-16 h-px bg-stone-500 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-2xl mx-auto font-reading mb-10 drop-shadow-md">
            {archetype.description}
          </p>

          {/* NEW HIGH CONVERSION BUTTON */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToProduct}
              className="group flex items-center gap-4 bg-white text-stone-950 px-8 py-4 rounded-full hover:bg-stone-200 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-1"
            >
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore Your Curated Anchor</span>
              <ArrowDown size={16} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ENERGETIC PILLARS: Meanings + Upsells */}
      <section className="border-y border-white/10 bg-black/20 backdrop-blur-sm py-16 md:py-24 px-6 relative z-10">
         <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-4">Your Energetic Composition</h2>
               <p className="text-stone-400 font-reading max-w-xl mx-auto">The three foundational elements that structure your reality and define your spiritual signature.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-white/10">
                {/* Chakra */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-semibold mb-4">Chakra Center</span>
                   <h3 className="font-serif text-3xl text-white mb-4">{archetype.chakra}</h3>
                   <p className="font-reading text-stone-300 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.chakraMeaning}
                   </p>
                   
                   {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-white/10 pt-8 mt-4">
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Harmonizing Tool</p>
                      <div className="aspect-square bg-white/5 relative overflow-hidden mb-4 cursor-pointer rounded-sm border border-white/5">
                         <img 
                           src={archetype.chakraUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.chakraUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-white">{archetype.chakraUpsell.name}</h4>
                      <p className="text-xs text-stone-400 font-reading mt-1 leading-relaxed">{archetype.chakraUpsell.description}</p>
                   </div>
                </div>

                {/* Element */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-semibold mb-4">Ruling Element</span>
                   <h3 className="font-serif text-3xl text-white mb-4">{archetype.element}</h3>
                   <p className="font-reading text-stone-300 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.elementMeaning}
                   </p>
                   
                    {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-white/10 pt-8 mt-4">
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Elemental Tool</p>
                      <div className="aspect-square bg-white/5 relative overflow-hidden mb-4 cursor-pointer rounded-sm border border-white/5">
                         <img 
                           src={archetype.elementUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.elementUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-white">{archetype.elementUpsell.name}</h4>
                      <p className="text-xs text-stone-400 font-reading mt-1 leading-relaxed">{archetype.elementUpsell.description}</p>
                   </div>
                </div>

                {/* Symbol */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-semibold mb-4">Archetypal Symbol</span>
                   <h3 className="font-serif text-3xl text-white mb-4">{archetype.symbol}</h3>
                   <p className="font-reading text-stone-300 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.symbolMeaning}
                   </p>
                   
                    {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-white/10 pt-8 mt-4">
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Symbolic Totem</p>
                      <div className="aspect-square bg-white/5 relative overflow-hidden mb-4 cursor-pointer rounded-sm border border-white/5">
                         <img 
                           src={archetype.symbolUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.symbolUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-white">{archetype.symbolUpsell.name}</h4>
                      <p className="text-xs text-stone-400 font-reading mt-1 leading-relaxed">{archetype.symbolUpsell.description}</p>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* ANALYSIS CONTENT */}
      <section className="py-20 px-6 max-w-3xl mx-auto relative z-10">
          {/* Insight 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <span className="font-serif text-4xl text-stone-500">I.</span>
               <h3 className="font-serif text-3xl text-white italic">The Frequency</h3>
            </div>
            <div className="pl-0 md:pl-12">
               {renderLongText(archetype.patternInsight)}
            </div>
          </div>

          {/* Insight 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <span className="font-serif text-4xl text-stone-500">II.</span>
               <h3 className="font-serif text-3xl text-white italic">The Shadow</h3>
            </div>
            <div className="pl-0 md:pl-12 bg-white/5 p-8 rounded-sm border border-white/10">
               {renderLongText(archetype.blindSpot)}
            </div>
          </div>

          {/* Diagnosis */}
          <div className="text-center py-12 border-t border-b border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-4">Current Resonance</p>
            <p className="font-reading text-xl md:text-2xl italic text-stone-200 leading-relaxed">
              "Your responses indicate a need for <span className="not-italic font-semibold border-b border-stone-500 pb-0.5">{result.subNeed.replace(/_/g, ' ')}</span> to restore equilibrium."
            </p>
          </div>
      </section>

      {/* MANTRA */}
      <section className="bg-black/40 backdrop-blur-md py-24 px-6 text-center relative z-10 border-y border-white/5">
         <div className="max-w-2xl mx-auto">
            <Quote className="mx-auto mb-8 text-stone-600" size={32} />
            <h3 className="font-serif text-3xl md:text-5xl italic leading-tight mb-8 text-white drop-shadow-lg">
              "{archetype.affirmation}"
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Daily Mantra</p>
         </div>
      </section>

      {/* PRIMARY RITUAL ANCHOR */}
      <section ref={productSectionRef} className="py-24 px-6 max-w-7xl mx-auto scroll-mt-10 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: Main Image (Sticky) */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
               <div className="relative aspect-[4/5] bg-stone-900 overflow-hidden shadow-2xl shadow-black/50 group rounded-sm border border-white/10">
                  <img 
                    src={recommendations.image} 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                    alt={recommendations.name} 
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                  
                  {/* Floating 'Primary' Tag */}
                  <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/20">
                     <span className="text-[10px] uppercase tracking-widest text-white font-bold flex items-center gap-2">
                       <Star size={10} fill="currentColor" /> Primary Anchor
                     </span>
                  </div>
               </div>
            </div>

            {/* RIGHT COLUMN: Details + Upsells + Bundle */}
            <div className="lg:col-span-6 flex flex-col">
               
               {/* 1. MAIN PRODUCT DETAILS */}
               <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="h-px w-12 bg-stone-500"></div>
                     <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Essential Recommendation</span>
                  </div>
                  
                  <h2 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-[0.9] italic drop-shadow-lg">
                    {recommendations.name}
                  </h2>
                  
                  <div className="flex items-baseline gap-4 mb-8">
                     <span className="font-serif text-3xl text-stone-200">{recommendations.price}</span>
                     <span className="text-xs uppercase tracking-widest text-green-400 bg-green-900/30 border border-green-800 px-2 py-1">In Stock</span>
                  </div>

                  <p className="font-reading text-lg text-stone-300 mb-8 leading-relaxed">
                    {recommendations.description}
                  </p>
                  
                  <div className="bg-white/5 p-6 border-l-2 border-stone-500 mb-10">
                     <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Prescribed Ritual</p>
                     <p className="text-base font-reading italic text-stone-200">"{recommendations.ritual}"</p>
                  </div>

                  <button className="w-full md:w-auto px-12 py-4 border border-white text-white text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all flex items-center justify-center gap-3 group">
                     Add to Cart <Plus size={14} className="group-hover:rotate-90 transition-transform" />
                  </button>
               </div>

               {/* 2. PAIRS WITH (Integrated) */}
               {recommendations.upsells && recommendations.upsells.length > 0 && (
                 <div className="animate-fade-in mb-12 pt-12 border-t border-white/10">
                    <div className="flex items-center justify-between mb-8">
                       <span className="font-serif text-2xl italic text-stone-200">Perfectly Pairs With</span>
                       <span className="text-[10px] uppercase tracking-widest text-stone-500">Complete the Circuit</span>
                    </div>

                    <div className="space-y-6">
                       {recommendations.upsells.map((item, idx) => (
                          <div key={idx} className="flex gap-5 items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors border border-transparent hover:border-white/5">
                             {/* Thumbnail */}
                             <div className="w-20 h-20 shrink-0 bg-stone-800 overflow-hidden relative rounded-sm shadow-sm border border-white/5">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                             </div>
                             
                             {/* Info */}
                             <div className="flex-1">
                                <h4 className="font-serif text-lg text-white leading-tight mb-1 group-hover:text-stone-300 transition-colors">
                                  {item.name}
                                </h4>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-reading text-stone-400">{item.price}</span>
                                  <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Item</span>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
               )}

               {/* 3. HIGH CONVERSION BUNDLE CARD (Starry Background) */}
               {recommendations.upsells && recommendations.upsells.length > 0 && (
                   <div className="relative rounded-sm overflow-hidden shadow-2xl group transform hover:-translate-y-1 transition-all duration-500 border border-white/10">
                      
                      {/* Background Image (Starry Constellation Effect) */}
                      <div 
                         className="absolute inset-0 bg-cover bg-center transition-transform duration-[4s] group-hover:scale-105"
                         style={{ 
                            backgroundImage: `url('background.jpg')`,
                            filter: 'brightness(0.8) contrast(1.1)'
                         }}
                      />
                      
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
                      
                      <div className="relative z-10 p-8 md:p-10">
                          {/* Header */}
                          <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-6">
                              <div>
                                  <div className="flex items-center gap-2 mb-2">
                                      <Sparkles size={14} className="text-amber-300 animate-pulse" />
                                      <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200 font-bold">Divine Alignment Set</span>
                                  </div>
                                  <h3 className="font-serif text-3xl md:text-4xl italic text-white mb-2">The Complete Ritual</h3>
                                  <p className="text-stone-300 font-reading text-xs md:text-sm max-w-xs">
                                    Unlock your full potential. Includes the {recommendations.name} + {recommendations.upsells.length} harmonizers.
                                  </p>
                              </div>
                          </div>

                          {/* Price & CTA */}
                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                              <div>
                                  <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">Total Bundle Value</p>
                                  <div className="flex items-baseline gap-3">
                                    <span className="text-stone-500 line-through text-lg">${totalValue}</span>
                                    <span className="font-serif text-4xl md:text-5xl text-white italic">${bundlePrice}</span>
                                  </div>
                                  <div className="inline-flex items-center gap-2 mt-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                      <span className="text-[10px] uppercase tracking-widest text-white font-bold">You Save ${savings} (15%)</span>
                                  </div>
                              </div>

                              <button className="flex-1 md:flex-none bg-white hover:bg-amber-50 text-stone-950 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 group/btn">
                                  Claim Full Bundle <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                          </div>
                      </div>
                   </div>
               )}

            </div>
         </div>
      </section>

      {/* FOOTER ACTIONS */}
      <section className="border-t border-white/10 py-20 text-center bg-black/40 relative z-10">
         <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            <button onClick={handleDownloadPDF} className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors flex items-center justify-center gap-3 group">
               <Download size={14} className="group-hover:-translate-y-0.5 transition-transform"/> Save Report
            </button>
            <button onClick={onRetake} className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors flex items-center justify-center gap-3 group">
               <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500"/> Restart Analysis
            </button>
         </div>
         
         {!subscribed ? (
            <div className="max-w-md mx-auto px-6">
              <p className="font-serif text-2xl italic text-white mb-8">Stay connected to your center.</p>
              <form onSubmit={handleSubscribe} className="flex border-b border-stone-500 pb-2 focus-within:border-white transition-colors">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-1 bg-transparent outline-none text-white placeholder:text-stone-500 font-serif"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
                 <button type="submit" className="text-xs uppercase tracking-widest text-white font-bold hover:text-stone-300 ml-4">
                    Join
                 </button>
              </form>
            </div>
         ) : (
            <p className="text-xs uppercase tracking-widest text-white animate-fade-in">Welcome to the circle.</p>
         )}
      </section>

    </div>
  );
};