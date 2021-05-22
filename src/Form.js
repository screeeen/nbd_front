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
import { addNewSpot } from "./calls";

export const Form = () => {
  const [spot, setSpot] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(spot);
    addNewSpot(spot);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const item = { [name]: value };
    const newSpot = { ...spot, ...item };
    console.log(newSpot);
    setSpot(newSpot);
    console.log(spot);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>add a new spots</h3>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Spot name</InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input
            id="location"
            name="location"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">what type of spot?</FormLabel>
          <RadioGroup
            aria-label="spotType"
            name="spotType"
            value={spot.spotType || "something weird"}
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              name="spotType"
              value="stairs"
              control={<Radio />}
              label="stairs"
            />
            <FormControlLabel value="ledge" control={<Radio />} label="ledge" />
            <FormControlLabel
              name="spotType"
              value="handrail"
              control={<Radio />}
              label="handrail"
            />
            <FormControlLabel value="bank" control={<Radio />} label="bank" />
            <FormControlLabel
              name="spotType"
              value="transition"
              control={<Radio />}
              label="transition"
            />
            <FormControlLabel
              name="spotType"
              value="wallride"
              control={<Radio />}
              label="wallride"
            />
            <FormControlLabel
              name={"spotType"}
              value="drop"
              control={<Radio />}
              label="drop"
            />
            <FormControlLabel
              name={"spotType"}
              value="hubba"
              control={<Radio />}
              label="hubba"
            />
          </RadioGroup>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="description">Spot history</InputLabel>
          <Input
            name="description"
            id="description"
            multiline
            rows={10}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <p>There you go with the spot</p>

        {/* <form className={classes.container} noValidate> */}
        {/* <TextField
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
        /> */}
        {/* </form> */}

        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
