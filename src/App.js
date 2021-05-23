import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Form from "./Form";
import SpotList from "./SpotList";
import Searchbar from "./Searchbar";

function App() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="App">
      <h2>nbd archive</h2>
      <h6>---- ◊◊◊◊ ----</h6>
      <Searchbar />
      <AppBar color="transparent" position="static">
        {/* //button refresh */}
        <Form />
        <h6>some random epic spots</h6>
        <SpotList />
        <button onClick={() => setRefresh(true)}> refresh </button>
      </AppBar>
    </div>
  );
}

export default App;
