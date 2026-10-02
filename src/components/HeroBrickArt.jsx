import "./HeroBrickArt.css";

/**
 * An isometric cluster of bricks mid-assembly, drawn with the brick
 * palette tokens via currentColor + CSS vars. Replaces the 2.32MB
 * hero photo — which, it turned out, wasn't even what its alt text
 * described (a Himalaya trip photo mislabelled as "a neutral-toned
 * creative workspace"). This costs 0 network requests and sits
 * naturally in the black/yellow system instead of fighting it.
 */
function HeroBrickArt({ className = "" }) {
  return (
    <svg
      className={`hero-brick-art ${className}`.trim()}
      viewBox="0 0 440 360"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* falling brick, top */}
      <g className="hero-brick-art__piece hero-brick-art__piece--1">
        <rect x="150" y="18" width="140" height="54" rx="8" fill="var(--brick-azure)" />
        <rect x="150" y="18" width="140" height="10" rx="5" fill="var(--brick-top, #6fa3dd)" opacity="0.6" />
        <circle cx="178" cy="12" r="9" fill="var(--brick-azure)" />
        <circle cx="212" cy="12" r="9" fill="var(--brick-azure)" />
        <circle cx="246" cy="12" r="9" fill="var(--brick-azure)" />
      </g>

      {/* settled stack, left */}
      <g className="hero-brick-art__piece hero-brick-art__piece--2">
        <rect x="46" y="168" width="150" height="56" rx="8" fill="var(--brick-red)" />
        <circle cx="76" cy="162" r="9" fill="var(--brick-red)" />
        <circle cx="110" cy="162" r="9" fill="var(--brick-red)" />
        <circle cx="144" cy="162" r="9" fill="var(--brick-red)" />
        <circle cx="178" cy="162" r="9" fill="var(--brick-red)" />
      </g>

      <g className="hero-brick-art__piece hero-brick-art__piece--3">
        <rect x="46" y="230" width="98" height="56" rx="8" fill="var(--brick-green)" />
        <circle cx="76" cy="224" r="9" fill="var(--brick-green)" />
        <circle cx="110" cy="224" r="9" fill="var(--brick-green)" />
      </g>

      {/* the accent brick, dropping into place on the right */}
      <g className="hero-brick-art__piece hero-brick-art__piece--4">
        <rect x="230" y="120" width="164" height="56" rx="8" fill="var(--c-accent)" />
        <circle cx="262" cy="114" r="9" fill="var(--c-accent)" />
        <circle cx="296" cy="114" r="9" fill="var(--c-accent)" />
        <circle cx="330" cy="114" r="9" fill="var(--c-accent)" />
        <circle cx="364" cy="114" r="9" fill="var(--c-accent)" />
      </g>

      <g className="hero-brick-art__piece hero-brick-art__piece--5">
        <rect x="246" y="182" width="112" height="56" rx="8" fill="var(--brick-orange)" />
        <circle cx="276" cy="176" r="9" fill="var(--brick-orange)" />
        <circle cx="310" cy="176" r="9" fill="var(--brick-orange)" />
      </g>
    </svg>
  );
}

export default HeroBrickArt;
