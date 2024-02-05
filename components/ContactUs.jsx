import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Alert from "./Alerts";
import { BsEnvelope } from "react-icons/bs";
import { FaRunning, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

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
  const [state, handleSubmit] = useForm("mnqepbak");
  const [formKey, setFormKey] = useState(0); // <-- State to control form re-render

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

  useEffect(() => {
    if (state.succeeded) {
      setFormKey(prevKey => prevKey + 1); // <-- Increment key to force re-render
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
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
        {state.succeeded && (
          <Alert
            color={successAlert.color}
            icon={successAlert.icon}
            message={successAlert.message}
          />
        )}
        {state.errors && state.errors.length > 0 && (
          <Alert
            color={errorAlert.color}
            icon={errorAlert.icon}
            message={errorAlert.message}
          />
        )}
        <form key={formKey} onSubmit={handleFormSubmit}> {/* <-- Use key prop for re-render */}
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
                          name="name"
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
                          name="email"
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
                        name="message"
                        required
                      />
                    </FormGroup>
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        disabled={state.submitting}
                      >
                        {state.submitting ? 'Sending...' : 'Send Message'}
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

