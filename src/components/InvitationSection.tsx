const InvitationSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p
          className="text-xl md:text-2xl leading-relaxed"
          style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}
        >
          Аяулы анамыз
        </p>

        <h2
          className="text-5xl md:text-7xl gold-shimmer"
          style={{ color: '#D4AF37', fontFamily: "'Great Vibes', cursive" }}
        >
          Гүлсара апамыздың
        </h2>

        <p
          className="text-xl md:text-2xl leading-relaxed"
          style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}
        >
          мерейтойын
          <br />
          бірге тойлауға шақырамыз.
        </p>

        <div className="py-6">
          <div className="ornamental-divider max-w-xs mx-auto">
            <span style={{ color: '#C41E3A' }}>❀</span>
          </div>
        </div>

        <p
          className="text-lg md:text-xl italic leading-relaxed"
          style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}
        >
          Сіздің қатысуыңыз — ең үлкен сыйлық!
        </p>

        <p
          className="text-base md:text-lg pt-4"
          style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}
        >
          — Той иесі ұл-қыздары!
        </p>
      </div>
    </section>
  );
};

export default InvitationSection;
