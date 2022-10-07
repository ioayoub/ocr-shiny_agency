import React, { useContext } from "react";
import { Loader, StyledLink } from "../../utils/Atoms";
import { SurveyContext, ThemeContext } from "../../utils/Context";
import { useFetch } from "../../utils/hooks";
import global from "../../utils/Global";
import styled from "styled-components";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === "light"
      ? global.colors.backgroundLight
      : global.colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 60px;
`;

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === "light" ? global.colors.primary : global.colors.backgroundLight};
  text-transform: capitalize;
`;

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) =>
      theme === "light" ? global.colors.secondary : "#ffffff"};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumbers, index) => {
    const isFirstAnswers = index === 0;
    const separator = isFirstAnswers ? "" : "&";

    return `${previousParams}${separator}a${answerNumbers}=${answers[answerNumbers]}`;
  }, "");
}

const Results = () => {
  const { theme } = useContext(ThemeContext);
  const { answers } = useContext(SurveyContext);

  console.log(answers);

  const queryParams = formatQueryParams(answers);

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  );


  if (error) {
    return <div>Il semberait qu'une erreur s'est produite.</div>;
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {data.resultsData &&
          data.resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {result.title}
              {index === data.resultsData.length - 1 ? "" : ","}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {data.resultsData &&
          data.resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  );
};

export default Results;
