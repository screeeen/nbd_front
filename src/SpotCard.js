import { Link } from "react-router-dom";

export const SpotCard = ({ spot }) => {
  const { name, location, spotType, description } = spot;

  const pStyle = { textAlign: "left", paddingLeft: "20px" };
  const pBlue = { textAlign: "left", paddingLeft: "20px", color: "blue" };
  const divStyle = {
    border: "1px solid lightblue",
    borderRadius: "5px",
    margin: "10px",
    width: "90%",
  };

  const openCard = () => console.log("hello again"); //history.push("/name/:name");

  return (
    <Link to={`spots/name/${name}`} style={divStyle}>
      <h3 style={pStyle}>{name}</h3>
      <h5 style={pStyle}>{location}</h5>
      <p style={pBlue}>{spotType}</p>
      <p style={pStyle}>{description}</p>
    </Link>
  );
};

export default SpotCard;
