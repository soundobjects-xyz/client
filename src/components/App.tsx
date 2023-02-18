import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home, {Banner} from "../pages/Home"
import About from "../pages/About";
import ClientDetail from "../pages/ClientDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Banner />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/client/:id">
          <ClientDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
