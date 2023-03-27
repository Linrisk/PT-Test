import React, { useState } from "react";

import "../App.css";
import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";
import { GiSave } from "react-icons/gi";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiTypescript,
  SiExpo,
} from "react-icons/si";
import { FaReact, FaJava, FaNpm } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
const cards = [
  {
    id: 1,

    nom: "React",

    icon: <FaReact style={{ fontSize: "3em" }} />,
  },
  {
    id: 2,

    nom: "Javascript",

    icon: <SiJavascript style={{ fontSize: "3em" }} />,
  },
  {
    id: 3,

    nom: "Tail Wind",

    icon: <SiTailwindcss style={{ fontSize: "3em" }} />,
  },
  {
    id: 4,

    nom: "Bootstrap",

    icon: <SiBootstrap style={{ fontSize: "3em" }} />,
  },
  {
    id: 6,

    nom: "MySQL",

    icon: <SiMysql style={{ fontSize: "3em" }} />,
  },
  {
    id: 7,

    nom: "Php",

    icon: <SiPhp style={{ fontSize: "3em" }} />,
  },
  {
    id: 8,

    nom: "Typescript",

    icon: <SiTypescript style={{ fontSize: "3em" }} />,
  },
  {
    id: 9,

    nom: "React Native",

    icon: <TbBrandReactNative style={{ fontSize: "3em" }} />,
  },
  {
    id: 10,

    nom: "Expo",

    icon: <SiExpo style={{ fontSize: "3em" }} />,
  },
  {
    id: 11,

    nom: "Java",

    icon: <FaJava style={{ fontSize: "3em" }} />,
  },
  {
    id: 12,

    nom: "Npm",

    icon: <FaNpm style={{ fontSize: "3em" }} />,
  },
];
const CardContainer2 = () => {
  return (
    <div className="card-container" style={{ height: "80%" }}>
      {cards.map((card) => (
        <div key={card.id} className="cardSkills2">
          <div className="iconSkills">{card.icon} </div>
          <span className="nameSkills">{card.nom}</span>
        </div>
      ))}
    </div>
  );
};

export default CardContainer2;
