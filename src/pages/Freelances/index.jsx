import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { useFetch } from "../../utils/hooks";

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
  margin-top: 2em;
  margin-bottom: 2em;
`;

const FreelancesTxtP = styled.p`
  margin-top: 2em;
  margin-bottom: 5em;
`;

const LoaderDiv = styled.div`
display: flex;
justify-content: center;
`;

function Freelances() {

  const { data, isLoading, error} = useFetch("http://localhost:8000/freelances");

 if(error) {
  return <p>Il semblerait qu'une erreur s'est produite.</p>
 }

  return (
    <div>
      <FreelancesTxt>
        <FreelancesTxtH1>Trouvez votre prestataire</FreelancesTxtH1>
        <FreelancesTxtP>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </FreelancesTxtP>
      </FreelancesTxt>
      {isLoading ? (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      ) : (
        <CardsContainer>
          {data.freelancersList.map((profile, index) => (
            <Card key={`${profile.name}-${index}`} profile={profile} />
          ))}
        </CardsContainer>
      )}
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Freelances;
