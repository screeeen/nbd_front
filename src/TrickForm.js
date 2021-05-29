import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export const TrickForm = () => {
  const [trick, setTrick] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // addNewSpot(spot);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const item = { [name]: value };
    const newTrick = { ...trick, ...item };
    console.log(newTrick);
    setTrick(newTrick);
    console.log(trick);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>add a new trick</h3>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Trick name</InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="skater">Trick name</InputLabel>
          <Input
            id="skater"
            skater="skater"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        {/* //name,skater,year,referenceURL */}

        {/* <form className={classes.container} noValidate> */}
        <TextField
          name="date"
          id="date"
          label="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e)}
        />
        {/* </form> */}
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="referenceURL">Trick name</InputLabel>
          <Input
            id="referenceURL"
            referenceURL="referenceURL"
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
