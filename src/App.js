import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Form from "./Form";
import SpotList from "./SpotList";

function App() {
  return (
    <div className="App">
      <AppBar color="transparent" position="static">
        <h1>Spots</h1>
        <SpotList />
        <Form></Form>
      </AppBar>
    </div>
  );
}

export default App;
