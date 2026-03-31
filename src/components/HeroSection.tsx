import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  phase: 1 | 2 | 3;
  onVideoEnd: () => void;
}

const HeroSection = ({ phase, onVideoEnd }: HeroSectionProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#1a0f0a' }}>
      {/* Phase 1: Video */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            className="absolute inset-0 z-10"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <video
              className="h-full w-full object-cover"
              src={import.meta.env.BASE_URL + "hero-video.mp4"}
              autoPlay
              muted
              playsInline
              poster={import.meta.env.BASE_URL + "hero-portrait.png"}
              onEnded={onVideoEnd}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
              style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}
            >
              Аяулы анамыз
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-6xl md:text-8xl lg:text-9xl mb-6 gold-shimmer"
              style={{ color: '#D4AF37', fontFamily: "'Great Vibes', cursive" }}
            >
              Гүлсара
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-2xl md:text-3xl tracking-[0.2em]"
              style={{ color: '#FDF8F0', fontFamily: "'Playfair Display', serif" }}
            >
              75 жыл мерейтой
            </motion.p>
          </div>

          {/* Scroll indicator */}
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
                Төменге сырғытыңыз
              </span>
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
