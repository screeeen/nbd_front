import TrickForm from "./TrickForm";

export const SpotCard = ({ spot }) => {
  const { name, location, spotType, description, _id, tricks } = spot;

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
    <div style={divStyle}>
      <h3 style={pStyle}>{name}</h3>
      <h5 style={pStyle}>{location}</h5>
      <p style={pBlue}>{spotType}</p>
      <p style={pStyle}>{description}</p>
      <h5>Tricks Archive</h5>
      {tricks.map((trick, i) => {
        return (
          <div key={trick.name + i}>
            <p>{trick.name}</p>
            <p>{trick.skater}</p>
            <p>{trick.date}</p>
          </div>
        );
      })}
      <TrickForm spot_Id={_id} />
    </div>
  );
};

export default SpotCard;
