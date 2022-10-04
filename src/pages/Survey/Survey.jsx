import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import global from "../../utils/Global";
import axios from "axios";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { SurveyContext } from "../../utils/Context";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const QuestionTitle = styled.h1`
  text-decoration: underline;
  text-decoration-color: ${global.colors.primary};
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
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected
      ? `0px 0px 0px 2px ${global.colors.primary} inset`
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

  const [questions, setQuestions] = useState();

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  useEffect(() => {
    async function fetchSurvey() {
      try {
        const response = await axios.get(`${global.api}/survey`);
        setQuestions(response);
      } catch (e) {
        console.error(e);
      } finally {
        //...
      }
    }
    fetchSurvey();
  }, []);

  const { answers, saveAnswers } = useContext(SurveyContext);

  return (
    <div>
      <QuestionTitle>Question {qNum}</QuestionTitle>
      <QuestionContent>
        {questions ? questions.data.surveyData[qNum] : <Loader />}
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

          <LinkWrapper to={`/survey/${prevNum}`} disabled={qNum === 1}>
            Précédent
          </LinkWrapper>
          {qNum < 10 && (
            <LinkWrapper to={`/survey/${nextNum}`}>Suivant</LinkWrapper>
          )}

          {qNum === 10 && (
            <LinkWrapper to="/results">Voir les résultats</LinkWrapper>
          )}
        </SurveyContainer>
      )}
    </div>
  );
};

export default Survey;
