import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "../../styles/components/Header/_index.css";
import colors from "../../styles/colors";

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const Header = () => {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey">Questionnaire</StyledLink>
            <StyledLink to="/results">Résultats</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    );
};

export default Header;