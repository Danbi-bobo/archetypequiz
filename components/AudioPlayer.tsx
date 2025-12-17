import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Set initial volume
        audio.volume = 0.3;

        // Attempt to autoplay
        const playAudio = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.log('Autoplay blocked, will play on user interaction');
                // Add click listener to play on first user interaction
                const playOnInteraction = async () => {
                    try {
                        await audio.play();
                        setIsPlaying(true);
                        document.removeEventListener('click', playOnInteraction);
                    } catch (e) {
                        console.error('Failed to play audio:', e);
                    }
                };
                document.addEventListener('click', playOnInteraction);
            }
        };

        playAudio();

        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                {/* Using a mystical ambient track from a CDN source */}
                <source
                    src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
                    type="audio/mpeg"
                />
            </audio>

            {/* Mute/Unmute Control Button */}
            <button
                onClick={toggleMute}
                className="no-print fixed bottom-6 right-6 z-50 bg-stone-800/80 hover:bg-stone-700 text-stone-50 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
                aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
                title={isMuted ? 'Unmute background music' : 'Mute background music'}
            >
                {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                ) : (
                    <Volume2 className="w-5 h-5 group-hover:animate-pulse" />
                )}
            </button>
        </>
    );
};
