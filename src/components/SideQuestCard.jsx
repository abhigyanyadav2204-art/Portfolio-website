import Reveal from "./Reveal.jsx";
import SizeChip from "./SizeChip.jsx";
import "./SideQuestCard.css";

/**
 * A side quest, rendered as a brick like the main work stack but
 * non-interactive (no case study to link to) and laid out as a loose
 * scattered parts tray rather than a stack.
 */
function SideQuestCard({ quest, index }) {
  return (
    // The tilt lives on this wrapper, not the <Reveal> element below.
    // Reveal's snap keyframes own `transform` on their own target (the
    // 100% keyframe resolves to `transform: none`), so a static rotate
    // set on that same element would be silently overwritten once the
    // animation finishes. Two elements, two independent transforms.
    <div className="side-quest-card-tilt">
      <Reveal
        as="article"
        variant="snap"
        stagger={index}
        className="side-quest-card brick"
        style={{ "--brick": quest.brick.color, "--brick-ink": quest.brick.ink }}
      >
        <div className="side-quest-card__body brick__body">
          <span className="brick__studs" aria-hidden="true" />

          <div className="side-quest-card__face">
            <div className="side-quest-card__top">
              <SizeChip size={quest.brick.size} />
              <span className="side-quest-card__kind mono">{quest.kind}</span>
            </div>

            <h3 className="side-quest-card__title">{quest.title}</h3>

            {quest.image && (
              // No width/height attrs — these range from square to tall
              // portrait to landscape (see SideQuestCard.css), so one
              // hardcoded box would misreport most of their ratios.
              <img
                src={quest.image}
                alt={quest.imageAlt}
                className="side-quest-card__image"
                loading="lazy"
                decoding="async"
              />
            )}

            <p className="side-quest-card__blurb">{quest.blurb}</p>
            <p className="side-quest-card__role mono">{quest.role}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default SideQuestCard;
