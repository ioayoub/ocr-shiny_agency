import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import globalvar from "../../utils/Global";

const DefaultPicture = `${globalvar.website}/images/profile.png`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15;
  text-decoration: none;
`;
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
  background-color: ${globalvar.colors.backgroundLight};
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

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Card = ({ profile }) => {
  return (
    <CardDiv>
      <CardLink to={`/freelance?id=${profile.id}`} style={{ textDecoration: "none" }}>
        <CardWrapper>
          <CardLabel>{profile.job}</CardLabel>
          <CardImage
            src={profile.picture}
            alt="freelance"
          />
          <CardName>{profile.name}</CardName>
        </CardWrapper>
      </CardLink>
    </CardDiv>
  );
};

Card.defaultProps = {
  label: "",
  picture: DefaultPicture,
  title: "",
};

export default Card;
