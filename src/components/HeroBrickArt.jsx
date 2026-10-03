import "./HeroBrickArt.css";

/**
 * An isometric brick stack with a small caped, brick-built figure
 * standing over it — an original silhouette (cowl, cape, belt, boxy
 * minifig-style body), not a likeness of any copyrighted character.
 * Drawn with the brick palette tokens via currentColor + CSS vars.
 * Replaces the 2.32MB hero photo — which, it turned out, wasn't even
 * what its alt text described (a Himalaya trip photo mislabelled as
 * "a neutral-toned creative workspace"). This costs 0 network
 * requests and sits naturally in the black/yellow system instead of
 * fighting it.
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

      {/* the builder: a small caped figure, assembled from the same
          brick primitives as everything else (a stud-topped torso
          brick, rounded limb bricks), landing last — as if it stepped
          in once the stack on the left was finished. */}
      <g className="hero-brick-art__piece hero-brick-art__piece--6">
        {/* cape — wide at the hem, a few jagged points */}
        <path
          d="M268 108
             C 250 140, 244 190, 252 246
             L 270 232 L 282 248 L 296 230 L 310 248 L 322 232 L 336 246
             C 342 190, 336 140, 320 108
             Z"
          fill="var(--brick-slate)"
        />

        {/* legs */}
        <rect x="272" y="206" width="20" height="46" rx="6" fill="var(--brick-slate)" />
        <rect x="298" y="206" width="20" height="46" rx="6" fill="var(--brick-slate)" />

        {/* torso brick, with studs on top like every other piece here */}
        <rect x="264" y="150" width="64" height="62" rx="8" fill="var(--brick-slate)" />
        <circle cx="282" cy="144" r="8" fill="var(--brick-slate)" />
        <circle cx="310" cy="144" r="8" fill="var(--brick-slate)" />

        {/* utility belt + chest emblem — the only two accent marks */}
        <rect x="264" y="196" width="64" height="10" fill="var(--c-accent)" />
        <circle cx="296" cy="178" r="7" fill="var(--c-accent)" />

        {/* arms */}
        <rect x="244" y="156" width="18" height="44" rx="8" fill="var(--brick-slate)" />
        <rect x="330" y="156" width="18" height="44" rx="8" fill="var(--brick-slate)" />

        {/* cowl — rounded head with two pointed ears, no face detail */}
        <path
          d="M278 98 L286 72 L294 92 L302 68 L310 98
             a18 18 0 1 1 -32 0 Z"
          fill="var(--brick-slate)"
        />
      </g>
    </svg>
  );
}

export default HeroBrickArt;
