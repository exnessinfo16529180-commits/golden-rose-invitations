import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import RoseDecoration from "@/components/RoseDecoration";

type AttendingOption = "yes" | "with-spouse" | "no";

const RsvpSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [attending, setAttending] = useState<AttendingOption>("yes");
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(1);
    let formatted = "+7 ";
    if (digits.length > 0) formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += " " + digits.slice(3, 6);
    if (digits.length > 6) formatted += " " + digits.slice(6, 8);
    if (digits.length > 8) formatted += " " + digits.slice(8, 10);
    setPhone(formatted);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Рақмет!",
      description: "Сіздің жауабыңыз қабылданды.",
    });
  };

  if (submitted) {
    return (
      <section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-sm mx-auto text-center space-y-5">
          <div style={{ color: "#D4AF37", fontSize: "2.5rem" }}>✦</div>
          <h3
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2rem, 8vw, 2.8rem)",
              color: "#C23B5A",
            }}
          >
            Рақмет!
          </h3>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.95rem, 3.8vw, 1.05rem)",
              color: "#2C1810",
              lineHeight: 1.7,
            }}
          >
            Сіздің жауабыңыз қабылданды.
          </p>
        </div>
      </section>
    );
  }

  const radioOptions: { value: AttendingOption; label: string }[] = [
    { value: "yes", label: "ҚАТЫСАМЫН" },
    { value: "with-spouse", label: "ЖҰБАЙЫМЕН БОЛАМЫН" },
    { value: "no", label: "ӨКІНІШКЕ ОРАЙ, КЕЛЕ АЛМАЙМЫН" },
  ];

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    border: "1.5px solid rgba(194,59,90,0.35)",
    color: "#2C1810",
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(0.9rem, 3.5vw, 1rem)",
    borderRadius: "0.6rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      className="relative w-full py-10"
      style={{ backgroundColor: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
    >
      <div className="relative mx-auto px-6" style={{ maxWidth: 480 }}>

        {/* Side rose decorations */}
        <div className="absolute left-0 top-0" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={42} count={2} opacity={0.42} />
        </div>
        <div className="absolute right-0 top-0" style={{ pointerEvents: "none" }}>
          <RoseDecoration width={42} count={2} opacity={0.42} flip />
        </div>

        {/* Section header */}
        <div className="text-center mb-7">
          <p
            className="uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.72rem, 2.8vw, 0.85rem)",
              color: "#2C1810",
              letterSpacing: "0.14em",
              lineHeight: 1.85,
            }}
          >
            ТОЙҒА ҚАТЫСУЫҢЫЗДЫ<br />РАСТАУЫҢЫЗДЫ СҰРАЙМЫЗ:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name field */}
          <div>
            <label
              className="block mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(0.8rem, 3.2vw, 0.9rem)",
                color: "#2C1810",
                opacity: 0.75,
                letterSpacing: "0.05em",
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
          </div>

          {/* Phone field */}
          <div>
            <label
              className="block mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(0.8rem, 3.2vw, 0.9rem)",
                color: "#2C1810",
                opacity: 0.75,
                letterSpacing: "0.05em",
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
          </div>

          {/* Attendance radio options */}
          <div className="space-y-3 pt-1">
            {radioOptions.map((option) => {
              const isSelected = attending === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAttending(option.value)}
                  className="w-full py-3 px-4 rounded-xl transition-all duration-250 text-left flex items-center gap-3"
                  style={{
                    border: `1.5px solid ${isSelected ? "#C23B5A" : "rgba(194,59,90,0.25)"}`,
                    backgroundColor: isSelected ? "rgba(194,59,90,0.08)" : "#FFFFFF",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(0.75rem, 2.9vw, 0.88rem)",
                    color: isSelected ? "#C23B5A" : "#2C1810",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                  }}
                >
                  {/* Radio circle */}
                  <span
                    style={{
                      display: "inline-block",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `2px solid ${isSelected ? "#C23B5A" : "rgba(194,59,90,0.4)"}`,
                      backgroundColor: isSelected ? "#C23B5A" : "transparent",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {isSelected && (
                      <span
                        style={{
                          display: "block",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#FFFFFF",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    )}
                  </span>
                  <span className="font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>

          {/* Ornamental divider */}
          <div className="ornamental-divider max-w-[180px] mx-auto py-1">
            <span style={{ color: "#D4AF37", fontSize: "0.9rem" }}>✦</span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              backgroundColor: "#C23B5A",
              color: "#FFFFFF",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.9rem, 3.5vw, 1.05rem)",
              letterSpacing: "0.12em",
              boxShadow: "0 3px 14px rgba(194,59,90,0.32)",
              border: "none",
              cursor: "pointer",
            }}
          >
            ЖІБЕРУ
          </button>
        </form>

        {/* Bottom ornament */}
        <div className="ornamental-divider max-w-[180px] mx-auto mt-8">
          <span style={{ color: "#C23B5A", fontSize: "1rem" }}>❀</span>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
