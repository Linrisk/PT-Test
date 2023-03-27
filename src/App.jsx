import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact.jsx";
import About from "./components/About";
import NotFound from "./components/notFound.jsx";
import "./components/DiscoBall/discoball.css";
function AnimatedRoutes({ children }) {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <Routes location={location}>{children}</Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  /* boule disco */

  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar expand="lg" style={{ height: "13%" }}>
        <Container id="containerNavBar">
          <Navbar.Brand>
            <Link to="/" id="linkHome">
              <span id="brand" style={{ color: "white" }}>
                STCHETININE Océane
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" id="linkHome" style={{ color: "#239c8f" }}>
                  / Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" id="linkAbout" style={{ color: "#239c8f" }}>
                  / About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/projects"
                  id="linkProjects"
                  style={{ color: "#239c8f" }}
                >
                  / Projects
                </Link>
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <button className="vvd" id="buttonContact">
                <Link to="/contact" id="linkContact">
                  / Contact
                </Link>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AnimatedRoutes style={{ backgroundColor: "pink" }}>
        <Route
          path="/"
          element={<Home />}
          style={{ backgroundColor: "pink" }}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </AnimatedRoutes>
    </div>
  );
}

export default App;
