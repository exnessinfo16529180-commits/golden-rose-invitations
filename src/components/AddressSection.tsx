import { motion } from "framer-motion";

const AddressSection = () => {
  return (
    <section style={{
      minHeight: '100svh',
      backgroundColor: '#FFF8F0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '48px 24px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 420, width: '100%', textAlign: 'center' }}>

        {/* Той иелері */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ marginBottom: 36 }}
        >
          {/* Decorative line */}
          <div style={{
            width: 60, height: 1,
            background: 'linear-gradient(90deg, transparent, #D4AF37)',
            margin: '0 auto 16px',
          }} />

          <motion.p
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(1.8rem, 7vw, 2.4rem)',
              color: '#C23B5A',
              lineHeight: 1.3,
              marginBottom: 4,
            }}
          >
            Той иелері
          </motion.p>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.22em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.75rem, 3vw, 0.9rem)',
              color: '#2C1810',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
            }}
          >
            ұл-қыздары
          </motion.p>

          {/* Decorative line */}
          <div style={{
            width: 60, height: 1,
            background: 'linear-gradient(90deg, #D4AF37, transparent)',
            margin: '16px auto 0',
          }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2.4rem, 10vw, 3rem)',
            color: '#C23B5A',
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          Мекен-жайымыз:
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            width: 160,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            margin: '0 auto 32px',
          }}
        />

        {/* Address */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            color: '#2C1810',
            lineHeight: 1.9,
            fontWeight: 500,
            marginBottom: 36,
          }}
        >
          Астана қаласы,<br />
          «Бәйтерек сарайы»<br />
          мейрамханасы
        </motion.p>

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
              padding: '14px 36px',
              borderRadius: 9999,
              backgroundColor: '#C23B5A',
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.85rem, 3.5vw, 1rem)',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(194,59,90,0.35)',
              fontWeight: 600,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            2GIS картада көру
          </a>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 40 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            maxWidth: 160, margin: '0 auto',
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '1.1rem' }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddressSection;
