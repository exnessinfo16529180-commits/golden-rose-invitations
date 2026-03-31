import { motion } from "framer-motion";
import RoseDecoration from "@/components/RoseDecoration";

const MAY_2026_DAYS: (number | null)[] = [
  null, null, null, null, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31,
];

const DAY_HEADERS = ["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"];
const HIGHLIGHT_DAY = 14;

const EventDetailsSection = () => {
  return (
    <>
      {/* Part A - Dark rose background: Той салтанаты */}
      <section style={{
        minHeight: '100svh',
        backgroundColor: '#4A0020',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '48px 24px',
      }}>
        {/* Subtle rose decorations at corners */}
        <div style={{ position: 'absolute', top: 16, left: 8, opacity: 0.25, pointerEvents: 'none' }}>
          <RoseDecoration width={52} count={2} opacity={1} />
        </div>
        <div style={{ position: 'absolute', top: 16, right: 8, opacity: 0.25, pointerEvents: 'none' }}>
          <RoseDecoration width={52} count={2} opacity={1} flip />
        </div>

        {/* Gold top border */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #f5e070 50%, #D4AF37 80%, transparent)',
        }} />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="float-anim"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2.2rem, 9vw, 3rem)',
            color: '#D4AF37',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          Той салтанаты:
        </motion.h2>

        {/* Calendar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            width: '100%',
            maxWidth: 344,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.3)',
            backgroundColor: '#FFFFFF',
          }}
        >
          {/* Calendar header */}
          <div style={{
            padding: '12px 16px',
            textAlign: 'center',
            backgroundColor: '#C23B5A',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '0.92rem',
              letterSpacing: '0.2em',
              color: '#FFFFFF',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>МАМЫР 2026</span>
          </div>

          {/* Day-of-week headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            padding: '8px 12px',
            backgroundColor: 'rgba(194,59,90,0.07)',
          }}>
            {DAY_HEADERS.map((d) => (
              <div key={d} style={{
                textAlign: 'center',
                padding: '4px 0',
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#C23B5A',
                letterSpacing: '0.04em',
              }}>{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 2,
            padding: '12px',
            backgroundColor: '#fff',
          }}>
            {MAY_2026_DAYS.map((day, idx) => (
              <div key={idx} style={{
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.85rem',
                ...(day === HIGHLIGHT_DAY ? {
                  backgroundColor: '#C23B5A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  boxShadow: '0 2px 10px rgba(194,59,90,0.5)',
                } : {
                  color: day ? '#2C1810' : 'transparent',
                  fontWeight: 400,
                }),
              }}>{day ?? ''}</div>
            ))}
          </div>
        </motion.div>

        {/* Time display */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1rem, 5vw, 1.5rem)',
            color: '#D4AF37',
            letterSpacing: '0.22em',
            textAlign: 'center',
            fontWeight: 600,
            marginTop: 28,
            textTransform: 'uppercase',
          }}
        >
          САҒ. 18:00-ДЕ
        </motion.p>

        {/* Gold bottom border */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #f5e070 50%, #D4AF37 80%, transparent)',
        }} />
      </section>

      {/* Part B - Cream background: Мекен-жайымыз */}
      <section style={{
        minHeight: '100svh',
        backgroundColor: '#FFF8F0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '48px 24px',
      }}>
        {/* Corner rose decorations */}
        <div style={{ position: 'absolute', top: 16, left: 8, opacity: 0.5, pointerEvents: 'none' }}>
          <RoseDecoration width={52} count={2} opacity={1} />
        </div>
        <div style={{ position: 'absolute', top: 16, right: 8, opacity: 0.5, pointerEvents: 'none' }}>
          <RoseDecoration width={52} count={2} opacity={1} flip />
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 8, opacity: 0.35, pointerEvents: 'none' }}>
          <RoseDecoration width={44} count={2} opacity={1} />
        </div>
        <div style={{ position: 'absolute', bottom: 24, right: 8, opacity: 0.35, pointerEvents: 'none' }}>
          <RoseDecoration width={44} count={2} opacity={1} flip />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="rose-shimmer"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2rem, 8vw, 2.5rem)',
            color: '#C23B5A',
            textAlign: 'center',
            lineHeight: 1.25,
            marginBottom: 24,
          }}
        >
          Мекен-жайымыз:
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            width: 160,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            marginBottom: 28,
          }}
        />

        {/* Venue name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            color: '#2C1810',
            lineHeight: 1.7,
            fontWeight: 500,
          }}>
            Астана қаласы,<br />«Бәйтерек сарайы»<br />мейрамханасы
          </p>
        </motion.div>

        {/* 2GIS button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://2gis.kz/astana/geo/70000001083013833"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 32px',
              borderRadius: 9999,
              backgroundColor: '#C23B5A',
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.88rem, 3.4vw, 1rem)',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(194,59,90,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            2GIS картада көру
          </a>
        </motion.div>

        {/* Bottom rose ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: 40, textAlign: 'center' }}
        >
          <div style={{
            width: 160,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C23B5A, transparent)',
            margin: '0 auto 8px',
          }} />
          <span style={{ color: '#C23B5A', fontSize: '1.1rem' }}>❀</span>
        </motion.div>
      </section>
    </>
  );
};

export default EventDetailsSection;
