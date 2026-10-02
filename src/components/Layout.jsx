import { Outlet } from "react-router-dom";
import SkipLink from "./SkipLink.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";

/**
 * Route layout shared by every page. Previously only Home had a
 * header/footer/nav — ProjectPage, SideQuests and NotFound had no
 * landmarks at all. Pages now render sections only; this is the one
 * place <header>/<main>/<footer> exist.
 */
function Layout() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <ScrollToTop />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

export default Layout;
