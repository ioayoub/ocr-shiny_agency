import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import globalvar from "../../utils/Global";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { SurveyContext } from "../../utils/Context";
import { useFetch } from "../../utils/hooks";

const SurveyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;

const QuestionTitle = styled.h1`
  text-decoration: underline;
  text-decoration-color: ${globalvar.colors.primary};
  text-align: center;
`;

const QuestionContent = styled.span`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled(Link)`
  padding-top: 30px;
  margin-left: 1em;
  margin-right: 1em;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalvar.colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected
      ? `0px 0px 0px 2px ${globalvar.colors.primary} inset`
      : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Survey = () => {
  // permet de récupérer les paramètres de la route
  let { questionNumber } = useParams();

  const qNum = parseInt(questionNumber);

  const nextNum = qNum <= 10 ? qNum + 1 : 10;
  const prevNum = qNum > 1 ? qNum - 1 : 1;

  const { answers, saveAnswers } = useContext(SurveyContext);

  const { data, isLoading, error } = useFetch(`${globalvar.api}/survey`);
  const { surveyData } = data;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  if (error) {
    return <QuestionContent>Il semberait qu'une erreur s'est produite.</QuestionContent>;
  }

  return (
    <div>
      <QuestionTitle>Question {qNum}</QuestionTitle>
      <QuestionContent>
        {isLoading ? (
          <Loader />
        ) : (
          <>{surveyData && surveyData[questionNumber]}</>
        )}
      </QuestionContent>
      {!isNaN(qNum) && (
        <SurveyContainer>
          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
          <LinkDiv>
            <LinkWrapper to={`/survey/${prevNum}`} disabled={qNum === 1}>
              Précédent
            </LinkWrapper>
            {qNum < 6 && (
              <LinkWrapper to={`/survey/${nextNum}`}>Suivant</LinkWrapper>
            )}

            {qNum === 6 && (
              <LinkWrapper to="/results">Voir les résultats</LinkWrapper>
            )}
          </LinkDiv>
        </SurveyContainer>
      )}
    </div>
  );
};

export default Survey;
