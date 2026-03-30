import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const RsvpSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [phone, setPhone] = useState("+7 ");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (val: string) => {
    // Keep +7 prefix, allow only digits after
    const digits = val.replace(/\D/g, "").slice(1); // remove leading 7
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
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-4">
          <div className="text-5xl mb-4">✦</div>
          <h3
            className="text-2xl md:text-3xl"
            style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}
          >
            Рақмет!
          </h3>
          <p className="text-lg" style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}>
            Сіздің жауабыңыз қабылданды.
          </p>
        </div>
      </section>
    );
  }

  const inputStyle = {
    backgroundColor: 'rgba(253, 248, 240, 0.8)',
    borderColor: '#D4AF37',
    color: '#2C1810',
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-md mx-auto">
        <h3
          className="text-2xl md:text-3xl text-center mb-10"
          style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}
        >
          Қатысуыңызды растаңыз
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 tracking-wide" style={{ color: '#2C1810', opacity: 0.7 }}>
              Аты-жөніңіз
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 transition-all"
              style={{ ...inputStyle, '--tw-ring-color': '#D4AF37' } as any}
            />
          </div>

          {/* Guest count */}
          <div>
            <label className="block text-sm mb-2 tracking-wide" style={{ color: '#2C1810', opacity: 0.7 }}>
              Келетін адам саны
            </label>
            <input
              type="number"
              min={1}
              max={10}
              required
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 transition-all"
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 tracking-wide" style={{ color: '#2C1810', opacity: 0.7 }}>
              Телефон нөміріңіз
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 transition-all"
              style={inputStyle}
              placeholder="+7 777 123 45 67"
            />
          </div>

          {/* Attendance radio */}
          <div className="flex gap-4 justify-center pt-2">
            <button
              type="button"
              onClick={() => setAttending("yes")}
              className="flex-1 py-3 rounded-full border-2 transition-all duration-300 text-base"
              style={{
                borderColor: '#D4AF37',
                backgroundColor: attending === "yes" ? '#D4AF37' : 'transparent',
                color: attending === "yes" ? '#1a0f0a' : '#D4AF37',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Келемін ✦
            </button>
            <button
              type="button"
              onClick={() => setAttending("no")}
              className="flex-1 py-3 rounded-full border-2 transition-all duration-300 text-base"
              style={{
                borderColor: '#C41E3A',
                backgroundColor: attending === "no" ? '#C41E3A' : 'transparent',
                color: attending === "no" ? '#FDF8F0' : '#C41E3A',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Бара алмаймын ✧
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              backgroundColor: '#D4AF37',
              color: '#1a0f0a',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Жіберу
          </button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
