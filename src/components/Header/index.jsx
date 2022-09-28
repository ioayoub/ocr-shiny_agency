import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/components/Header/_index.css";

const Header = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
            <Link to="/results">Résultats</Link>
            <Link to="/freelances">Freelances</Link>
        </nav>
    );
};

export default Header;