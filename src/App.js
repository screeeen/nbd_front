import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import SpotForm from "./SpotForm";
import SpotList from "./SpotList";
import Searchbar from "./Searchbar";
// import store from "./model/store";
// import { useSelector } from "react-redux";

function App() {
  // const { spots } = useSelector((state) => state);
  // const { spots } = store.getState((state) => state);

  return (
    <div className="App">
      <h2>nbd archive</h2>
      <h6>---- ◊◊◊◊ ----</h6>
      <Searchbar />
      <SpotList />
      <AppBar color="transparent" position="static">
        {/* //button refresh */}
        <SpotForm />
      </AppBar>
    </div>
  );
}

export default App;
