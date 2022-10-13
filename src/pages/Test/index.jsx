import React, { useContext } from 'react';
import { TestContext } from '../../utils/Context';

const Test = () => {

    const { testText } = useContext(TestContext)
   function displayAlert() {
        alert(`L'alerte a été déclenchée`)
      }

    return (
        <div>
            <h1>Page de test</h1>
            <h2>Valeur de la variable de contexte  = { testText }</h2>
            <div>
        <button onClick={() => displayAlert()}>👉 Cliquer ici 👈</button>
      </div>
        </div>
    );
};

export default Test;