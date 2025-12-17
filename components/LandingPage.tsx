import React from 'react';
import { Button } from './Button';
import { Sparkles, Activity, Fingerprint, ArrowRight, Star } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 overflow-hidden relative">
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Ethereal Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-white/40 to-stone-50/90"></div>
      </div>
      
      {/* Navbar */}
      <nav className="px-8 py-8 flex justify-between items-center relative z-10 animate-fade-in">
        <div className="flex items-center gap-2">
           {/* Minimal logo mark */}
           <div className="w-3 h-3 bg-stone-900 rotate-45"></div>
           <span className="font-serif text-xl tracking-[0.1em] font-semibold text-stone-900">ETHERIA</span>
        </div>
        <div className="hidden md:block">
           <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-stone-400">Holistic Energy Diagnostic</span>
        </div>
      </nav>

      {/* Main Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 py-12 md:py-0">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow */}
          <div className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
             <span className="inline-block py-1 px-3 border border-stone-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-stone-500 bg-white/80 backdrop-blur-sm shadow-sm">
                Internal Architecture Analysis
             </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-6xl md:text-9xl text-stone-900 leading-[0.9] mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            The energy you <br />
            <span className="italic font-light text-stone-500">are missing.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-reading text-lg md:text-2xl text-stone-600 italic max-w-xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            "You are not broken. You are simply out of alignment." <br/>
            <span className="text-base text-stone-400 not-italic mt-2 block font-sans">Discover your Archetype in 2 minutes.</span>
          </p>

          {/* CTA */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button onClick={onStart} className="px-12 py-5 text-sm uppercase tracking-[0.15em] font-bold shadow-xl shadow-stone-200/50 hover:shadow-stone-300/50 transition-all duration-500 hover:-translate-y-1 bg-stone-900 text-stone-50 border-stone-900">
              Begin Assessment
            </Button>
          </div>
        </div>

      </section>

      {/* Trust/Philosophy Footer */}
      <div className="border-t border-stone-200 bg-white/60 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
           
           <div className="flex gap-4 items-start group">
              <div className="p-3 bg-stone-100/80 rounded-full text-stone-600 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors duration-500">
                <Fingerprint size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-900 mb-2">Soul Signature</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-medium uppercase tracking-wide">Not a personality test. <br/>This is an energetic reading.</p>
              </div>
           </div>

           <div className="flex gap-4 items-start group">
              <div className="p-3 bg-stone-100/80 rounded-full text-stone-600 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors duration-500">
                <Activity size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-900 mb-2">Current Resonance</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-medium uppercase tracking-wide">Identifies your needs <br/>in this specific season of life.</p>
              </div>
           </div>

           <div className="flex gap-4 items-start group">
              <div className="p-3 bg-stone-100/80 rounded-full text-stone-600 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors duration-500">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-900 mb-2">Ritual Curation</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-medium uppercase tracking-wide">Receive a personalized <br/>toolkit for rebalancing.</p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};