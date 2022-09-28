import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
const DefaultPicture = "https127.0.0.1:3000/profile.png";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const Card = ({ label, title, picture }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" height={80} width={80} />
        <span>{title}</span>
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
