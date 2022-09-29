import React from "react";
import styled from "styled-components";
import global from "../../utils/Global";

const DivNotFound = styled.div`
  background-color: ${global.colors.backgroundLight};
  width: 90%;
  height: 50em;
  margin: auto;
`;

const ImgError = styled.img`
  display: block;
  margin: auto;
  padding-top: 1em;
`;

const DivNotFoundH1 = styled.h1`
  text-align: center;
  padding-top: 1em;
`;

const DivNotFoundH2 = styled.h2`
  text-align: center;
  padding-top: 1em;
`;

const NotFound = () => {
  return (
    <DivNotFound>
      <DivNotFoundH1>Oups...</DivNotFoundH1>
      <ImgError src="/images/404.svg" alt="page not found" />
      <DivNotFoundH2>Il semblerait qu'il y ait un problème</DivNotFoundH2>
    </DivNotFound>
  );
};

export default NotFound;
