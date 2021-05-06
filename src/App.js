import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Form from "./Form";
import { getAllSpots } from "./calls";

function App() {
  const spots = getAllSpots();
  // console.log(spots);

  return (
    <div className="App">
      {" "}
      <AppBar color="transparent" position="static">
        <h1>spots</h1>
        <Form></Form>
      </AppBar>
    </div>
  );
}

export default App;
