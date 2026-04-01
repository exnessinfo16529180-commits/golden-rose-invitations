import { motion } from "framer-motion";

const AddressSection = () => {
  return (
    <section style={{
      minHeight: '100svh',
      backgroundColor: '#1a0f0a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative rose petals / soft glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(194,59,90,0.18) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Corner ornaments */}
      {[
        { top: 24, left: 24, rotate: 0 },
        { top: 24, right: 24, rotate: 90 },
        { bottom: 24, right: 24, rotate: 180 },
        { bottom: 24, left: 24, rotate: 270 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{
            position: 'absolute',
            ...pos,
            width: 40,
            height: 40,
            opacity: 0.4,
          }}
        >
          <svg viewBox="0 0 40 40" fill="none" style={{ transform: `rotate(${pos.rotate}deg)`, width: '100%', height: '100%' }}>
            <path d="M2 2 L2 14 M2 2 L14 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      ))}

      <div style={{ maxWidth: 440, width: '100%', position: 'relative', zIndex: 1 }}>

        {/* === Той иелері section === */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            textAlign: 'center',
            marginBottom: 40,
            padding: '32px 24px',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 2,
            position: 'relative',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {/* Inner glow border corners */}
          {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner, i) => (
            <div key={corner} style={{
              position: 'absolute',
              width: 20, height: 20,
              borderColor: '#D4AF37',
              borderStyle: 'solid',
              borderWidth: 0,
              ...(corner === 'topLeft' ? { top: -1, left: -1, borderTopWidth: 2, borderLeftWidth: 2 } : {}),
              ...(corner === 'topRight' ? { top: -1, right: -1, borderTopWidth: 2, borderRightWidth: 2 } : {}),
              ...(corner === 'bottomLeft' ? { bottom: -1, left: -1, borderBottomWidth: 2, borderLeftWidth: 2 } : {}),
              ...(corner === 'bottomRight' ? { bottom: -1, right: -1, borderBottomWidth: 2, borderRightWidth: 2 } : {}),
            }} />
          ))}

          {/* Decorative top element */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '0.9rem' }}>✦</span>
            <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>

          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2.2rem, 9vw, 2.8rem)',
              color: '#C23B5A',
              lineHeight: 1.25,
              marginBottom: 6,
            }}
          >
            Той иелері
          </motion.p>

          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.28em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.65rem, 2.5vw, 0.78rem)',
              color: '#D4AF37',
              textTransform: 'uppercase',
              letterSpacing: '0.28em',
              marginBottom: 20,
            }}
          >
            ұл-қыздары
          </motion.p>

          {/* Bottom decorative */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '0.7rem' }}>◆</span>
            <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </motion.div>

        {/* === Address card === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,248,240,0.07) 0%, rgba(212,175,55,0.05) 100%)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: 2,
            padding: '36px 28px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Gold corner accents */}
          {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner) => (
            <div key={corner} style={{
              position: 'absolute',
              width: 18, height: 18,
              borderColor: '#D4AF37',
              borderStyle: 'solid',
              borderWidth: 0,
              ...(corner === 'topLeft' ? { top: -1, left: -1, borderTopWidth: 2, borderLeftWidth: 2 } : {}),
              ...(corner === 'topRight' ? { top: -1, right: -1, borderTopWidth: 2, borderRightWidth: 2 } : {}),
              ...(corner === 'bottomLeft' ? { bottom: -1, left: -1, borderBottomWidth: 2, borderLeftWidth: 2 } : {}),
              ...(corner === 'bottomRight' ? { bottom: -1, right: -1, borderBottomWidth: 2, borderRightWidth: 2 } : {}),
            }} />
          ))}

          {/* Pin icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            style={{ marginBottom: 18 }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(194,59,90,0.2)" stroke="#C23B5A" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="3" fill="#C23B5A"/>
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(1.9rem, 8vw, 2.4rem)',
              color: '#D4AF37',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Мекен-жайымыз
          </motion.h2>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6))' }} />
            <span style={{ color: '#D4AF37', fontSize: '0.75rem' }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,175,55,0.6), transparent)' }} />
          </div>

          {/* Address lines */}
          {[
            { text: 'Астана қаласы', delay: 0.4 },
            { text: '«Бәйтерек сарайы»', delay: 0.5, big: true },
            { text: 'мейрамханасы', delay: 0.6 },
          ].map(({ text, delay, big }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay }}
              style={{
                fontFamily: big ? "'Playfair Display', serif" : "'Playfair Display', serif",
                fontSize: big
                  ? 'clamp(1.1rem, 4.5vw, 1.35rem)'
                  : 'clamp(0.9rem, 3.5vw, 1.05rem)',
                color: big ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                fontWeight: big ? 600 : 400,
                lineHeight: 1.7,
                fontStyle: big ? 'italic' : 'normal',
                marginBottom: big ? 2 : 0,
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, margin: '22px 0',
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4))' }} />
            <span style={{ color: 'rgba(212,175,55,0.5)', fontSize: '0.65rem' }}>◆</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
          </div>

          {/* 2GIS button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="https://2gis.kz/astana/geo/70000001083013833"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '13px 32px',
                border: '1px solid #C23B5A',
                borderRadius: 9999,
                backgroundColor: '#C23B5A',
                color: '#FFFFFF',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.82rem, 3.2vw, 0.95rem)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(194,59,90,0.4)',
                fontWeight: 600,
                transition: 'transform 0.15s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              2GIS картада көру
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 36 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5))' }} />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ color: '#D4AF37', fontSize: '1.2rem' }}
            >
              ✦
            </motion.span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, rgba(212,175,55,0.5), transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddressSection;
