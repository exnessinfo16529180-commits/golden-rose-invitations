import { motion } from "framer-motion";

const LINES = [
  'Құрметті',
  'агайын-туыс, бауырлар,',
  'құда-жекожат,',
  'нағашы-жиен, бөлелер,',
  'құрбы-құрдас,',
  'дос-жарандар,',
  'әріптестер, көршілер!',
];

const InvitationSection = () => {
  return (
    <section style={{
      minHeight: '100svh',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top rose watercolor band */}
      <div style={{
        width: '100%',
        height: 130,
        background: 'linear-gradient(180deg, #C23B5A 0%, #e06080 40%, #f4b8c8 75%, transparent 100%)',
        position: 'relative',
        flexShrink: 0,
      }}>
        {/* Gold bottom edge */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #f5e070 50%, #D4AF37 80%, transparent)',
        }} />
        {/* Corner roses - left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ position: 'absolute', top: 10, left: 8 }}
        >
          <RoseCluster />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ position: 'absolute', top: 10, right: 8 }}
        >
          <RoseCluster flip />
        </motion.div>
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px 24px',
        position: 'relative',
      }}>
        {/* Side rose decorations */}
        <div className="float-anim" style={{ position: 'absolute', left: 4, top: '15%', opacity: 0.55 }}>
          <RoseCluster size={50} />
        </div>
        <div className="float-anim" style={{ position: 'absolute', right: 4, top: '35%', opacity: 0.45, animationDelay: '2s' }}>
          <RoseCluster size={42} flip />
        </div>
        <div className="float-anim" style={{ position: 'absolute', left: 4, bottom: '15%', opacity: 0.35, animationDelay: '1s' }}>
          <RoseCluster size={36} />
        </div>

        {/* Greeting lines - stagger animate */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: i === 0 ? 'clamp(2rem, 8vw, 2.4rem)' : 'clamp(1.4rem, 6vw, 1.9rem)',
                color: '#C23B5A',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: 180, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '16px auto' }}
        />
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ color: '#D4AF37', fontSize: '1.2rem', display: 'block', textAlign: 'center', marginTop: -12, marginBottom: 8 }}
        >✦</motion.span>

        {/* СІЗДЕРДІ block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 8 }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(0.75rem, 3.2vw, 0.9rem)',
            letterSpacing: '0.25em',
            color: '#2C1810',
            lineHeight: 2,
          }}>СІЗДЕРДІ<br />АЯУЛЫ АНАМЫЗ</p>
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="pulse-gold"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2.6rem, 12vw, 4rem)',
            color: '#D4AF37',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: '4px 0 16px',
          }}
        >
          Гүлсараның 75 жас
        </motion.h2>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(0.72rem, 3vw, 0.88rem)',
            letterSpacing: '0.15em',
            color: '#2C1810',
            textAlign: 'center',
            lineHeight: 2.1,
            textTransform: 'uppercase',
          }}
        >
          МЕРЕЙТОЙЫНА АРНАЛҒАН<br />
          САЛТАНАТТЫ АҚ<br />
          ДАСТАРХАНЫМЫЗДЫҢ<br />
          ҚАДІРЛІ ҚОНАҒЫ<br />
          БОЛУҒА ШАҚЫРАМЫЗ!
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: 160, height: 1, background: 'linear-gradient(90deg, transparent, #C23B5A, transparent)', margin: '20px auto 0' }}
        />
        <span style={{ color: '#C23B5A', fontSize: '1rem', display: 'block', textAlign: 'center', marginTop: -8 }}>❀</span>
      </div>
    </section>
  );
};

// Simple inline rose cluster SVG
const RoseCluster = ({ size = 60, flip = false }: { size?: number; flip?: boolean }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 60 96" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}>
    {/* Rose 1 - top */}
    <g transform="translate(30,20)">
      {[0,72,144,216,288].map((a,i) => <ellipse key={i} cx="0" cy="-10" rx="7" ry="12" fill="#C23B5A" opacity="0.85" transform={`rotate(${a})`} />)}
      {[36,108,180,252,324].map((a,i) => <ellipse key={i} cx="0" cy="-7" rx="5" ry="9" fill="#C23B5A" transform={`rotate(${a})`} />)}
      <circle cx="0" cy="0" r="5" fill="#8B1A2E"/>
    </g>
    {/* Stem */}
    <line x1="30" y1="30" x2="28" y2="92" stroke="#3D6B28" strokeWidth="2" strokeLinecap="round"/>
    {/* Leaf */}
    <path d="M29,52 C18,46 12,56 16,66 C22,58 26,54 29,53Z" fill="#4A8038"/>
    <path d="M29,68 C40,62 46,72 42,82 C36,74 32,70 29,69Z" fill="#3D6B28"/>
    {/* Rose 2 - small offset */}
    <g transform="translate(14,44)">
      {[0,72,144,216,288].map((a,i) => <ellipse key={i} cx="0" cy="-8" rx="5" ry="9" fill="#e06080" opacity="0.75" transform={`rotate(${a})`} />)}
      <circle cx="0" cy="0" r="4" fill="#8B1A2E"/>
    </g>
  </svg>
);

export default InvitationSection;
