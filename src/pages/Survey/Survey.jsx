import React from "react";
import { Link, useParams } from "react-router-dom";

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

 

  return (
    <div>
      <h1>Questionnaire</h1>
      {!isNaN(qNum) && (
        <div>

      <Link to={`/survey/${prevNum}`} disabled={qNum === 1}>
        Question précédente
      </Link>
    
          <p>Question numéro : {qNum}</p>
          {qNum < 10 && (
            <Link to={`/survey/${nextNum}`}>Question suivante</Link>
          )}

          {qNum === 10 && <Link to="/results">Voir les résultats</Link>}
        </div>
      )}
    </div>
  );
};

export default Survey;
