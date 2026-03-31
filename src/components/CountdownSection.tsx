import { useState, useEffect } from "react";

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
    { value: timeLeft.days, label: "күн" },
    { value: timeLeft.hours, label: "сағат" },
    { value: timeLeft.minutes, label: "минут" },
    { value: timeLeft.seconds, label: "секунд" },
  ];

  return (
    <section className="relative w-full py-14" style={{ backgroundColor: "#C23B5A" }}>
      {/* Gold top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, #D4AF37 20%, #f0d060 50%, #D4AF37 80%, transparent 100%)",
        }}
      />

      <div className="mx-auto px-6 text-center" style={{ maxWidth: 480 }}>
        {/* Heading */}
        <p
          className="uppercase tracking-widest mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.75rem, 3vw, 0.9rem)",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.22em",
            fontWeight: 600,
          }}
        >
          ТОЙ САЛТАНАТЫНА ДЕЙІН:
        </p>

        {/* Countdown numbers */}
        <div className="flex justify-center gap-4 flex-wrap">
          {units.map((unit) => (
            <div key={unit.label} className="text-center">
              <div
                className="tabular-nums gold-shimmer"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.8rem, 12vw, 4rem)",
                  fontWeight: 700,
                  color: "#D4AF37",
                  lineHeight: 1,
                  minWidth: "4rem",
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </div>
              <div
                className="mt-2 uppercase tracking-wider"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.6rem, 2.5vw, 0.75rem)",
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.15em",
                }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Gold ornament */}
        <div className="mt-10">
          <span style={{ color: "#D4AF37", fontSize: "1.2rem" }}>✦</span>
        </div>
      </div>

      {/* Gold bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, #D4AF37 20%, #f0d060 50%, #D4AF37 80%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default CountdownSection;
