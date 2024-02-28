import React, { useEffect, Fragment } from "react";
import { greetings } from "../portfolio";
import dynamic from "next/dynamic";
import { FiFileText } from "react-icons/fi";

import { Icon } from "@iconify/react";
import { Button, Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { greetingsSkills } from "../portfolio";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const ParticleBg = dynamic(() => import("particles-bg"), {
  ssr: false,
});

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-warning">
            <span />
            <span />
            <span />
            <span />
            <span />
            <ParticleBg type="polygon" bg={true} num={1} />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title}</h1>
                  <strong className="text-white">My Technologies:</strong>
                  <div>
                    {greetingsSkills.data.map((section, index) => {
                      return (
                        <>
                          {section.softwareSkills1.map((skill, i) => {
                            return (
                              <Fragment key={i}>
                                <div
                                  className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                                  style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                  }}
                                  id={skill.skillName.replace(/\s/g, "")}
                                >
                                  <Icon
                                    icon={skill.fontAwesomeClassname}
                                    data-inline="false"
                                  ></Icon>
                                </div>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="bottom"
                                  target={skill.skillName.replace(/\s/g, "")}
                                >
                                  {skill.skillName}
                                </UncontrolledTooltip>
                              </Fragment>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>

                  <div>
                    {greetingsSkills.data.map((section, index) => {
                      return (
                        <>
                          {section.softwareSkills2.map((skill, i) => {
                            return (
                              <Fragment key={i}>
                                <div
                                  className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                                  style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                  }}
                                  id={skill.skillName.replace(/\s/g, "")}
                                >
                                  <Icon
                                    icon={skill.fontAwesomeClassname}
                                    data-inline="false"
                                  ></Icon>
                                </div>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="bottom"
                                  target={skill.skillName.replace(/\s/g, "")}
                                >
                                  {skill.skillName}
                                </UncontrolledTooltip>
                              </Fragment>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>

                  <p className="lead text-white">{greetings.intro}</p>
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.CVLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <FiFileText />
                      </span>
                      <span className="btn-inner--text">
                        Click to see my CV
                      </span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/coding.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
