import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import global from "../../utils/Global";
import { useFetch } from "../../utils/hooks";

const FreelanceDiv = styled.div`
  width: 90%;
  background-color: ${global.colors.backgroundLight};
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 5%;
  height: 25em;
`;
const FreelanceAlignDiv = styled.div`
  display: flex;
  align-items: center;
`;
const FreelanceImg = styled.img`
  height: 15em;
  width: 15em;
  border-radius: 50%;
  margin: auto;
`;

const SkillUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
`;

const SkillLI = styled.li`
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid black;
`;

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FreelanceShow = () => {
  const [searchParams] = useSearchParams();
  let profileid = searchParams.get("id");
  const { data, isLoading, error} = useFetch("http://127.0.0.1:8000/freelance?id=" + profileid)
  // const [freelance, setFreelance] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  console.log(data);


  if(error) {
    return(
      <FreelanceDiv>Une erreur s'est produite lors de la récupération du profil du freelance.</FreelanceDiv>
    )
  }

  return (
    <div>
      {isLoading ? (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      ) : (
        <FreelanceDiv>
          <FreelanceAlignDiv>
            <FreelanceImg src={data.freelanceData.picture} alt="freelance image" />
          </FreelanceAlignDiv>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <h1>{data.freelanceData.name}</h1>
            <h2>{data.freelanceData.job}</h2>
            <SkillUl>
              {data.freelanceData.skills.map((skill, index) => (
                <SkillLI key={index}>{skill}</SkillLI>
              ))}
            </SkillUl>
            <h3>
              {data.freelanceData.available ? (
                <span>Disponible maintenant</span>
              ) : (
                <span>Non disponible</span>
              )}
            </h3>
            <h3>{data.freelanceData.tjm} € / Jour</h3>
          </div>
        </FreelanceDiv>
      )}
    </div>
  );
};

export default FreelanceShow;
