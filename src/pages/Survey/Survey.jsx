import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import global from "../../utils/Global";
import axios from "axios";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";

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
  margin-right : 1em;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const Survey = () => {
  // permet de récupérer la route actuelle et faire un routing nested
  //Exemple : /survey/1
  // let path = useLocation();

  // <BrowserRouter>
  // <Routes>
  //     <Route path="/" element= {{path} + "/"} />
  //     <Route path="/test" element={{path} + "/test"} />
  //     <Route path="*" element={<h1>Page not Found</h1>} />
  // </Routes>
  // </BrowserRouter>

  // permet de récupérer les paramètres de la route
  let { questionNumber } = useParams();

  const qNum = parseInt(questionNumber);

  const nextNum = qNum <= 10 ? qNum + 1 : 10;
  const prevNum = qNum > 1 ? qNum - 1 : 1;

  const [surveyData, setSurveyData] = useState([{}]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [questions, setQuestions] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`${global.api}/survey`)
  //     .then((data) => {
  //       if (data && questions !== data) {
  //         setQuestions(data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

useEffect(() => {
  async function fetchSurvey() {
    try {
      const response =  await axios.get(`${global.api}/survey`)
      setQuestions(response);
      } catch(e) {
        console.error(e)
      } finally {
        //...
      }
    }
    fetchSurvey();
  }, []);

    return (
    <div>
      <QuestionTitle>Question {qNum}</QuestionTitle>
      <QuestionContent>
        {questions ? questions.data.surveyData[qNum] : <Loader />}
      </QuestionContent>
      {!isNaN(qNum) && (
        <SurveyContainer>
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
