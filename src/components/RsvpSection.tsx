import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import RoseDecoration from "@/components/RoseDecoration";

type AttendingOption = "yes" | "with-spouse" | "no";

// Замените на URL вашего Google Apps Script Web App
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/PASTE_YOUR_SCRIPT_ID_HERE/exec";

const TG_TOKEN = "8755824802:AAGHYK6K13ZCxdmjajg5YGhpuwg2YIeJxeQ";
const TG_CHAT_ID = "7985823818";

const RsvpSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [attending, setAttending] = useState<AttendingOption>("yes");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(1);
    let formatted = "+7 ";
    if (digits.length > 0) formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += " " + digits.slice(3, 6);
    if (digits.length > 6) formatted += " " + digits.slice(6, 8);
    if (digits.length > 8) formatted += " " + digits.slice(8, 10);
    setPhone(formatted);
  };

  const attendingLabel = (v: AttendingOption) =>
    v === "yes" ? "Қатысамын" : v === "with-spouse" ? "Жұбайымен боламын" : "Келе алмаймын";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const label = attendingLabel(attending);
    const emoji = attending === "yes" ? "✅" : attending === "with-spouse" ? "💑" : "❌";
    const text =
      `🌹 <b>Жаңа жауап — Гүлсара апа 75 жас</b>\n\n` +
      `👤 <b>Аты-жөні:</b> ${name}\n` +
      `📞 <b>Телефон:</b> ${phone}\n` +
      `${emoji} <b>Қатысу:</b> ${label}\n` +
      `🕐 ${new Date().toLocaleString("ru-RU")}`;
    try {
      await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: "HTML" }),
      });
    } catch (_) {
      // ignore network errors
    }
    setLoading(false);
    setSubmitted(true);
    toast({ title: "Рақмет!", description: "Сіздің жауабыңыз қабылданды." });
  };

  if (submitted) {
    return (
      <section
        style={{
          minHeight: '100svh',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '48px 24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: 360, width: '100%', textAlign: 'center' }}
        >
          <div style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: 16 }}>✦</div>
          <h3
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2rem, 8vw, 2.8rem)',
              color: '#C23B5A',
              marginBottom: 16,
            }}
          >
            Рақмет!
          </h3>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.95rem, 3.8vw, 1.05rem)',
              color: '#2C1810',
              lineHeight: 1.7,
            }}
          >
            Сіздің жауабыңыз қабылданды.
          </p>
        </motion.div>
      </section>
    );
  }

  const radioOptions: { value: AttendingOption; label: string }[] = [
    { value: "yes", label: "ҚАТЫСАМЫН" },
    { value: "with-spouse", label: "ЖҰБАЙЫМЕН БОЛАМЫН" },
    { value: "no", label: "ӨКІНІШКЕ ОРАЙ, КЕЛЕ АЛМАЙМЫН" },
  ];

  const inputStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    border: '1.5px solid rgba(194,59,90,0.35)',
    color: '#2C1810',
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(0.9rem, 3.5vw, 1rem)',
    borderRadius: '0.6rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      style={{
        minHeight: '100svh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Playfair Display', serif",
        background: 'linear-gradient(180deg, rgba(194,59,90,0.06) 0%, #FFFFFF 18%)',
      }}
    >
      {/* Side rose decorations */}
      <div style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
        <RoseDecoration width={42} count={2} opacity={0.42} />
      </div>
      <div style={{ position: 'absolute', right: 0, top: 0, pointerEvents: 'none' }}>
        <RoseDecoration width={42} count={2} opacity={0.42} flip />
      </div>

      <div style={{ width: '100%', maxWidth: 480, padding: '48px 24px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.72rem, 2.8vw, 0.85rem)',
              color: '#C23B5A',
              letterSpacing: '0.14em',
              lineHeight: 1.85,
              textTransform: 'uppercase',
            }}
          >
            ТОЙҒА ҚАТЫСУЫҢЫЗДЫ<br />РАСТАУЫҢЫЗДЫ СҰРАЙМЫЗ:
          </p>
          <div style={{
            width: 120,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            margin: '14px auto 0',
          }} />
        </motion.div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Name field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: 8,
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.8rem, 3.2vw, 0.9rem)',
                color: '#2C1810',
                opacity: 0.75,
                letterSpacing: '0.05em',
              }}
            >
              Аты-жөніңіз
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              placeholder="Толық аты-жөніңізді енгізіңіз"
            />
          </motion.div>

          {/* Phone field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: 8,
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.8rem, 3.2vw, 0.9rem)',
                color: '#2C1810',
                opacity: 0.75,
                letterSpacing: '0.05em',
              }}
            >
              Телефон нөміріңіз
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              style={inputStyle}
              placeholder="+7 777 123 45 67"
            />
          </motion.div>

          {/* Attendance radio options - pill buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {radioOptions.map((option) => {
              const isSelected = attending === option.value;
              const isNo = option.value === "no";
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAttending(option.value)}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: 9999,
                    border: `1.5px solid ${isSelected ? (isNo ? 'rgba(100,100,100,0.5)' : '#C23B5A') : 'rgba(194,59,90,0.25)'}`,
                    backgroundColor: isSelected
                      ? (isNo ? 'rgba(100,100,100,0.12)' : '#C23B5A')
                      : '#FFFFFF',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(0.72rem, 2.9vw, 0.85rem)',
                    color: isSelected
                      ? (isNo ? '#555555' : '#FFFFFF')
                      : '#2C1810',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected && !isNo ? '0 3px 12px rgba(194,59,90,0.3)' : 'none',
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </motion.div>

          {/* Ornamental divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: 180,
            margin: '0 auto',
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '0.9rem' }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(194,59,90,0.45)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: 9999,
              backgroundColor: '#C23B5A',
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)',
              letterSpacing: '0.12em',
              boxShadow: '0 3px 14px rgba(194,59,90,0.32)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? "ЖІБЕРІЛУДЕ..." : "ЖІБЕРУ"}
          </motion.button>
        </form>

        {/* Bottom ornament */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: 180,
            margin: '0 auto',
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C23B5A)' }} />
            <span style={{ color: '#C23B5A', fontSize: '1rem' }}>❀</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C23B5A, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
