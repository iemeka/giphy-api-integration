import { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "./context/appContext";
import Headings from "./shared/Headings";
import LoadResult from "./shared/LoadResults";
import "./Trending.css";

export default function Trending() {
  const { trendingGif } = useContext(appContext);
  console.log(trendingGif);
  return (
    <div className="trending">
      <div className="top">  <Link to="/giphy-api-integration">home</Link>Trending</div>
      <div className="heading">
       <Headings description="Trending List Of Giphy" />
      </div>
      <div className="content">
        <LoadResult result={trendingGif} page={true} />
      </div>
    </div>
  );
}
