const EventDetailsSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-lg mx-auto text-center space-y-8">
        <div className="ornamental-divider max-w-xs mx-auto mb-8">
          <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span>
        </div>

        <div className="space-y-6">
          {/* Date */}
          <div className="flex items-center justify-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-xl" style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}>
              14 мамыр 2026
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center justify-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span className="text-xl" style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}>
              18:00
            </span>
          </div>

          {/* Venue */}
          <div className="flex items-center justify-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-xl" style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}>
              «Бәйтерек сарайы» мейрамханасы
            </span>
          </div>
        </div>

        {/* 2GIS button */}
        <a
          href="https://2gis.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 text-lg"
          style={{
            borderColor: '#D4AF37',
            color: '#D4AF37',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Маршрутты көру
        </a>
      </div>
    </section>
  );
};

export default EventDetailsSection;
