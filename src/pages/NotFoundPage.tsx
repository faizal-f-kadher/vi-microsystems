import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="not-found" id="top">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page is outside the system.</h1>
      <p>The requested page may have moved or is no longer available.</p>
      <Link className="button button--primary" to="/">
        <span>Return home</span>
        <b aria-hidden="true">→</b>
      </Link>
    </main>
  );
}
