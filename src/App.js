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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </ContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
