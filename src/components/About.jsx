import React from "react";
import Lottie from "lottie-react";
import arrowAnim from "../assets/arrow_lottie.json";
/* ABout*/

import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { useState, useEffect, Component } from "react";

import { Card, Button } from "react-bootstrap";

import profileImg from "../assets/profile.png";
import { motion, useTime, useTransform } from "framer-motion";

import previewOne from "../assets/preview1.png";
import previewTwo from "../assets/preview_2.png";
import previewThree from "../assets/preview_3.png";

import { Chrono } from "react-chrono";
/*¨Projects*/
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import prof from "../assets/gif/prof.gif";
import weco from "../assets/gif/weco.gif";
import next from "../assets/gif/next.gif";
import Skills from "./Skills.jsx";
import Skills2 from "./Skills2.jsx";
import { useSpring, animated } from "@react-spring/web";

import alternance from "../assets/gif/alternance.gif";
const About = () => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid="lg"
        style={{
          maxWidth: "100% !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Row style={{ width: "90%", height: "80%" }}>
          <Tab />
        </Row>
      </Container>
    </ThemeProvider>
  );
};

const Tab = () => {
  const springs = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  const handleClickSpring = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [numbersTab, setNumbersTab] = useState([
    {
      id: 0,
      text: "What do you want to know…?",
    },
    { id: 1, text: "(you can write '/help' for all commands)" },
  ]);

  let [indexTab, setIndexTab] = useState(2);

  const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ];

  const [title, setTitle] = useState("");
  const [musicTitles, setMusicTitles] = useState([
    "Something Just Like this - The Chainsmokers",
    "Elle disait - MPL",
    "Place des grands hommes - Patrick Bruel",
    "Ma chambre - Nusky",
    "Insomnies - Colt",
  ]);

  const getRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * musicTitles.length);
    setTitle(musicTitles[randomIndex]);
  };

  const listItems = numbersTab.map((number) => (
    <li key={number.id}>{number.text}</li>
  ));
  const [ValueCommand, setCommandValue] = useState("");
  const response = () => {
    /*CHATBOT */
    let command = ValueCommand;
    let response;
    setIndexTab(indexTab + 1);
    setNumbersTab((numbersTab) => [
      ...numbersTab,
      { id: indexTab, text: [ValueCommand] },
    ]);

    console.log("Index depart question est ici : " + indexTab);
    switch (command) {
      case "/help":
        response =
          "Hello, in this version you can use the following commands:  /version, /howareyou, /joke, /givemeamusic, /ping, /favouritemovie, /future";
        break;
      case "/version":
        response = "This is the second version of this portfolio!";
        break;

      case "/howareyou":
        response = "Well, quietly, and you?";
        break;
      case "/joke":
        response = "One day this portfolio will be finished";
        break;
      case "/givemeamusic":
        console.log(title);
        response = title;
        break;

      case "/ping":
        response = "POOOONG";
        break;

      case "/favouritemovie":
        response = "Hmmm.. Truman Show.";
        break;

      case "/future":
        response =
          "Ideally, I would like to develop tools or participate in educational projects.";
        break;

      default:
        response = "I'm sorry, I don't understand your question.";
        break;
    }

    setIndexTab(indexTab++);
    setNumbersTab((numbersTab) => [
      ...numbersTab,
      { id: indexTab, text: [response] },
    ]);

    console.log("Index2 reponse est ici : " + indexTab);
  };
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="container" style={{ height: "100%", width: "100%" }}>
      <ul className="tab-list" style={{ justifyContent: "start" }}>
        <li
          style={{
            backgroundColor: "transparent",
            border: "0.1rem solid white",
            height: "60%",
            padding: "0.5rem",
            width: "10%",
            fontFamily: "Barlow",
            fontWeight: 500,
          }}
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          Console
        </li>
        <li
          style={{
            backgroundColor: "transparent",
            border: "0.1rem solid white",
            height: "60%",
            padding: "0.5rem",
            width: "10%",
            marginLeft: "5%",
            fontFamily: "Barlow",
            fontWeight: 500,
          }}
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Route
        </li>
        <li
          style={{
            backgroundColor: "transparent",
            border: "0.1rem solid white",
            height: "60%",
            padding: "0.5rem",
            width: "10%",
            marginLeft: "5%",
            fontFamily: "Barlow",
            fontWeight: 500,
          }}
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          Skills
        </li>
      </ul>
      <div className="content-container">
        <div
          style={{ height: "100%", width: "100%" }}
          className={`content ${getActiveClass(1, "active-content")}`}
        >
          <Row
            style={{ width: "100%", height: "100%", marginTop: "5%" }}
            id="bigDivCmd"
          >
            <Row
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row !important",
                height: "10%",
              }}
              id="rowCmd"
            >
              <div
                id="stepThreeDiv"
                style={{
                  width: "70%",
                  height: "fit-content",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column !important",
                  borderRadius: "3vh",
                }}
              >
                <span id="stepThreeText">
                  <span id="stepThree">Step 3 : CMD</span> | functionality in
                  progress |
                </span>
              </div>
            </Row>
            <Row
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row !important",
                height: "70%",
              }}
              id="rowConsole"
            >
              <div
                style={{
                  width: "70%",
                  textAlign: "left",
                  justifyContent: "start",
                  alignItems: "start",
                  height: "80%",
                  padding: "1.5rem",

                  flexDirection: "column !important",
                  borderRadius: "0.5%",
                  backgroundColor: "rgb(22 22 22)",
                }}
                id="console"
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    textAlign: "left",
                    overflowY: "scroll",
                    overflowAnchor: "auto",
                    fontFamily: "Barlow",
                    fontWeight: "500 !important",
                  }}
                >
                  {listItems}
                </ul>
              </div>
            </Row>
            <Row
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row !important",
                height: "10%",
              }}
            >
              <form
                style={{
                  width: "100% !important",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                id="formConsole"
                onSubmit={(e) => {
                  e.preventDefault();
                  getRandomTitle();
                  response();
                }}
              >
                <input
                  type="text"
                  name="name"
                  pattern="[A-Za-z\/]"
                  onSubmit={(event) => {
                    getRandomTitle();

                    event.preventDefault();

                    response();
                  }}
                  noValidate={true}
                  value={ValueCommand}
                  placeholder=">....."
                  onChange={(event) => {
                    setCommandValue(event.target.value);
                  }}
                  style={{
                    borderRadius: "0.5",
                    width: "40%",
                    height: "70%",
                    marginRight: "10px",
                  }}
                />

                <BsFillArrowRightCircleFill
                  style={{ fontSize: "2.5rem" }}
                  onClick={() => {
                    getRandomTitle();
                    response();
                  }}
                />
              </form>
            </Row>
          </Row>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          id="containerParcours"
          className={`content ${getActiveClass(2, "active-content")}`}
        >
          <Row
            id="rowParcours"
            style={{
              height: "10%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <div
              id="stepFourDiv"
              style={{
                width: "80%",
                height: "fit-content",
                padding: "1rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column !important",
                borderRadius: "3vh",
              }}
            >
              <span id="stepFourText">
                <span id="stepFour">Step 4 :</span>Here you can see some of my
                experience in general terms. If you want to see more, I let you
                download my resume.
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              id="btn-resume"
              style={{
                width: "15%",
                height: "fit-content",
                padding: "0.5rem",
                display: "flex",
                color: "white",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column !important",
                borderRadius: "3vh",
                backgroundColor: "rgba(45,156,144,0.5)",
              }}
            >
              <a
                href="../assets/cv_informatique_STCHETININE.pdf"
                download
                style={{ color: "white" }}
              >
                Download Resume
              </a>
            </motion.button>
          </Row>

          <div
            style={{
              height: "80%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "6%",
            }}
            id="containerTimeLine"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              id="rowTimeLine"
            >
              <Card
                id="card2"
                style={{
                  width: "30%",
                  backgroundColor: "#3e47558c",
                  padding: 0,
                  padding: "0.2rem",
                  flexDirection: "column",
                  borderRadius: "0.2rem",
                  margin: "2%",
                }}
              >
                <Card.Img
                  variant="mid"
                  src={alternance}
                  style={{ width: "100%" }}
                />
                <Card.Body>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      width: "100%",
                      height: "10%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="rowStatut"
                  >
                    <span
                      style={{
                        height: "100%",
                        fontSize: 12,
                        width: "50%",
                        padding: 6,
                        margin: 0,
                        marginTop: "1%",
                        backgroundColor: "rgb(189 78 22 / 47%)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                      className="statut"
                    >
                      Internship DUT
                    </span>
                  </motion.div>
                  <Card.Title
                    style={{
                      fontSize: 18,
                      marginTop: 8,
                      color: "rgb(40, 40, 40)",
                      fontfamily: '"Barlow", sans-serif !important',
                      fontWeight: "550",
                    }}
                  >
                    Mobile Developer{" "}
                  </Card.Title>
                  <Card.Subtitle>March-May 2021</Card.Subtitle>
                  <Card.Subtitle>WE-CO</Card.Subtitle>
                  <Card.Text
                    style={{
                      marginTop: "8%",
                      fontfamily: '"Barlow", sans-serif !important',
                      padding: "0.2rem",
                    }}
                  >
                    Realization of the specifications & Organization of the
                    tasks React Native development Google API implementation
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                id="card3"
                style={{
                  width: "30%",
                  backgroundColor: "#3e47558c",
                  padding: 0,
                  padding: "0.2rem",
                  flexDirection: "column",
                  borderRadius: "0.2rem",
                  margin: "2%",
                }}
              >
                <Card.Img variant="mid" src={weco} style={{ width: "100%" }} />
                <Card.Body>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      width: "100%",
                      height: "20%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="rowStatut"
                  >
                    <span
                      style={{
                        height: "100%",
                        fontSize: 12,
                        width: "50%",
                        padding: 6,
                        margin: 0,
                        backgroundColor: "rgb(10 54 207 / 44%)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                      className="statut"
                    >
                      Intership L3
                    </span>
                  </motion.div>
                  <Card.Title style={{ fontSize: 18, marginTop: 8 }}>
                    Web & Mobile Developer
                  </Card.Title>
                  <Card.Subtitle>October 2022 - July 2023</Card.Subtitle>
                  <Card.Subtitle>Créaserv</Card.Subtitle>
                  <Card.Text style={{ marginTop: "8%" }}>
                    Development of a collection application in React Native /
                    Maintenance Project Management (Specifications, UI/UX,
                    Production Schedule) PWA / TWA
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                id="card4"
                style={{
                  width: "30%",
                  backgroundColor: "#3e47558c",
                  padding: 0,
                  padding: "0.2rem",
                  flexDirection: "column",
                  borderRadius: "0.2rem",
                  margin: "2%",
                }}
              >
                <Card.Img variant="mid" src={prof} style={{ width: "100%" }} />
                <Card.Body>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      width: "100%",
                      height: "20%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="rowStatut"
                  >
                    <span
                      style={{
                        height: "100%",
                        fontSize: 12,
                        width: "50%",
                        padding: 6,
                        margin: 0,
                        backgroundColor: "rgb(189 22 105 / 64%)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                      className="statut"
                    >
                      Contractuelle
                    </span>
                  </motion.div>
                  <Card.Title style={{ fontSize: 18, marginTop: 8 }}>
                    Web & Mobile Developer
                  </Card.Title>
                  <Card.Subtitle>Since October 2022</Card.Subtitle>

                  <Card.Text style={{ marginTop: "8%" }}>
                    Classroom Management & Courses Preparation & Activity
                    Development
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                id="card5"
                style={{
                  width: "30%",
                  backgroundColor: "#3e47558c",
                  padding: 0,
                  padding: "0.2rem",
                  flexDirection: "column",
                  borderRadius: "0.2rem",
                  margin: "2%",
                }}
              >
                <Card.Img variant="mid" src={next} style={{ width: "100%" }} />
                <Card.Body>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      width: "100%",
                      height: "10%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="rowStatut"
                  >
                    <span
                      style={{
                        height: "100%",
                        fontSize: 12,
                        width: "50%",
                        padding: 6,
                        margin: 0,
                        backgroundColor: "rgb(225 171 43 / 57%)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                      className="statut"
                    >
                      Master
                    </span>
                  </motion.div>
                  <Card.Title
                    style={{ fontSize: 18, marginTop: 8 }}
                  ></Card.Title>
                  <Card.Subtitle>Starting in September 2023</Card.Subtitle>
                  <Card.Text style={{ marginTop: "8%" }}>
                    Mobile Development, Front-End Development, Project
                    Management
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
          }}
          id="containerCompetences"
          className={`content ${getActiveClass(3, "active-content")}`}
        >
          <div
            id="stepFiveDiv"
            style={{
              width: "70%",
              height: "fit-content",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column !important",
              borderRadius: "3vh",
              marginTop: "1.5rem",
            }}
          >
            <span id="stepFiveText">
              <span id="StepFive">Step 5 :</span>This is an overview of the
              different skills I have acquired.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "90%",
              justifyContent: "space-evenly",
              marginTop: "1.5rem",
            }}
            id="containerSkillsDiv"
          >
            <div className="containerSkills">
              <h1 className="titleSkills">/Design</h1>
              <Skills style={{ height: "80%", width: "100%" }} />
            </div>
            <div
              className="containerSkills2"
              style={{ width: "60% !important" }}
            >
              <h1 className="titleSkills">/Development</h1>
              <Skills2 style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
