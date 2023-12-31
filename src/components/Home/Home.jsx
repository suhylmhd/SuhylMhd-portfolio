import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../../Assets/home-main.svg'
import Type from './Type';
import Myself from './Myself';

function Home() {
  return (
    <div  style={{marginTop:'250px'}}>
      <Container>
          <Row>
            <Col md={7}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span>
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <span  className='text-dark'> SUHAIL MUHAMMAD</span>
              </h1>

              <div style={{ padding: 50, textAlign: "left",color:"#cd5ff8",fontSize:"40px" }}>
                <Type/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
      </Container>
      <Myself/>
    </div>
  )
}

export default Home