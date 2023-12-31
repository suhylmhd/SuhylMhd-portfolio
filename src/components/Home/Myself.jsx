import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import myImg from "../../Assets/avatar.svg";

function Myself() {
  return (
    <>
        <Container>
           
            <Row>
                <Col  md={8}>
                    <h1 className='text-center mt-5 ms-5' style={{ fontSize: "2.6em"  }}>
                        LET ME <span className='text-dark'> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="mt-5 fs-5">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        <br />
                        <br />I am fluent in classics like
                        <i>
                            <b  className='text-dark' > HTML , CSS And Javascript. </b>
                        </i>
                        <br />
                        <br />
                        My field of Interest's are building new &nbsp;
                        <i>
                        <b  className='text-dark'>Web Technologies and Products. </b>
                        </i>
                        <br />
                        <br />
                        Whenever possible, I also apply my passion for developing products
                        with <b  className='text-dark'>Node.js</b> and
                        <i>
                            <b  className='text-dark'>
                            {" "}
                            Modern Javascript Library and Frameworks
                            </b>
                        </i>
                        &nbsp; like
                        <i>
                            <b  className='text-dark'> React.js.</b>
                        </i>
                    </p>
                </Col>
                <Col md={4} className='mt-5'>
                    <div className="align-items-center" style={{padding:'50px'}}>
                        <img width={"250px"} height={"100%"} src={myImg} alt="No Image" />
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={12} className='text-center'>
                    <h1>FIND ME ON</h1>
                    <p className='mt-3'>Feel free to <span className="text-dark fs-5">connect </span>with me</p>
                    <div className='mt-3'>
                    <a href="https://github.com/suhylmhd" target='blank' className='text-dark'><i class="fa-brands fa-github fa-2xl"></i></a>

                    <a href="https://www.linkedin.com/in/suhail-muhammad-a54080183" target='blank' className='ms-5 text-dark'><i class="fa-brands fa-twitter fa-2xl"></i></a>

                    <a href="https://www.linkedin.com/in/suhail-muhammad-a54080183" target='blank' className='ms-5  text-dark'><i class="fa-brands fa-linkedin fa-2xl"></i></a>

                    <a href="https://www.instagram.com/i.s_uhyl/" target='blank' className='ms-5 text-dark '><i class="fa-brands fa-instagram  fa-2xl"></i></a>

                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Myself