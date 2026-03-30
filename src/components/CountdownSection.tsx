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
    <section className="py-20 px-4 relative z-10">
      <div className="ornamental-divider max-w-md mx-auto mb-12">
        <span style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div
              className="text-5xl md:text-7xl font-bold gold-shimmer tabular-nums"
              style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}
            >
              {String(unit.value).padStart(2, "0")}
            </div>
            <div
              className="text-sm md:text-base mt-2 tracking-[0.15em] uppercase"
              style={{ color: '#2C1810', opacity: 0.7, fontFamily: "'Playfair Display', serif" }}
            >
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <div className="ornamental-divider max-w-md mx-auto mt-12">
        <span style={{ color: '#D4AF37', fontSize: '1.5rem' }}>✦</span>
      </div>
    </section>
  );
};

export default CountdownSection;
