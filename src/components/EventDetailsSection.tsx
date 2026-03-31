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
    <section
      className="relative w-full py-10"
      style={{ backgroundColor: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
    >
      <div className="relative mx-auto px-6" style={{ maxWidth: 480 }}>

        {/* Side rose decorations */}
        <div className="absolute left-0 top-4" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={46} count={2} opacity={0.47} />
        </div>
        <div className="absolute right-0 top-4" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={46} count={2} opacity={0.47} flip />
        </div>

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(1.9rem, 7.5vw, 2.6rem)",
              color: "#C23B5A",
              lineHeight: 1.25,
            }}
          >
            Той салтанаты:
          </h2>
        </div>

        {/* Calendar card */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            maxWidth: 344,
            boxShadow: "0 4px 24px rgba(194,59,90,0.14)",
            border: "1.5px solid rgba(194,59,90,0.18)",
          }}
        >
          {/* Calendar header bar */}
          <div
            className="py-3 px-4 text-center"
            style={{ backgroundColor: "#C23B5A" }}
          >
            <span
              className="uppercase font-semibold text-white tracking-widest"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.92rem",
                letterSpacing: "0.2em",
              }}
            >
              МАМЫР 2026
            </span>
          </div>

          {/* Day-of-week headers */}
          <div
            className="grid grid-cols-7 py-2 px-3"
            style={{ backgroundColor: "rgba(194,59,90,0.07)" }}
          >
            {DAY_HEADERS.map((d) => (
              <div
                key={d}
                className="text-center text-xs font-semibold py-1"
                style={{
                  color: "#C23B5A",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.04em",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-px px-3 py-3" style={{ backgroundColor: "#fff" }}>
            {MAY_2026_DAYS.map((day, idx) => (
              <div
                key={idx}
                className="aspect-square flex items-center justify-center rounded-full text-sm"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  ...(day === HIGHLIGHT_DAY
                    ? {
                        backgroundColor: "#C23B5A",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        boxShadow: "0 2px 10px rgba(194,59,90,0.5)",
                        fontSize: "0.95rem",
                      }
                    : {
                        color: day ? "#2C1810" : "transparent",
                        fontWeight: 400,
                      }),
                }}
              >
                {day ?? ""}
              </div>
            ))}
          </div>
        </div>

        {/* Time display */}
        <div className="text-center mt-5 mb-2">
          <p
            className="tracking-widest font-semibold"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1rem, 4.2vw, 1.3rem)",
              color: "#2C1810",
              letterSpacing: "0.22em",
            }}
          >
            САҒ. 18:00-ДЕ
          </p>
        </div>

        {/* Ornamental divider */}
        <div className="ornamental-divider max-w-[200px] mx-auto my-7">
          <span style={{ color: "#D4AF37", fontSize: "1.1rem" }}>✦</span>
        </div>

        {/* Venue heading */}
        <div className="text-center mb-4">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(1.7rem, 6.8vw, 2.3rem)",
              color: "#C23B5A",
              lineHeight: 1.25,
            }}
          >
            Мекен-жайымыз:
          </h2>
        </div>

        {/* Venue name */}
        <div className="text-center mb-7">
          <p
            className="font-medium"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.95rem, 3.8vw, 1.12rem)",
              color: "#2C1810",
              lineHeight: 1.7,
            }}
          >
            «Бәйтерек сарайы»<br />мейрамханасы
          </p>
        </div>

        {/* 2GIS map button */}
        <div className="flex justify-center">
          <a
            href="https://2gis.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#C23B5A",
              color: "#FFFFFF",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.88rem, 3.4vw, 1rem)",
              letterSpacing: "0.04em",
              textDecoration: "none",
              boxShadow: "0 3px 14px rgba(194,59,90,0.32)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            2GIS картада көру
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="ornamental-divider max-w-[200px] mx-auto mt-9">
          <span style={{ color: "#C23B5A", fontSize: "1.1rem" }}>❀</span>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
