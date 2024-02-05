import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";
import Alert from "./Alerts";
import { BsEnvelope } from "react-icons/bs";
import { FaRunning, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);

  const successAlert = {
    color: "success",
    icon: <FaRegThumbsUp />,
    message: "Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: <FaRegThumbsDown />,
    message: "Oops! Something went wrong. Please try again later.",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    const serviceID = 'service_1bwtoxc'
    const templateID = 'template_hf63b0g'

    console.log("Sending email with data:", templateParams);

    emailjs
      .send(
        serviceID,
        templateID,
        templateParams,
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert(successAlert);
        },
        (error) => {
          console.log(error.text);
          setAlert(errorAlert);
        }
      );
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-3 shape-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {alert && (
          <Alert
            color={alert.color}
            icon={alert.icon}
            message={alert.message}
          />
        )}
        <form onSubmit={sendEmail}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to send me an email?</h4>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative-focus-ring">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaRunning />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative-focus-ring">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <BsEnvelope />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative-focus-ring"
                        cols="80"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
