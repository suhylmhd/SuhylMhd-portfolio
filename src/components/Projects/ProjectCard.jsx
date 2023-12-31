import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {

  return (
    <>
        <Card className="project-card-view" style={{ width: '22rem',height:'100%' }}>
            <Card.Img variant="top" src={props.imgPath} />
            <Card.Body>
                <Card.Title className='text-warning text-center'>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <div className='d-flex justify-content-center'>
                <Button variant="success" href={props.ghLink} target='_blank' className='me-5'>Github</Button>
                <Button variant="success" href={props.demoLink} target='_blank'>Demo</Button>
                </div>
            </Card.Body>
    </Card>
    </>
  )
}

export default ProjectCard