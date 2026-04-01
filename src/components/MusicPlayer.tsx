import { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  // Start on first user interaction anywhere on the page
  useEffect(() => {
    const tryPlay = () => {
      if (started) return;
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => {
        setPlaying(true);
        setStarted(true);
      }).catch(() => {});
    };

    window.addEventListener("touchstart", tryPlay, { once: true });
    window.addEventListener("click", tryPlay, { once: true });
    return () => {
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, [started]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setStarted(true);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={import.meta.env.BASE_URL + "music.mp3"}
        loop
        preload="auto"
      />

      {/* Floating button */}
      <button
        onClick={toggle}
        title={playing ? "Музыканы өшіру" : "Музыканы қосу"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 1000,
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: "rgba(194,59,90,0.85)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(212,175,55,0.6)",
          color: "#D4AF37",
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(194,59,90,0.4)",
          transition: "transform 0.2s, opacity 0.2s",
        }}
      >
        {playing ? "🎵" : "🔇"}
      </button>
    </>
  );
};

export default MusicPlayer;
