import React, { useState } from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "lottie-react";
import animGirl from "../assets/json/lottie_anim.json";
import Spline from "@splinetool/react-spline";

import emailjs from "@emailjs/browser";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47hdzbc",
        "template_6qtoyxd",
        form.current,
        "wvbYaUe8zepp7tOUk"
      )
      .then(
        (result) => {
          handleShow();
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Row
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row !important",
        height: "100%",
      }}
      id="rowContact"
    >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="true"
        keyboard={true}
        id="popupContact"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de réception</Modal.Title>
        </Modal.Header>
        <Modal.Body>Votre message a bien été envoyé ! 👌🏽 -Océane</Modal.Body>
      </Modal>

      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="containerLastStep"
      >
        <Row
          style={{
            height: "20%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="rowLastStep"
        >
          {" "}
          <div
            id="stepLastDiv"
            style={{
              width: "70%",
              height: "fit-content",
              padding: "0.5rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column !important",
              borderRadius: "3vh",
            }}
          >
            <span id="stepLastText">
              <span id="stepLast">Last Step :</span> I remain available if you
              wish to send me a message to discuss a project together or for any
              other questions. Have a Good Day!
            </span>
          </div>
        </Row>
        <Row
          style={{ height: "fit-content", alignItems: "center", width: "80%" }}
          id="rowForm"
        >
          <form
            action={FORM_ENDPOINT}
            method="POST"
            onSubmit={sendEmail}
            ref={form}
            id="formContact"
          >
            <div className="mb-3 pt-0">
              <input
                id="inputName"
                style={{ color: "black", backgroundColor: "transparent" }}
                type="text"
                placeholder="Your name"
                name="user_name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                id="inputMail"
                style={{ color: "black" }}
                type="email"
                placeholder="Email"
                name="user_email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                id="inputObjet"
                style={{ color: "black" }}
                type="text"
                placeholder="objet"
                name="user_objet"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                id="inputMessage"
                style={{ color: "black" }}
                placeholder="Your message"
                name="message"
                rows="5"
                cols="33"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button
                id="btn-Send"
                className=" w-100 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </div>
          </form>
        </Row>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="containerAnimation"
      >
        <Lottie
          id="girlAnimation"
          style={{ height: "80%", width: "80%" }}
          animationData={animGirl}
          loop={true}
        />
      </div>
    </Row>
  );
};

export default ContactForm;
