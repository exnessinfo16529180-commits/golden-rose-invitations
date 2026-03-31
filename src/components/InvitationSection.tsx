import RoseDecoration from "@/components/RoseDecoration";

const InvitationSection = () => {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
    >
      {/* Watercolor rose header splash */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 180 }}>
        <svg
          viewBox="0 0 480 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: "block", maxHeight: 220 }}
        >
          <defs>
            <radialGradient id="roseWash1" cx="25%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#C23B5A" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#d96080" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="roseWash2" cx="78%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#C23B5A" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#f0a0b4" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="roseWash3" cx="55%" cy="70%" r="40%">
              <stop offset="0%" stopColor="#C23B5A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="goldGlitter" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="15%" stopColor="#D4AF37" stopOpacity="0.6" />
              <stop offset="35%" stopColor="#f5e070" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="65%" stopColor="#f5e070" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#D4AF37" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="480" height="180" fill="url(#roseWash1)" />
          <rect width="480" height="180" fill="url(#roseWash2)" />
          <rect width="480" height="180" fill="url(#roseWash3)" />
          {/* Gold glitter bottom edge */}
          <rect x="0" y="166" width="480" height="4" fill="url(#goldGlitter)" opacity="0.95" />
          <rect x="0" y="171" width="480" height="2" fill="url(#goldGlitter)" opacity="0.45" />
          {/* Scattered gold sparkle dots */}
          {[30, 75, 130, 190, 240, 295, 355, 410, 455].map((cx, i) => (
            <circle
              key={i}
              cx={cx}
              cy={166 + (i % 3 === 0 ? -5 : i % 3 === 1 ? 0 : 3)}
              r={i % 2 === 0 ? 2 : 1.2}
              fill="#D4AF37"
              opacity={0.85}
            />
          ))}
        </svg>

        {/* Corner rose decorations */}
        <div className="absolute top-3 left-3" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={65} count={2} opacity={0.72} />
        </div>
        <div className="absolute top-3 right-3" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={65} count={2} opacity={0.72} flip />
        </div>
      </div>

      {/* Main invitation content */}
      <div
        className="relative mx-auto px-8 py-8 text-center"
        style={{ maxWidth: 480 }}
      >
        {/* Rose side decoration left */}
        <div className="absolute left-0 top-6" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={44} count={3} opacity={0.48} />
        </div>
        {/* Rose side decoration right */}
        <div className="absolute right-0 top-6" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={44} count={3} opacity={0.48} flip />
        </div>

        {/* Greeting text in Great Vibes script */}
        <p
          className="leading-loose mb-6"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(1.3rem, 5.5vw, 1.7rem)",
            color: "#C23B5A",
            lineHeight: 1.95,
          }}
        >
          Құрметті<br />
          агайын-туыс, бауырлар,<br />
          құда-жекожат,<br />
          нағашы-жиен, бөлелер,<br />
          құрбы-құрдас,<br />
          дос-жарандар,<br />
          әріптестер, көршілер!
        </p>

        {/* Ornamental divider */}
        <div className="ornamental-divider max-w-[180px] mx-auto my-5">
          <span style={{ color: "#D4AF37", fontSize: "1rem" }}>✦</span>
        </div>

        {/* "СІЗДЕРДІ / АЯУЛЫ АНАМЫЗ" in uppercase Playfair */}
        <p
          className="uppercase mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.82rem, 3.2vw, 0.98rem)",
            color: "#2C1810",
            letterSpacing: "0.22em",
            lineHeight: 1.8,
          }}
        >
          СІЗДЕРДІ<br />АЯУЛЫ АНАМЫЗ
        </p>

        {/* Name in Great Vibes - gold shimmer */}
        <h2
          className="gold-shimmer mb-3"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.5rem, 11vw, 3.6rem)",
            color: "#D4AF37",
            lineHeight: 1.15,
          }}
        >
          Гүлсараның 75 жас
        </h2>

        {/* Subtitle uppercase Playfair */}
        <p
          className="uppercase leading-relaxed mt-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.78rem, 3vw, 0.94rem)",
            color: "#2C1810",
            letterSpacing: "0.18em",
            lineHeight: 2,
          }}
        >
          МЕРЕЙТОЙЫНА АРНАЛҒАН<br />
          САЛТАНАТТЫ АҚ<br />
          ДАСТАРХАНЫМЫЗДЫҢ<br />
          ҚАДІРЛІ ҚОНАҒЫ<br />
          БОЛУҒА ШАҚЫРАМЫЗ!
        </p>

        {/* Bottom ornament */}
        <div className="ornamental-divider max-w-[180px] mx-auto mt-7">
          <span style={{ color: "#C23B5A", fontSize: "1.1rem" }}>❀</span>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
