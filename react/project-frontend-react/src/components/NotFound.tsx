import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1 className="page-title">404 - Page Not Found</h1>
      <p className="page-description">
        The page you are looking for does not exist. Please check
        the URL or return to the homepage.
      </p>
      <Link to="/" className="nav-link">Go to Home</Link>
    </div>
  );
}