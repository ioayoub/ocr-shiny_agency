import React from "react";
const DefaultPicture = "https127.0.0.1:3000/profile.png";

const Card = ({ label, title, picture }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  );
};

Card.defaultProps = {
  label: "",
  picture: DefaultPicture,
  title: "",
};

export default Card;
