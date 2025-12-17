import React from 'react';
import { Button } from './Button';
import { Minus } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-950 relative overflow-hidden text-stone-100">
      
      {/* Cosmic Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80" 
        style={{ 
          backgroundImage: `url("background.jpg")`,
          filter: 'contrast(1.1) brightness(0.8)'
        }} 
      />
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none"></div>

      {/* Navbar - Ultra Minimal */}
      <nav className="px-8 py-10 flex justify-center items-center relative z-10 animate-fade-in">
        <span className="font-serif text-lg tracking-[0.2em] font-semibold text-white/90 drop-shadow-md">ETHERIA</span>
      </nav>

      {/* Main Content - Centered & Editorial */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 pb-20">
        
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Ornamental Separator */}
          <div className="flex justify-center mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <Minus className="text-stone-400 w-12" strokeWidth={1} />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[1.1] mb-8 animate-slide-up opacity-0 font-light drop-shadow-2xl" style={{ animationDelay: '0.4s' }}>
            The energy you <br />
            <span className="italic text-stone-300">are missing.</span>
          </h1>

          {/* Subheadline - Slow Reading */}
          <p className="font-reading text-lg md:text-xl text-stone-200 leading-relaxed max-w-md mx-auto mb-16 animate-slide-up opacity-0 drop-shadow-lg" style={{ animationDelay: '0.6s' }}>
            You are not broken. You are simply out of alignment. Discover your Archetype in a quiet moment of reflection.
          </p>

          {/* CTA - Minimalist & Centered */}
          <div className="animate-slide-up opacity-0 flex justify-center" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={onStart} 
              className="group relative px-12 py-4 overflow-hidden rounded-full bg-white text-stone-950 transition-all duration-700 ease-out hover:bg-stone-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.25em] font-medium group-hover:tracking-[0.35em] transition-all duration-700">
                Take Quiz
              </span>
            </button>
          </div>
        </div>

      </section>

      {/* Footer - Philosophy */}
      <div className="relative z-10 py-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Internal Architecture Analysis &copy; 2024
        </p>
      </div>
    </div>
  );
};