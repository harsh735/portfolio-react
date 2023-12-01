import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="home-about-social">
          <h3>No &copy; issues :p </h3>
          <p>Feel free to use this template!</p>
        </Col>
        <Col md={4} className="home-about-social">
          <h3>Made with ❤︎ </h3>
          <p>By Harshendra Singh</p>
        </Col>
        <Col md={4} >
          <h3 className="home-about-social">
            Feel free to <span className="blue">connect </span>with me
          </h3>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/harsh735"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/harshsingh_8"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harsh735/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/harshsingh.0"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
