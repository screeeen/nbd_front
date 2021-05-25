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

  return (
    <>
      <div style={divStyle}>
        <h3 style={pStyle}>{name}</h3>
        <h5 style={pStyle}>{location}</h5>
        <p style={pBlue}>{spotType}</p>
        <p style={pStyle}>{description}</p>
      </div>
    </>
  );
};

export default SpotCard;
