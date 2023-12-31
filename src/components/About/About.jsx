import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import laptopImg from "../../Assets/about.png";
import Aboutcard from './Aboutcard';
import Skills from './Skills';
import Tools from './Tools';

function About() {
  return (
    <div style={{marginTop:"100px"}}>
      <Container>
        <Row>
          <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                marginTop:"120px"
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="text-dark">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
        </Row>
        <h1 className="text-center">
          Professional <strong className="text-dark">Skillset </strong>
        </h1>
        <Skills/>
        <h1 className="text-center">
          <strong className="text-dark">Tools</strong> I use
        </h1>
        <Tools/>
      </Container>
    </div>
  )
}

export default About