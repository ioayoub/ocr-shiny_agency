import React, { useContext } from 'react';
import { SurveyContext } from '../../utils/Context';

const Results = () => {
const {answers} = useContext(SurveyContext);
console.log(answers);

    return (
        <div>
           <h1>Résultats</h1> 
        </div>
    );
};

export default Results;