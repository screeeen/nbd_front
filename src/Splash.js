import SpotForm from "./SpotForm";
import SpotList from "./SpotList";
import Searchbar from "./Searchbar";
import AppBar from "@material-ui/core/AppBar";

export const Splash = () => {
  return (
    <div className="App">
      <Searchbar />
      <SpotList />
      <AppBar color="transparent" position="static">
        {/* //button refresh */}
        <SpotForm />
      </AppBar>
    </div>
  );
};

export default Splash;
