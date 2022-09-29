import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/components/Header/_index.css";

const StyledLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${global.colors.primary};`}
`;

const Myspan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  height: 80px;
  width: 90%;
  margin: auto;
`;

const MyLogo = styled.img`
  width: 10em;
`;

const Header = () => {
  return (
    <div>
      <Myspan>
        <Link to="/" end="true">
          <MyLogo src="/images/dark-logo.png" alt="logo" className="logo" />
        </Link>
        <nav>
          <StyledLink to="/" end>
            Accueil
          </StyledLink>
          <StyledLink to="/freelances">Profils</StyledLink>
          <StyledLink to="/survey">Faire le test</StyledLink>
        </nav>
      </Myspan>
    </div>
  );
};

export default Header;
