import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-05-14T18:00:00+06:00").getTime();

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "КҮН" },
    { value: timeLeft.hours, label: "САҒАТ" },
    { value: timeLeft.minutes, label: "МИНУТ" },
    { value: timeLeft.seconds, label: "СЕКУНД" },
  ];

  return (
    <section
      style={{
        minHeight: '100svh',
        backgroundColor: '#1a0f0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '48px 24px',
      }}
    >
      {/* Gold top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #f5e070 50%, #D4AF37 80%, transparent)',
      }} />

      {/* Rose decoration at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 24, textAlign: 'center' }}
      >
        <span style={{ color: '#C23B5A', fontSize: '1.6rem' }}>❀</span>
        <div style={{
          width: 120,
          height: 1,
          background: 'linear-gradient(90deg, transparent, #C23B5A, transparent)',
          margin: '8px auto 0',
        }} />
      </motion.div>

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(0.72rem, 3vw, 0.9rem)',
          color: '#D4AF37',
          letterSpacing: '0.22em',
          textAlign: 'center',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        ТОЙ САЛТАНАТЫНА ДЕЙІН:
      </motion.p>

      {/* Countdown boxes */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 420,
      }}>
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            style={{
              textAlign: 'center',
              minWidth: 72,
              flex: '1 1 72px',
              maxWidth: 90,
            }}
          >
            <div
              style={{
                backgroundColor: '#2a1510',
                border: '1px solid rgba(212,175,55,0.45)',
                borderRadius: 12,
                padding: '14px 8px 10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.15)',
                marginBottom: 8,
              }}
            >
              <div
                className="pulse-gold tabular-nums"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.2rem, 10vw, 3rem)',
                  fontWeight: 700,
                  color: '#D4AF37',
                  lineHeight: 1,
                }}
              >
                {String(unit.value).padStart(2, '0')}
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.55rem, 2.2vw, 0.68rem)',
                color: 'rgba(212,175,55,0.75)',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
            >
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gold ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ marginTop: 40, textAlign: 'center' }}
      >
        <div style={{
          width: 120,
          height: 1,
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          margin: '0 auto 8px',
        }} />
        <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span>
      </motion.div>

      {/* Gold bottom border */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #f5e070 50%, #D4AF37 80%, transparent)',
      }} />
    </section>
  );
};

export default CountdownSection;
