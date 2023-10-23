import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatarpatar from "../../Assets/Projects/chatar-patar.png";
import wiehack from "../../Assets/Projects/wiehack.png";
import colour from "../../Assets/Projects/colour.png";
import atlansql from "../../Assets/Projects/atlansql.png";
import meme from "../../Assets/Projects/meme.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h3 className="project-heading">
          Featured <strong className="blue">Projects </strong>
        </h3>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={chatarpatar}
              isBlog={false}
              title="Chatar-Patar"
              description="A real-time chat application using MERN stack, facilitating seamless communication among registered users. Built using React,ChakraUI,MongoDB,SocketIO"
              ghLink="https://github.com/harsh735/chatar-patar"
              demoLink="https://chatar-patar.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiehack}
              isBlog={false}
              title="WIEHack3.0"
              description="A responsive website for a college hackathon, attracting 1000+ participants and garnering 16,000+ impressionswithin two months"
              ghLink="https://github.com/harsh735/wiehack3.0-landing-main"
              demoLink="https://inspiring-basbousa-0c0da2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colour}
              isBlog={false}
              title="Guess-Colouro"
              description="An interactive color-guessing game using vanilla JavaScript and CSS, showcasing proficiency in DOMmanipulation and event handling"
              ghLink="https://github.com/harsh735/Colour-Game"
              demoLink="https://colour-game-six.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atlansql}
              isBlog={false}
              title="AtlanSQL"
              description="Built a React app that fetches tables via an API based on the query provided in the search box. Implemented lazy loading and concept of react hooks to use."
              ghLink="https://github.com/harsh735/atlan-sql-editor"
              demoLink="https://atlan-sql-editor-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme Generator"
              description="A simple react project which makes use of react hooks to add text to an image and allows the user to save the modified image/meme."
              ghLink="https://github.com/harsh735/meme-generator"
              demoLink="https://meme-generator-ten-fawn.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
