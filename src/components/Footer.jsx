import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
    const year = new Date().getFullYear()
  return (
    <>
      <Container>
        <Row className='text-center mt-5'>
            <Col md="4" className="">
                <p >Designed and Developed by Suhail Muhammad</p>
               
            </Col>
            <Col md="4">
                <p>Copyright © {year}</p>
            </Col>
            <Col md="4" className='d-flex'>
                <a href="https://github.com/suhylmhd" target='blank' className='ms-5  text-white'><i class="fa-brands fa-github fa-beat fa-lg"></i></a>
                <a href="https://www.linkedin.com/in/suhail-muhammad-a54080183" target='blank' className='ms-5 text-white'><i class="fa-brands fa-linkedin fa-beat fa-lg"></i></a>
                <a href="https://www.instagram.com/i.s_uhyl/" target='blank' className='ms-5  text-white'><i class="fa-brands fa-instagram fa-beat fa-lg"></i></a>
                <a href="http://wa.me//+918547490210" target='blank' className='ms-5  text-white'><i class="fa-brands fa-whatsapp fa-beat fa-lg"></i></a>

            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer