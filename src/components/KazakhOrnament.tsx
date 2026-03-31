const KazakhOrnamentBg = () => {
  const ROSE = '#C23B5A';
  const GOLD = '#D4AF37';

  // Generate repeating diamond border elements along top and bottom
  const topDiamonds = Array.from({ length: 14 }, (_, i) => {
    const cx = (i + 0.5) * (390 / 14);
    return (
      <g key={`top-${i}`} opacity="0.10">
        <polygon
          points={`${cx},4 ${cx + 10},14 ${cx},24 ${cx - 10},14`}
          fill={i % 2 === 0 ? GOLD : ROSE}
        />
        <line x1={cx - 10} y1={14} x2={cx + 10} y2={14} stroke={GOLD} strokeWidth="0.5" opacity="0.5" />
      </g>
    );
  });

  const bottomDiamonds = Array.from({ length: 14 }, (_, i) => {
    const cx = (i + 0.5) * (390 / 14);
    return (
      <g key={`bot-${i}`} opacity="0.10">
        <polygon
          points={`${cx},820 ${cx + 10},830 ${cx},840 ${cx - 10},830`}
          fill={i % 2 === 0 ? GOLD : ROSE}
        />
        <line x1={cx - 10} y1={830} x2={cx + 10} y2={830} stroke={GOLD} strokeWidth="0.5" opacity="0.5" />
      </g>
    );
  });

  // Ram's horn (қошқар мүйіз) S-curve spiral elements along sides
  const leftHorns = Array.from({ length: 8 }, (_, i) => {
    const y = 80 + i * 90;
    return (
      <g key={`lh-${i}`} opacity="0.09">
        <path
          d={`M 10,${y} q 15,-18 30,0 q 15,18 30,0`}
          fill="none"
          stroke={i % 2 === 0 ? ROSE : GOLD}
          strokeWidth="1.5"
        />
        <path
          d={`M 10,${y + 12} q 15,-18 30,0 q 15,18 30,0`}
          fill="none"
          stroke={i % 2 === 0 ? GOLD : ROSE}
          strokeWidth="1"
        />
      </g>
    );
  });

  const rightHorns = Array.from({ length: 8 }, (_, i) => {
    const y = 80 + i * 90;
    return (
      <g key={`rh-${i}`} opacity="0.09">
        <path
          d={`M 390,${y} q -15,-18 -30,0 q -15,18 -30,0`}
          fill="none"
          stroke={i % 2 === 0 ? ROSE : GOLD}
          strokeWidth="1.5"
        />
        <path
          d={`M 390,${y + 12} q -15,-18 -30,0 q -15,18 -30,0`}
          fill="none"
          stroke={i % 2 === 0 ? GOLD : ROSE}
          strokeWidth="1"
        />
      </g>
    );
  });

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 390 844"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top border ornament - repeating diamonds */}
        {topDiamonds}

        {/* Bottom border ornament */}
        {bottomDiamonds}

        {/* Left side ram's horn patterns */}
        {leftHorns}

        {/* Right side ram's horn patterns */}
        {rightHorns}

        {/* Top-left corner ornament - large decorative diamond */}
        <g opacity="0.08">
          <polygon points="0,0 60,0 0,60" fill={ROSE} />
          <polygon points="10,0 50,0 0,40 0,10" fill={GOLD} opacity="0.5" />
          <polygon points="20,5 40,5 5,40" fill="none" stroke={GOLD} strokeWidth="1" />
          {/* Inner detail diamond */}
          <polygon points="25,0 35,10 25,20 15,10" fill={GOLD} opacity="0.7" />
        </g>

        {/* Top-right corner ornament */}
        <g opacity="0.08">
          <polygon points="390,0 330,0 390,60" fill={ROSE} />
          <polygon points="380,0 340,0 390,40 390,10" fill={GOLD} opacity="0.5" />
          <polygon points="370,5 350,5 385,40" fill="none" stroke={GOLD} strokeWidth="1" />
          <polygon points="365,0 375,10 365,20 355,10" fill={GOLD} opacity="0.7" />
        </g>

        {/* Bottom-left corner ornament */}
        <g opacity="0.08">
          <polygon points="0,844 60,844 0,784" fill={ROSE} />
          <polygon points="10,844 50,844 0,804 0,834" fill={GOLD} opacity="0.5" />
          <polygon points="20,839 40,839 5,804" fill="none" stroke={GOLD} strokeWidth="1" />
          <polygon points="25,844 35,834 25,824 15,834" fill={GOLD} opacity="0.7" />
        </g>

        {/* Bottom-right corner ornament */}
        <g opacity="0.08">
          <polygon points="390,844 330,844 390,784" fill={ROSE} />
          <polygon points="380,844 340,844 390,804 390,834" fill={GOLD} opacity="0.5" />
          <polygon points="370,839 350,839 385,804" fill="none" stroke={GOLD} strokeWidth="1" />
          <polygon points="365,844 375,834 365,824 355,834" fill={GOLD} opacity="0.7" />
        </g>

        {/* Central subtle watermark - large diamond grid pattern */}
        <g opacity="0.04">
          {/* Diagonal diamond grid */}
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => {
              const cx = 60 + col * 90;
              const cy = 180 + row * 120;
              return (
                <g key={`grid-${row}-${col}`}>
                  <polygon
                    points={`${cx},${cy - 30} ${cx + 20},${cy} ${cx},${cy + 30} ${cx - 20},${cy}`}
                    fill="none"
                    stroke={row % 2 === 0 ? ROSE : GOLD}
                    strokeWidth="1.5"
                  />
                  <polygon
                    points={`${cx},${cy - 15} ${cx + 10},${cy} ${cx},${cy + 15} ${cx - 10},${cy}`}
                    fill={row % 2 === 0 ? GOLD : ROSE}
                  />
                </g>
              );
            })
          )}
        </g>

        {/* Thin border lines along edges */}
        <line x1="0" y1="30" x2="390" y2="30" stroke={GOLD} strokeWidth="0.5" opacity="0.07" />
        <line x1="0" y1="814" x2="390" y2="814" stroke={GOLD} strokeWidth="0.5" opacity="0.07" />
        <line x1="50" y1="0" x2="50" y2="844" stroke={GOLD} strokeWidth="0.5" opacity="0.05" />
        <line x1="340" y1="0" x2="340" y2="844" stroke={GOLD} strokeWidth="0.5" opacity="0.05" />
      </svg>
    </div>
  );
};

export default KazakhOrnamentBg;
