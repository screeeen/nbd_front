import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Splash from "./Splash";

function App() {
  // const { spots } = useSelector((state) => state);
  // const { spots } = store.getState((state) => state);

  return (
    <BrowserRouter>
      <div className="App">
        <h2>nbd archive</h2>
        <h6>---- ◊◊◊◊ ----</h6>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/" component={Splash} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
