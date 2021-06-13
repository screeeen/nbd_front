import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import { addNewTrick } from "./calls";

export const TrickForm = ({ spot_Id }) => {
  const [trick, setTrick] = useState({ spot_Id });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trick);

    addNewTrick(trick);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const item = { [name]: value };
    const newTrick = { ...trick, ...item };
    setTrick(newTrick);
  };

  const divStyle = {
    border: "1px solid lightblue",
    borderRadius: "5px",
    margin: "10px",
    width: "90%",
  };

  return (
    <div style={divStyle}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>add a new trick</h3>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Trick name</InputLabel>
          <Input
            name="name"
            id="name"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="skater">Skater</InputLabel>
          <Input
            name="skater"
            id="skater"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <TextField
          name="date"
          id="date"
          label="date"
          type="date"
          defaultValue="2017-05-24"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e)}
        />

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="referenceURL">reference</InputLabel>
          <Input
            name="referenceURL"
            label="referenceURL"
            id="referenceURL"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <p>There you go with the trick</p>
        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
};

export default TrickForm;
