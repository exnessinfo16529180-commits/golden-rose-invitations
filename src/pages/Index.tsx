import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import RsvpSection from "@/components/RsvpSection";
import FloatingPetals from "@/components/FloatingPetals";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const [heroPhase, setHeroPhase] = useState<1 | 2 | 3>(1);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleVideoEnd = useCallback(() => {
    setHeroPhase(2);
  }, []);

  useEffect(() => {
    if (heroPhase !== 2) return;

    const handleScroll = () => {
      setHeroPhase(3);
      setScrollUnlocked(true);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) handleScroll();
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 30) handleScroll();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [heroPhase]);

  useEffect(() => {
    if (scrollUnlocked && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [scrollUnlocked]);

  useEffect(() => {
    if (!scrollUnlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [scrollUnlocked]);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: scrollUnlocked ? '#FDF8F0' : '#1a0f0a' }}>
      <HeroSection phase={heroPhase} onVideoEnd={handleVideoEnd} />

      {scrollUnlocked && (
        <div ref={contentRef} className="relative paper-texture" style={{ backgroundColor: '#FDF8F0' }}>
          <FloatingPetals />
          
          <ScrollReveal>
            <CountdownSection />
          </ScrollReveal>

          <ScrollReveal>
            <InvitationSection />
          </ScrollReveal>

          <ScrollReveal>
            <EventDetailsSection />
          </ScrollReveal>

          <ScrollReveal>
            <RsvpSection />
          </ScrollReveal>

          {/* Footer */}
          <div className="py-12 text-center" style={{ color: '#2C1810' }}>
            <div className="ornamental-divider max-w-xs mx-auto mb-6">
              <span style={{ color: '#D4AF37' }}>✦</span>
            </div>
            <p className="text-sm opacity-60" style={{ fontFamily: "'Playfair Display', serif" }}>
              © 2026 — Гүлсара апамыздың 75 жылдық мерейтойы
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
