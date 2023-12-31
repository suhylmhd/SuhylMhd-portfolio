import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/82885fe6a05c4dad990720708bfbd175.png'
import '../style.css'
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";


function Header() {
    const [expand , setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    
  return (
    <>
       <Navbar  
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "scrollBarStyle" : null}>
            <Container>
            <Navbar.Brand href="/" className='d-flex'>
                <img
                alt=""
                src={logo}
                width="50"
                height="100%"
                className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    setExpand(expand ? false : "expanded");
                }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end me-5">
                    <Nav className="ms-auto ">
                        <Nav.Item >
                            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)} className='text-white me-5'>
                            <AiOutlineHome className='mb-1'/>Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)} className='text-white me-5'>
                                <AiOutlineUser className='mb-1'/> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/project" onClick={() => setExpand(false)} className='text-white me-5'>
                                <AiOutlineFundProjectionScreen className='mb-1'/> Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)} className='text-white me-5'>
                                <FaRegFileAlt className='mb-1' /> Resume
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                                <Button href="https://github.com/suhylmhd" target="_blank" className='btn bg-success'>
                                    <i class="fa-solid fa-code-branch bg-success me-1"></i>
                                    <i class="fa-solid fa-star bg-success"></i>
                                </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar> 
    </>
  )
}

export default Header