import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Global stylesheets, in cascade order. These load here and ONLY here.
 *
 * Previously App.css was imported from Home.jsx yet styled all four
 * pages — it worked purely because App.jsx imports every page eagerly,
 * so Home's stylesheet always happened to be in the bundle. Any move to
 * React.lazy would have silently unstyled three pages. Importing
 * globals from the entry point makes the dependency explicit.
 *
 * Component sheets are imported from their own .jsx files and therefore
 * land after these in the bundle, so component rules beat base rules
 * naturally — no !important, no specificity ladder. */
import "./styles/tokens.css";
import "./styles/fonts.css";
import "./styles/reset.css";
import "./styles/base.css";
import "./styles/brick.css";
import "./styles/motion.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
