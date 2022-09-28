import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";

const Freelances = () => {
  const DefaultPicture = "https127.0.0.1:3000/profile.png";

  const freelanceProfiles = [
    {
      name: "Jane Doe",
      jobTitle: "Devops",
      picture: DefaultPicture,
    },
    {
      name: "John Doe",
      jobTitle: "Developpeur frontend",
      picture: DefaultPicture,
    },
    {
      name: "Jeanne Biche",
      jobTitle: "Développeuse Fullstack",
      picture: DefaultPicture,
    },
  ];

  return (
    <div>
      <h1>Freelances</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
};


Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Freelances;
