import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { calls } from "./calls";
import store from "./model/store";
import { setFoundSpot } from "./actions/SpotActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Searchbar() {
  const [search, setSearch] = useState();
  // const [found, setFound] = useState();
  const classes = useStyles();

  // useEffect(() => {}, [found]);

  const handleSearch = (e) => {
    e.preventDefault();

    calls
      .get(`spots/name/${search}`)
      .then((response) => {
        console.log("response", response);
        store.dispatch(setFoundSpot(response.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Input
        defaultValue={search}
        placeholder="Search"
        inputProps={{ "aria-label": "description" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
