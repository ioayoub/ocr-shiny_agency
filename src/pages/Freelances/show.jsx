import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import global from "../../utils/Global";

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

const FreelanceShow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [freelance, setFreelance] = useState();

  let profileid = searchParams.get("id");

  useEffect(() => {
    async function getFreelance() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/freelance?id=" + profileid
        );
        setFreelance(response.data.freelanceData);
      } catch (e) {
        console.log(e);
        window.location.href = "/error";
      }
    }
    getFreelance();
  }, []);

  console.log(freelance);

  if (freelance) {
    return (
      <FreelanceDiv>
        <FreelanceAlignDiv>
          <FreelanceImg src={freelance.picture} alt="freelance image" />
        </FreelanceAlignDiv>
        <div style={{marginTop: "auto", marginBottom: "auto"}}>
          <h1>{freelance.name}</h1>
          <h2>{freelance.job}</h2>
          <SkillUl>
            {freelance.skills.map((skill, index) => (
              <SkillLI key={index}>{skill}</SkillLI>
            ))}
          </SkillUl>
          <h3>
            {freelance.available ? (
              <span>Disponible maintenant</span>
            ) : (
              <span>Non disponible</span>
            )}
          </h3>
          <h3>{freelance.tjm} € / Jour</h3>
        </div>
      </FreelanceDiv>
    );
  }

  return (
    <FreelanceDiv>
      <Loader />
    </FreelanceDiv>
  );
};

export default FreelanceShow;
