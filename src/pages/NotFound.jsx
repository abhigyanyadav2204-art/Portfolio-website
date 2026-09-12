import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <p className="project-eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="project-intro">
          The page you are looking for does not exist.
        </p>
      </section>

      <Link to="/">← Back home</Link>
    </main>
  );
}

export default NotFound;
