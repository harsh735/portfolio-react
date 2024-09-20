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
              I'm Harshendra, a passionate Software Engineer with ~1.5 YOE who is
              <br />passionate about implementing solutions to real-world problems
              <br />and possesses technical expertise on <b className="blue">Data structures, algorithms, MERN stack, .NET, Docker</b> and various utility tools.
              <br />
              <br />
              <br />

              In my freetime, my mood depends on 11 men in red shirts kicking a football for 90 mins. 
              Yes, I'm a Liverpool fan. <p style={{color: "red",fontSize: "30px"}}>YNWA</p>
            </p>

          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
