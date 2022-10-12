import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import globalvar from "../../utils/Global";
import { useTheme } from "../../utils/hooks/theme";

const DefaultPicture = `${globalvar.website}/images/profile.png`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15;
  text-decoration: none;
`;
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
  margin-top: 2em;
  margin: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 15px;
  background-color: ${globalvar.colors.backgroundLight};
  border-radius: 30px;
  width: 20em;
  height: 20em;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardName = styled.span`
  text-align: center;
  font-size: 1.2em;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CardFavoriteButton = styled.button`
  background-color: lightblue;
  width: 6em;
  height: 2em;
  margin: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

// function Card({ profile }) {
//   const { theme } = useTheme();
//   const [isFavorite, setIsFavorite] = useState(false);
//   const star = isFavorite ? "⭐️" : "";

//   const id = profile ? profile.id : "id";
//   const job = profile ? profile.job : "job";
//   const name = profile ? profile.name : "name";
//   const picture = profile ? profile.picture : "";

//   console.log(profile);

//   return (
//     <CardDiv>
//       <CardLink to={`/freelance?id=${id}`} style={{ textDecoration: "none" }}>
//         <CardWrapper theme={theme}>
//           <CardLabel theme={theme}>{job}</CardLabel>
//           <CardImage src={picture} alt="freelance" />
//           <CardName theme={theme}>
//             {star} {name} {star}
//           </CardName>
//         </CardWrapper>
//       </CardLink>
//       <CardFavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
//         Favorite
//       </CardFavoriteButton>
//     </CardDiv>
//   );
// };
function Card({ id, name, job, picture }) {
  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? "⭐️" : "";
  return (
    <CardDiv>
      <CardLink to={`/freelance?id=${id}`} style={{ textDecoration: "none" }}>
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
          <CardLabel theme={theme}>{star}{name}{star}</CardLabel>
          <CardImage src={picture} alt="freelance" />
          <CardName theme={theme}>
             {job} 
          </CardName>
        </CardWrapper>
      </CardLink>
      <CardFavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
        Favorite
      </CardFavoriteButton>
    </CardDiv>
  );
  //   return (
  //     <CardDiv>
  //       <CardLink to={`/freelance?id=${id}`} style={{ textDecoration: "none" }}>
  //         <CardWrapper theme={theme}>
  //           <CardLabel theme={theme}>{job}</CardLabel>
  //           <CardImage src={picture} alt="freelance" />
  //           <CardName theme={theme}>
  //             {star} {name} {star}
  //           </CardName>
  //         </CardWrapper>
  //       </CardLink>
  //       <CardFavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
  //         Favorite
  //       </CardFavoriteButton>
  //     </CardDiv>
  //   );
  // };
}

Card.defaultProps = {
  label: "",
  picture: DefaultPicture,
  title: "",
};

export default Card;
