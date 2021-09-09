import { Link } from "react-router-dom";
import "./Headings.css";

export default function Headings({ description }) {
  return (
    <div>
      <h1>Giphy API Integration</h1>
      <p>
        <span>
          <Link to="/giphy-api-integration/trending">Trending</Link>
        </span>{" "}
        <span>|</span>
        <span>
          <Link to="/giphy-api-integration/search">Search</Link>
        </span>
      </p>
      <h4>{description }</h4>
    </div>
  );
}
