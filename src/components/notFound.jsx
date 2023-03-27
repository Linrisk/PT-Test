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

const notFound = () => {
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
        id="containerNotFound"
      >
        <h1 id="titleNotFound">WRONG ADRESS ?</h1>
        <Link to="/" id="linkHome">
          <button id="btn-notFound">HOME</button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default notFound;
