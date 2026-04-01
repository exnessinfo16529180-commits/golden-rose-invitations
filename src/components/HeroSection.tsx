import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  phase: 1 | 2 | 3;
  onVideoEnd: () => void;
}

const HeroSection = ({ phase, onVideoEnd }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (phase !== 1) return;

    const video = videoRef.current;

    // Fallback: if video can't play (autoplay blocked on mobile), advance after 3s
    const fallbackTimer = setTimeout(() => {
      onVideoEnd();
    }, 3000);

    const handleCanPlay = () => {
      // Video is playing — clear fallback timer, let it end naturally
      clearTimeout(fallbackTimer);
    };

    const handleError = () => {
      clearTimeout(fallbackTimer);
      onVideoEnd();
    };

    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            clearTimeout(fallbackTimer);
          })
          .catch(() => {
            // Autoplay blocked — advance immediately
            clearTimeout(fallbackTimer);
            onVideoEnd();
          });
      }
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      }
    };
  }, [phase, onVideoEnd]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#1a0f0a' }}
      onClick={phase === 1 ? onVideoEnd : undefined}
    >
      {/* Phase 1: Video */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            className="absolute inset-0 z-10"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={import.meta.env.BASE_URL + "hero-video.mp4"}
              autoPlay
              muted
              playsInline
              poster={import.meta.env.BASE_URL + "hero-portrait.png"}
              onEnded={onVideoEnd}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            {/* Tap hint for mobile */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center">
              <span
                className="text-xs tracking-[0.2em] uppercase opacity-60"
                style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}
              >
                Экранға басыңыз
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 2 & 3: Static Image with text */}
      {phase >= 2 && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 hero-image-zoom">
            <img
              src={import.meta.env.BASE_URL + "hero-portrait.png"}
              alt="Гүлсара апа"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          {/* Tap / scroll indicator */}
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 px-4 text-center"
            >
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(0.85rem, 3.5vw, 1rem)',
                  color: '#D4AF37',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Пригласительді ашу үшін экранды басыңыз
              </motion.p>
              <div className="bounce-arrow" style={{ color: '#D4AF37' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
