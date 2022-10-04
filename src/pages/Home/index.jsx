import "../../styles/_home.css";
import React from "react";
import styled from "styled-components";
import global from "../../utils/Global";

const Imgstyle = styled.img`
  margin-top : 5%;
  margin-bottom : 5%;
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
  background-color: ${global.colors.primary};
  border-radius : 20px;
  width : 15em;
  height : 3em;
  border : none;
`;


function Home() {

  return (
    <HomeDiv className="home">
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
        <HomeBtn>Faire le test</HomeBtn>
      </div>
      <Imgstyle src="/images/home-illustration.svg" alt="image accueil" />
    </HomeDiv>
  );
}

export default Home;
