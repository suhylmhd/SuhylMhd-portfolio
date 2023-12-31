import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import pdf from '../../Assets/CV.pdf'
import cv from '../../Assets/cvpic.png'
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Col, Container, Row } from 'react-bootstrap';
function Resume() {


  return (
    <div>
        <Row style={{marginTop:"150px", justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      <Container className='mt-5 mb-5 '>
        <Row className="resume">
        <Col lg={2}></Col>
          <Col lg={8}>
            <img src={cv} alt="" width={"100%"} height={"100%"} />
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
       
       

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

    </div>
  )
}

export default Resume