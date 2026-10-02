import { site } from "../data/site.js";
import StudDivider from "./StudDivider.jsx";
import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <StudDivider />
      <div className="site-footer__bar container container--wide">
        <span className="mono">© {new Date().getFullYear()} {site.name}</span>
        <a href="#top" className="site-footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
