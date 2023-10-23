import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (

    
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" >
            
            <h1 style={{ fontSize: "2.6em" }}>
              About <b className="blue">Me</b>
            </h1>

            <p className="home-about-body">
              I'm Harshendra, a CSE graduate from Bharati Vidyapeeth's College of Engineering, New Delhi
              <br />I am passionate about implementing solutions to real-world problems
              <br />and possess technical expertise on <b className="blue">Data structures, algorithms, MERN stack</b> and various utility tools.
              <br />
              <br />
              <br />

              I do however, tend to follow a bunch of sports like 
              football, cricket, f1, basketball and tennis.
            </p>

          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
