import React from "react";
import styled from "styled-components";
import global from "../../utils/Global";

const DefaultPicture = `${global.website}/images/profile.png`;

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
  margin-top: 2em;
  margin: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${global.colors.backgroundLight};
  border-radius: 30px;
  width: 20em;
  height: 20em;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardName = styled.span`
  text-align: center;
  font-size: 1.2em;
`;

const Card = ({ label, title, picture }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" height={80} width={80} />
        <CardName>{title}</CardName>
      </CardWrapper>
    </div>
  );
};

Card.defaultProps = {
  label: "",
  picture: DefaultPicture,
  title: "",
};

export default Card;
