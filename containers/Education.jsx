import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = () => {
  return (
    educationInfo && (
      <section section id="aboutMeSection" className="section pb-5 bg-gradient-info my-5">
        <Container>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <FontAwesomeIcon icon={faAddressCard} />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-white">About Me</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {educationInfo.map((info) => {
              return (
                  <EducationCard education={info} />
              );
            })}
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="" />
          </svg>
        </div>
        <br />
      </section>
    )
  );
};

export default Education;
