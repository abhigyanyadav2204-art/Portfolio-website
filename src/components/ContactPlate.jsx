import Button from "./Button.jsx";
import "./ContactPlate.css";

function iconFor(link) {
  if (link.external) return "↗";
  if (link.href.startsWith("mailto:")) return "→";
  return undefined;
}

/** The oversized social/resume buttons used on Home and Side Quests. */
function ContactPlate({ links, resume }) {
  return (
    <div className="contact-plate cluster">
      {links.map((link) => (
        <Button key={link.label} href={link.href} variant="outline" size="lg" iconAfter={iconFor(link)}>
          {link.label}
        </Button>
      ))}

      {resume && (
        <Button
          href={resume.href}
          pending={!resume.ready}
          variant="solid"
          size="lg"
          download={resume.ready ? resume.filename : undefined}
        >
          Résumé
          {!resume.ready && <span className="sr-only"> — coming soon</span>}
        </Button>
      )}
    </div>
  );
}

export default ContactPlate;
