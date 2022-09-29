import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import styled from "styled-components";
import global from "../../utils/Global";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  width: 50%;
  margin: auto;
 
`;

const FreelancesTxt = styled.div`
  text-align: center;
`;

const FreelancesTxtH1 = styled.h1`
  margin-top : 2em;
  margin-bottom : 2em;
`;

const FreelancesTxtP = styled.p`
  margin-top : 2em;
  margin-bottom : 5em;
`;


const Freelances = () => {
  const DefaultPicture = `${global.website}/images/profile.png`;

  const freelanceProfiles = [
    {
      name: "Jane Doe",
      jobTitle: "Devops",
      picture: DefaultPicture,
    },
    {
      name: "John Doe",
      jobTitle: "Developpeur frontend",
      picture: DefaultPicture,
    },
    {
      name: "Jeanne Biche",
      jobTitle: "Développeuse Fullstack",
      picture: DefaultPicture,
    },
    {
      name: "Maurice Dupont",
      jobTitle: "Développeuse Fullstack",
      picture: DefaultPicture,
    },
  ];

  return (
    <div>
      <FreelancesTxt>
        <FreelancesTxtH1>Trouvez votre prestataire</FreelancesTxtH1>
        <FreelancesTxtP>Chez Shiny nous réunissons les meilleurs profils pour vous.</FreelancesTxtP>
      </FreelancesTxt>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Freelances;
