interface RoseDecorationProps {
  width?: number;
  flip?: boolean;
  opacity?: number;
  className?: string;
  count?: number; // 1, 2, or 3 roses
}

const SingleRose = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => {
  const outerPetals = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 72 * Math.PI) / 180;
    const px = x + Math.cos(angle) * 18 * scale;
    const py = y + Math.sin(angle) * 18 * scale;
    return { px, py, angle: i * 72 };
  });

  const innerPetals = Array.from({ length: 5 }, (_, i) => {
    const angle = ((i * 72 + 36) * Math.PI) / 180;
    const px = x + Math.cos(angle) * 10 * scale;
    const py = y + Math.sin(angle) * 10 * scale;
    return { px, py, angle: i * 72 + 36 };
  });

  const stemY = y + 24 * scale;
  const stemEndY = y + 62 * scale;

  const leaf1Cx = x - 13 * scale;
  const leaf1Cy = y + 39 * scale;
  const leaf2Cx = x + 13 * scale;
  const leaf2Cy = y + 52 * scale;

  return (
    <g>
      {/* Stem */}
      <line
        x1={x} y1={stemY}
        x2={x} y2={stemEndY}
        stroke="#3d7a4e"
        strokeWidth={2.2 * scale}
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <ellipse
        cx={leaf1Cx} cy={leaf1Cy}
        rx={9 * scale} ry={4.5 * scale}
        fill="#3d7a4e"
        opacity={0.9}
        transform={`rotate(-35, ${leaf1Cx}, ${leaf1Cy})`}
      />
      {/* Leaf 2 */}
      <ellipse
        cx={leaf2Cx} cy={leaf2Cy}
        rx={9 * scale} ry={4.5 * scale}
        fill="#3d7a4e"
        opacity={0.9}
        transform={`rotate(35, ${leaf2Cx}, ${leaf2Cy})`}
      />
      {/* Outer petals */}
      {outerPetals.map((p, i) => (
        <ellipse
          key={`outer-${i}`}
          cx={p.px} cy={p.py}
          rx={11 * scale} ry={6.5 * scale}
          fill="#C23B5A"
          opacity={0.78}
          transform={`rotate(${p.angle}, ${p.px}, ${p.py})`}
        />
      ))}
      {/* Inner petals */}
      {innerPetals.map((p, i) => (
        <ellipse
          key={`inner-${i}`}
          cx={p.px} cy={p.py}
          rx={7.5 * scale} ry={4.5 * scale}
          fill="#a02848"
          opacity={0.88}
          transform={`rotate(${p.angle}, ${p.px}, ${p.py})`}
        />
      ))}
      {/* Center */}
      <circle cx={x} cy={y} r={5.5 * scale} fill="#7a1f35" />
      {/* Center highlight */}
      <circle cx={x - 1.8 * scale} cy={y - 1.8 * scale} r={2.2 * scale} fill="#e06080" opacity={0.55} />
    </g>
  );
};

const RoseDecoration = ({
  width = 80,
  flip = false,
  opacity = 1,
  className = "",
  count = 1,
}: RoseDecorationProps) => {
  const height = count === 1 ? 95 : count === 2 ? 165 : 240;

  const roses =
    count === 1
      ? [{ x: 40, y: 30, scale: 1 }]
      : count === 2
      ? [{ x: 40, y: 30, scale: 1 }, { x: 40, y: 118, scale: 0.88 }]
      : [
          { x: 40, y: 28, scale: 1 },
          { x: 26, y: 112, scale: 0.82 },
          { x: 54, y: 178, scale: 0.76 },
        ];

  return (
    <svg
      width={width}
      height={(height / 80) * width}
      viewBox={`0 0 80 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
        overflow: "visible",
      }}
    >
      {roses.map((r, i) => (
        <SingleRose key={i} x={r.x} y={r.y} scale={r.scale} />
      ))}
    </svg>
  );
};

export default RoseDecoration;
