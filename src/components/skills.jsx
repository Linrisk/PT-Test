import React, { useState } from "react";

import "../App.css";
import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";
import { GiEasterEgg } from "react-icons/gi";
const cards = [
  {
    id: 1,

    nom: "Figma",

    icon: <SiFigma style={{ fontSize: "3em" }} />,
  },
  {
    id: 2,

    nom: "Adobe XD",

    icon: <SiAdobexd style={{ fontSize: "3em" }} />,
  },
  {
    id: 3,

    nom: "Adobe Photoshop",

    icon: <SiAdobephotoshop style={{ fontSize: "3em" }} />,
  },
  {
    id: 4,

    nom: "Adobe Illustrator",

    icon: <SiAdobeillustrator style={{ fontSize: "3em" }} />,
  },
  {
    id: 5,

    nom: "Adobe LightRoom",

    icon: <SiAdobelightroom style={{ fontSize: "3em" }} />,
  },
];

const CardContainer = () => {
  return (
    <div className="card-container" style={{ height: "80%" }}>
      {cards.map((card) => (
        <div key={card.id} className="cardSkills">
          <div className="iconSkills">{card.icon} </div>
          <span className="nameSkills">{card.nom}</span>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
