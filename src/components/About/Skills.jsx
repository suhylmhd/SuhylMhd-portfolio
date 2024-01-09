import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiHtml5 ,
  DiCss3 ,
  DiMongodb,
  DiNodejs,
  DiGit,
  DiGithubBadge
} from "react-icons/di";

function Skills() {
  
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <DiGithubBadge />
          </Col> 
        </Row>
      );
}

export default Skills
