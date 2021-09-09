import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./context/ContextProvider";
import HomePage from "./HomePage";
import Search from "./Search";
import Trending from "./Trending";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ContextProvider>
          <Switch>
            <Route exact path="/giphy-api-integration" component={HomePage} />
            <Route exact path="/giphy-api-integration/trending" component={Trending} />
            <Route exact path="/giphy-api-integration/search" component={Search} />
          </Switch>
        </ContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
