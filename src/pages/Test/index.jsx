import React, { useContext } from 'react';
import { TestContext } from '../../utils/Context';

const Test = () => {

    const { testText } = useContext(TestContext)

    return (
        <div>
            <h1>Page de test</h1>
            <h2>Valeur de la variable de contexte  = { testText }</h2>
        </div>
    );
};

export default Test;