import "./HomePage.css";
import Headings from "./shared/Headings";
export default function HomePage() {
  return (
    <div className="homepage">
      <div className="top">
        <h1>Images</h1>
      </div>
      <div className="content">
        <div className="intro">
          <Headings description='Click any of the links above' />
        </div>
      </div>
    </div>
  );
}
