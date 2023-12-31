import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import royal from '../../Assets/travelwebsite.png'
import calc from '../../Assets/weather.png'
import cart from '../../Assets/Ecart.png'
import netflix from '../../Assets/Netflix.png'
import player from '../../Assets/Mediaplayer.png'
import storysaver from '../../Assets/storysaver.png'
function Projects() {
  return (
    <Container style={{marginTop:"200px"}}>
      <h1 className="text-center">
          My Recent <strong className="text-dark">Works </strong>
      </h1>
      <p className='text-warning fs-5 text-center'>
          Here are a few projects I've worked on recently.
        </p>
      <Row>
        <Col md={4}>
          <ProjectCard 
          imgPath={royal}
          title="Travel Website"
          description="this is my new responsive travel website.Technologies I used Html5,Css3 and Bootstrap"
          ghLink="https://github.com/suhylmhd/Travel-website"
          demoLink="https://suhylmhd.github.io/Travel-website/"/>
        </Col>
        <Col md={4}>
          <ProjectCard 
          imgPath={calc}
          title="Weather App"
          description="Weather Application here i made.Technologies I used Html5,Css3,Bootstrap and Javascript"
          ghLink="https://github.com/suhylmhd/weather_app"
          demoLink="https://suhylmhd.github.io/weather_app/"/>
        </Col>
        <Col md={4}>
          <ProjectCard 
          imgPath={cart}
          title="E-Cart"
          description="E-cart App here i made.Technologies I used Html5,Css3,React,React Bootstrap and Redux Toolkit"
          ghLink="https://github.com/suhylmhd/e-cart"
          demoLink="e-cart-app-nine.vercel.app
          "/>
        </Col>
        <Col md={4} className='mt-5'>
          <ProjectCard 
          imgPath={netflix}
          title="Netflix"
          description="A Netflix Clone here i made.Technologies I used Html5,Css3,React,React Bootstrap"
          ghLink="https://github.com/suhylmhd/Netflix"
          demoLink="netflix-iota-one.vercel.app"/>
        </Col>
        <Col md={4} className='mt-5'>
          <ProjectCard 
          imgPath={player}
          title="Media Player"
          description="A Media Player here i made.Technologies I used Html5,Css3,React,React Bootstrap,JSON"
          ghLink="https://github.com/suhylmhd/mediaplayer_frontend"
          demoLink="media-player-frontend-theta.vercel.app
          "/>
        </Col>
        <Col md={4} className='mt-5'>
          <ProjectCard 
          imgPath={storysaver}
          title="Insta Story Saver"
          description="Here I made Instagram Story Saver Clone website.Technologies I used Html5,Css3,React,React Bootstrap"
          ghLink="https://github.com/suhylmhd/React-clone-site"
          demoLink="react-clone-site.vercel.app
          "/>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects