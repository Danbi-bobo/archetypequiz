import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS } from '../constants';
import { ArchetypeID, SubNeedID, QuizResult } from '../types';
import { calculateArchetype, calculateSubNeed } from '../utils/quizLogic';
import { ArrowLeft, Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from './Button';

interface QuizProps {
  onComplete: (result: QuizResult) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; optionId: string; mapsTo?: SubNeedID }[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Audio State
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Email Capture State
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Initialize Audio
  useEffect(() => {
    // Ambient track: "Relaxing Ambient"
    const audioUrl = "https://cdn.pixabay.com/audio/2022/10/05/audio_68629b35db.mp3"; 
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    // Attempt to play automatically
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Auto-play prevented by browser. User must interact first.");
        setIsMuted(true); // Default to muted if autoplay fails
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle Mute Toggle
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentQuestion = QUESTIONS[currentQIndex];
  const progress = ((currentQIndex + 1) / QUESTIONS.length) * 100;

  const handleOptionSelect = (option: any) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      const newAnswers = [...answers, { questionId: currentQuestion.id, optionId: option.id, mapsTo: option.mapsTo }];
      setAnswers(newAnswers);

      if (currentQIndex < QUESTIONS.length - 1) {
        setCurrentQIndex(currentQIndex + 1);
        setIsTransitioning(false);
      } else {
        // End of Quiz: Show Email Capture instead of finishing immediately
        setShowEmailCapture(true);
        setIsTransitioning(false);
      }
    }, 400);
  };

  const finishQuiz = (finalAnswers: typeof answers, email?: string) => {
    const archetype = calculateArchetype(finalAnswers);
    const subNeed = calculateSubNeed(finalAnswers);
    const preference = finalAnswers.find(a => a.questionId === 8)?.optionId || 'A';
    const zodiac = finalAnswers.find(a => a.questionId === 9)?.optionId;
    
    onComplete({
      archetype,
      subNeed,
      preference,
      zodiac,
      email
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !userEmail.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    finishQuiz(answers, userEmail);
  };

  const handleEmailSkip = () => {
    finishQuiz(answers, undefined);
  };

  const handleBack = () => {
    if (showEmailCapture) {
      setShowEmailCapture(false);
      // Remove the last answer to go back to the state before the email capture triggered
      setAnswers(answers.slice(0, -1)); 
      setIsTransitioning(false);
      return;
    }
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  // Determine if this is the Zodiac question (ID 9) for specific grid layout
  const isZodiacQuestion = currentQuestion && currentQuestion.id === 9;

  // --- VIEW: EMAIL CAPTURE ---
  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans animate-fade-in">
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="max-w-md w-full relative z-10 text-center">
          <div className="mb-8">
             <span className="text-4xl text-stone-900 block mb-4 font-serif">📩</span>
             <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Your Guide Awaits</h2>
             <p className="text-stone-600 font-reading italic">
               Enter your email to receive your full energetic blueprint, ritual recommendations, and a copy of your results.
             </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
             <div>
               <input 
                 type="email" 
                 placeholder="name@example.com"
                 className="w-full p-4 bg-white border border-stone-200 focus:border-stone-900 outline-none transition-colors rounded-lg text-stone-900 placeholder:text-stone-400"
                 value={userEmail}
                 onChange={(e) => { setUserEmail(e.target.value); setEmailError(''); }}
               />
               {emailError && <p className="text-red-500 text-xs mt-2 text-left">{emailError}</p>}
             </div>
             
             <Button type="submit" fullWidth className="py-4 uppercase tracking-widest text-xs font-bold shadow-lg">
               Reveal My Results
             </Button>
          </form>

          <button 
            onClick={handleEmailSkip}
            className="mt-6 text-xs text-stone-400 underline hover:text-stone-600 transition-colors uppercase tracking-wider"
          >
            Skip for now, show my results
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ ---
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden font-sans">
      
       {/* Background Ambience */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-60"></div>
       </div>

       {/* Audio Toggle (Sticky) */}
       <button 
          onClick={toggleMute} 
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-all text-stone-600 border border-stone-200 shadow-sm no-print"
          title={isMuted ? "Unmute Ambient Music" : "Mute Ambient Music"}
       >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
       </button>

      <div className={`w-full relative z-10 ${isZodiacQuestion ? 'max-w-4xl' : 'max-w-2xl'}`}>
        
        {/* Navigation / Progress */}
        <div className="mb-6 md:mb-12 flex items-center justify-between no-print">
            <button 
              onClick={handleBack}
              disabled={currentQIndex === 0}
              className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors duration-300 ${currentQIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
               <ArrowLeft size={12} /> Return
            </button>
            
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">
                    {currentQIndex + 1} <span className="text-stone-200">/</span> {QUESTIONS.length}
                </span>
                <div className="w-16 md:w-24 h-[1px] bg-stone-200">
                    <div 
                        className="h-full bg-stone-900 transition-all duration-700 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>

        {/* Content Container */}
        <div className={`transition-all duration-500 transform ease-in-out ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            
            {/* Question */}
            <h2 className="text-2xl md:text-5xl font-serif text-stone-900 leading-[1.2] md:leading-[1.1] mb-6 md:mb-12 text-center md:text-left animate-fade-in">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className={isZodiacQuestion ? "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" : "space-y-3 md:space-y-4"}>
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={`group relative bg-white border border-stone-100 hover:border-stone-900 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 rounded-lg overflow-hidden
                    ${isZodiacQuestion 
                      ? "p-4 flex items-center gap-4 text-left" 
                      : "w-full p-4 md:p-8 text-left flex items-center justify-between"
                    }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {isZodiacQuestion ? (
                    // --- ZODIAC CARD LAYOUT ---
                    <>
                      <div className="text-3xl text-stone-900 font-serif w-12 flex justify-center shrink-0">
                        {option.symbol}
                      </div>
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                        <span className="font-serif text-lg text-stone-900 block">
                          {option.text}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                          {option.detail}
                        </span>
                      </div>
                    </>
                  ) : (
                    // --- STANDARD LIST LAYOUT ---
                    <>
                       {/* Text */}
                      <span className="font-reading text-base md:text-xl text-stone-600 group-hover:text-stone-900 transition-colors duration-300 relative z-10 leading-snug">
                        {option.text}
                      </span>
                      
                      {/* Icon */}
                      <span className="hidden md:block text-stone-300 group-hover:text-stone-900 transform translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                        <ArrowRight size={20} />
                      </span>
                      {/* Mobile Arrow (Always visible but subtle) */}
                      <span className="md:hidden text-stone-300">
                        <ArrowRight size={16} />
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 md:mt-20 text-center opacity-40">
           <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 flex items-center justify-center gap-2">
             <Sparkles size={10} /> Intuitive Response
           </p>
        </div>

      </div>
    </div>
  );
};