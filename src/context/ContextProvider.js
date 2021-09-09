import axios from "axios";
import React, { useEffect, useState } from "react";
import { appContext } from "./appContext";

function ContextProvider({ children }) {
  const [trendingGif, setTrendingGif] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=BBllUXSslRRw4234LL4rT5VfMbKLLG6A"
      )
      .then((response) => {
        setTrendingGif(response.data.data);
      });
  }, []);

  const search = (keyword) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=BBllUXSslRRw4234LL4rT5VfMbKLLG6A`
      )
      .then((response) => {
        setSearchResult(response.data.data);
      });
  };
  
  const value = {
    trendingGif,
    searchResult,
    search,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default ContextProvider;
