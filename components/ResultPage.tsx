import React, { useState } from 'react';
import { QuizResult, ArchetypeID, ProductRecommendation } from '../types';
import { ARCHETYPES, PRODUCT_MATRIX } from '../constants';
import { Button } from './Button';
import { RefreshCw, Download, Quote, ArrowLeft, Minus } from 'lucide-react';

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
  
  const handleDownloadPDF = () => { window.print(); };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) setSubscribed(true);
  };

  const renderLongText = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => {
      const isHeader = paragraph === paragraph.toUpperCase() && paragraph.length < 80;
      if (isHeader) {
        return (
          <h4 key={idx} className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mt-8 mb-4 pt-4 border-t border-stone-100">
            {paragraph}
          </h4>
        );
      }
      return (
        <p key={idx} className="text-stone-700 text-lg md:text-xl leading-loose font-reading mb-6">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 animate-fade-in font-sans selection:bg-stone-200 text-stone-900 print:bg-white pb-20">
      
      {/* HEADER / COVER */}
      <section className="relative pt-32 pb-24 px-6 bg-stone-50 text-center overflow-hidden">
        {/* Subtle Background */}
        <div className={`absolute inset-0 opacity-[0.05] pointer-events-none bg-gradient-to-b ${archetype.bgGradient}`}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6">Energetic Blueprint</p>
          
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-6 font-light italic">
            {archetype.name}
          </h1>
          
          <div className="w-16 h-px bg-stone-300 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-reading">
            {archetype.description}
          </p>
        </div>
      </section>

      {/* ENERGETIC PILLARS: Meanings + Upsells */}
      <section className="border-y border-stone-200 bg-white py-16 md:py-24 px-6">
         <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-4xl text-stone-900 italic mb-4">Your Energetic Composition</h2>
               <p className="text-stone-500 font-reading max-w-xl mx-auto">The three foundational elements that structure your reality and define your spiritual signature.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-stone-100">
                {/* Chakra */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-4">Chakra Center</span>
                   <h3 className="font-serif text-3xl text-stone-900 mb-4">{archetype.chakra}</h3>
                   <p className="font-reading text-stone-600 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.chakraMeaning}
                   </p>
                   
                   {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-stone-100 pt-8 mt-4">
                      <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-4">Harmonizing Tool</p>
                      <div className="aspect-[4/5] bg-stone-50 relative overflow-hidden mb-4 cursor-pointer">
                         <img 
                           src={archetype.chakraUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.chakraUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-stone-900">{archetype.chakraUpsell.name}</h4>
                      <p className="text-xs text-stone-500 font-reading mt-1">{archetype.chakraUpsell.description}</p>
                   </div>
                </div>

                {/* Element */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-4">Ruling Element</span>
                   <h3 className="font-serif text-3xl text-stone-900 mb-4">{archetype.element}</h3>
                   <p className="font-reading text-stone-600 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.elementMeaning}
                   </p>
                   
                    {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-stone-100 pt-8 mt-4">
                      <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-4">Elemental Tool</p>
                      <div className="aspect-[4/5] bg-stone-50 relative overflow-hidden mb-4 cursor-pointer">
                         <img 
                           src={archetype.elementUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.elementUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-stone-900">{archetype.elementUpsell.name}</h4>
                      <p className="text-xs text-stone-500 font-reading mt-1">{archetype.elementUpsell.description}</p>
                   </div>
                </div>

                {/* Symbol */}
                <div className="flex flex-col items-center text-center px-4 md:px-8 group">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-4">Archetypal Symbol</span>
                   <h3 className="font-serif text-3xl text-stone-900 mb-4">{archetype.symbol}</h3>
                   <p className="font-reading text-stone-600 text-base leading-relaxed mb-8 flex-grow">
                      {archetype.symbolMeaning}
                   </p>
                   
                    {/* Integrated Upsell */}
                   <div className="w-full max-w-[240px] border-t border-stone-100 pt-8 mt-4">
                      <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-4">Symbolic Totem</p>
                      <div className="aspect-[4/5] bg-stone-50 relative overflow-hidden mb-4 cursor-pointer">
                         <img 
                           src={archetype.symbolUpsell.image} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                           alt={archetype.symbolUpsell.name}
                         />
                      </div>
                      <h4 className="font-serif text-xl italic text-stone-900">{archetype.symbolUpsell.name}</h4>
                      <p className="text-xs text-stone-500 font-reading mt-1">{archetype.symbolUpsell.description}</p>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* ANALYSIS CONTENT */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
          
          {/* Insight 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <span className="font-serif text-4xl text-stone-200">I.</span>
               <h3 className="font-serif text-3xl text-stone-900 italic">The Frequency</h3>
            </div>
            <div className="pl-0 md:pl-12">
               {renderLongText(archetype.patternInsight)}
            </div>
          </div>

          {/* Insight 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <span className="font-serif text-4xl text-stone-200">II.</span>
               <h3 className="font-serif text-3xl text-stone-900 italic">The Shadow</h3>
            </div>
            <div className="pl-0 md:pl-12 bg-stone-100/50 p-8 rounded-sm border border-stone-100">
               {renderLongText(archetype.blindSpot)}
            </div>
          </div>

          {/* Diagnosis */}
          <div className="text-center py-12 border-t border-b border-stone-200">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Current Resonance</p>
            <p className="font-reading text-xl md:text-2xl italic text-stone-800 leading-relaxed">
              "Your responses indicate a need for <span className="not-italic font-semibold border-b border-stone-300 pb-0.5">{result.subNeed.replace(/_/g, ' ')}</span> to restore equilibrium."
            </p>
          </div>
      </section>

      {/* MANTRA */}
      <section className="bg-stone-900 text-stone-100 py-24 px-6 text-center">
         <div className="max-w-2xl mx-auto">
            <Quote className="mx-auto mb-8 text-stone-700" size={32} />
            <h3 className="font-serif text-3xl md:text-5xl italic leading-tight mb-8">
              "{archetype.affirmation}"
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Daily Mantra</p>
         </div>
      </section>

      {/* PRIMARY RITUAL TOOL */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">Primary Ritual Anchor</h2>
            <p className="text-stone-500 font-reading">The single most important tool for your current state.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-stone-100 relative overflow-hidden group shadow-xl shadow-stone-200/50">
               <img src={recommendations.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Main Product" />
               <div className="absolute inset-0 border border-stone-900/5 pointer-events-none"></div>
            </div>
            <div className="flex flex-col justify-center">
               <div className="mb-4 flex items-center gap-3">
                  <Minus className="text-stone-300 w-8" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Essential Recommendation</span>
               </div>
               <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 italic">{recommendations.name}</h3>
               <p className="font-reading text-lg text-stone-600 mb-8 leading-relaxed">{recommendations.description}</p>
               <div className="bg-stone-50 p-8 border-l-2 border-stone-800 mb-10">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Prescribed Ritual</p>
                  <p className="text-base font-reading italic text-stone-800">"{recommendations.ritual}"</p>
               </div>
               <button className="px-10 py-5 bg-stone-900 text-stone-50 text-xs uppercase tracking-[0.25em] hover:bg-stone-800 transition-colors w-full md:w-auto self-start">
                  Acquire Anchor
               </button>
            </div>
         </div>
      </section>

      {/* FOOTER ACTIONS */}
      <section className="border-t border-stone-200 py-20 text-center bg-stone-50">
         <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            <button onClick={handleDownloadPDF} className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors flex items-center justify-center gap-3 group">
               <Download size={14} className="group-hover:-translate-y-0.5 transition-transform"/> Save Report
            </button>
            <button onClick={onRetake} className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors flex items-center justify-center gap-3 group">
               <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500"/> Restart Analysis
            </button>
         </div>
         
         {!subscribed ? (
            <div className="max-w-md mx-auto px-6">
              <p className="font-serif text-2xl italic text-stone-900 mb-8">Stay connected to your center.</p>
              <form onSubmit={handleSubscribe} className="flex border-b border-stone-300 pb-2 focus-within:border-stone-900 transition-colors">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-1 bg-transparent outline-none text-stone-900 placeholder:text-stone-400 font-serif"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
                 <button type="submit" className="text-xs uppercase tracking-widest text-stone-900 font-bold hover:text-stone-500 ml-4">
                    Join
                 </button>
              </form>
            </div>
         ) : (
            <p className="text-xs uppercase tracking-widest text-stone-900 animate-fade-in">Welcome to the circle.</p>
         )}
      </section>

    </div>
  );
};