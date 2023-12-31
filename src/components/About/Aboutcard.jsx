import React from 'react'
import { Card } from 'react-bootstrap'

function Aboutcard() {
  return (
    <>
      <div className='fs-5 '>
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="text-dark">Suhail Muhammad </span>
          from <span className="text-dark"> Kerala, India.</span>
          <br />
          I have completed  <span className="text-dark">BCA</span> (Bachelor of Computer Applications)
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
           Playing Games
          </li>
          <li className="about-activity">
            Travelling
          </li>
        </ul>

        <p style={{ color:'yellow', marginLeft:'100px' }}>
          "Strive to build things that make a difference!"{" "}
        </p>
      </div>
      </>
  )
}

export default Aboutcard