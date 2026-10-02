import { useScrollProgress } from "../hooks/useScrollProgress.js";
import "./ScrollProgress.css";

/** A fixed stud-rail along the left edge that fills as the page scrolls. */
function ScrollProgress() {
  useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__fill" />
    </div>
  );
}

export default ScrollProgress;
