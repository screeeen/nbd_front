import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { calls } from "./calls";
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
  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("handleSearch", search);
    calls
      .get(`spots/name/${search}`)
      .then((response) => {
        const { data } = response;
        console.log("response", response);
      })
      .catch((err) => console.log(err));
  };

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //     // const { name, value } = event.target;
  //     // const item = { [name]: value };
  //     // const newSpot = { ...spot, ...item };
  //     // console.log(newSpot);
  //     // setSpot(newSpot);
  //     // console.log(spot);
  //   };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Input
        defaultValue="Search"
        inputProps={{ "aria-label": "description" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
