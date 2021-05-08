import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addNewSpot } from "./calls";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export const Form = () => {
  //   const [name, setName] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [spotType, setSpotType] = useState("");
  //   const [date, setDate] = useState(new Date());
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

  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20,
      }}
    >
      <form style={{ width: "80%" }} onSubmit={(e) => handleSubmit(e)}>
        <h3>add a new spots</h3>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
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
          <FormLabel component="legend">SpotType</FormLabel>
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
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            name="description"
            id="description"
            multiline
            rows={10}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

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

        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
