import { useState, useEffect, Component } from "react";

import "../assets/css/fonts.css";

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
/* <Home></Home> */
import { FaGamepad } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { GiDogBowl } from "react-icons/gi";
import React from "react";

import previewJS from "../assets/preview_js.png";
import sanctuary from "../assets/sanctuary.png";
import portfolio from "../assets/portfolio.png";
import pets from "../assets/pets.png";
import "../assets/css/Projects.css";

const Projects = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid="lg"
        style={{
          maxWidth: "100% !important",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          height: "100%",
        }}
        id="containerProjects"
      >
        <Row
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            marginTop: "1%",
          }}
          id="rowStepSix"
        >
          <div
            id="stepSixDiv"
            style={{
              width: "80%",
              height: "fit-content",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column !important",
              borderRadius: "0.5%",
            }}
          >
            <span id="stepSixText">
              <span id="stepSix">Step 6 :</span> If you want to know more about
              my projets, you can find them just down.
            </span>
          </div>
        </Row>
        <Row
          style={{
            width: "100%",
            height: "90%",
            paddingHorizontal: "1%",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "transparent",
            paddingVertical: "5%",
          }}
          id="rowTabProjects"
        >
          <div
            id="firstColumnProjects"
            style={{
              height: "100%",
              width: "40%",
              padding: 0,
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <div id="firstCardProjects">
              <div
                className="imgCardProjects"
                style={{ height: "90%", backgroundImage: `url(${previewJS})` }}
              ></div>
              <div
                style={{
                  height: "10%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                className="infosCardProjects"
              >
                <span>JEU DU SIMON</span>
                <span>2020</span>
              </div>
            </div>

            <div id="secondCardProjects">
              <div
                className="imgCardProjects"
                style={{ height: "90%", backgroundImage: `url(${portfolio})` }}
              ></div>
              <div
                style={{
                  height: "10%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                className="infosCardProjects"
              >
                <span>PORTFOLIO</span>
                <span>2022</span>
              </div>
            </div>
          </div>

          <div
            id="secondColumnProjects"
            style={{
              height: "100%",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 0,
              alignItems: "center",
            }}
          >
            <div id="threeCardProjects">
              <div
                className="imgCardProjects"
                style={{
                  height: "95%",
                  backgroundImage: `url(${sanctuary})`,
                  backgroundPosition: "bottom",
                }}
              ></div>
              <div
                style={{
                  height: "10%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                className="infosCardProjects"
              >
                <span>SANCTUARY APP</span>
                <span>2022</span>
              </div>
            </div>

            <div id="fourCardProjects">
              <div
                className="imgCardProjects"
                style={{ height: "95%", backgroundImage: `url(${pets})` }}
              ></div>
              <div
                style={{
                  height: "10%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                className="infosCardProjects"
              >
                <span>MatchPet</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
