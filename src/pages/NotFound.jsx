import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import Button from "../components/Button.jsx";
import "./NotFound.css";

function NotFound() {
  useDocumentMeta({
    title: "Page not found — Abhigyan Yadav",
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <section className="not-found section">
      <div className="container container--prose">
        <div className="not-found__brick brick" aria-hidden="true">
          <div className="brick__body">
            <span className="brick__studs" aria-hidden="true" />
          </div>
        </div>

        <p className="eyebrow">404</p>
        <h1 className="not-found__title display">Missing brick.</h1>
        <p className="not-found__copy">
          The page you're looking for doesn't exist, or the piece moved somewhere else.
        </p>
        <Button to="/" variant="solid" iconAfter="→">
          Back home
        </Button>
      </div>
    </section>
  );
}

export default NotFound;
