import "../../styles/_home.css";
import React from "react";
import styled from "styled-components";
import { globalvar }  from "../../utils/Global";
import { useTheme } from "../../utils/hooks/theme";
import { Link } from "react-router-dom";

const Imgstyle = styled.img`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const HomeDiv = styled.div`
  background-color: #f9f9fc;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
  margin-top: 5%;
`;

const HomeTitle = styled.h1`
  margin-top: 25%;
  font-size: 3em;
`;

const HomeBtn = styled.button`
  color: #fff;
  background-color: ${globalvar.colors.primary};
  border-radius: 20px;
  width: 15em;
  height: 3em;
  border: none;
  cursor: pointer;
`;

export function sum(a, b) {
  return a + b;
}

function Home() {
  const theme = useTheme();
  console.log(theme);

  return (
    <HomeDiv className="home">
      {sum(40,2)}
      <div className="home_txt">
        <HomeTitle>
          Récupérez vos besoins,
          <br />
          on s'occupe du reste,
          <br />
          avec les meilleurs
          <br />
          talents
        </HomeTitle>
        <Link to="/survey/1">
          <HomeBtn>Faire le test</HomeBtn>
        </Link>
      </div>
      <Imgstyle src="/images/home-illustration.svg" alt="image accueil" />
    </HomeDiv>
  );
}

export default Home;
