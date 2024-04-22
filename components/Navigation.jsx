import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import React Icons

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const Navigation = () => {
  // Add a state variable for the key prop
  const [collapseKey, setCollapseKey] = useState(0);
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }, []);

  const scrollToEmailForm = () => {
    const emailForm = document.getElementById("emailForm");
    emailForm.scrollIntoView({ behavior: "smooth" });

    // Change the key prop to trigger a re-render of the UncontrolledCollapse component
    setCollapseKey((prevKey) => prevKey + 1);
  };

  const updateNavMenu = () => {
    setCollapseKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              key={collapseKey} // Add the key prop here
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                      onClick={updateNavMenu}
                    >
                      <i style={{ fontSize: "24px" }}>
                        <FaGithub />
                      </i>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                      onClick={updateNavMenu}
                    >
                      <i style={{ fontSize: "24px" }}>
                        <FaLinkedin />
                      </i>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.gmail && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Email"
                      className="nav-link-icon"
                      href="#"
                      onClick={scrollToEmailForm}
                    >
                      <i style={{ fontSize: "24px" }}>
                        <FaEnvelope />
                      </i>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Email
                      </span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
