import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "./context/appContext.js";
import "./Search.css";
import Headings from "./shared/Headings.js";
import LoadResult from "./shared/LoadResults.js";
export default function Search() {
  const { search, searchResult } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyWord] = useState();
  return (
    <div className="search">
      <div className="top">
        <Link to="/giphy-api-integration">home</Link>
      </div>
      <div className="content">
        <div className="headings">
          <Headings description="Search For Giphy" />
        </div>
        <div className="searchbox">
          <input type="text" onChange={(e) => setKeyWord(e.target.value)} />
          <button onClick={() => search(keyword)}>Search</button>
        </div>
        <div className="search-result">
          <LoadResult result={searchResult} page={loading} />
        </div>
      </div>
    </div>
  );
}
