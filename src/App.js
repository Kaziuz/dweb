import React, { Fragment, useState } from 'react'

import { Container, Row } from 'reactstrap'

import NavBar from './NavBar'
import Portafolio from './Portafolio/Portafolio'
import Bienvenida from './Bienvenida/Bienvenida'

import img1 from './Portafolio/img1.jpg'
import img2 from './Portafolio/img2.jpg'
import img3 from './Portafolio/img3.jpg'
import img4 from './Portafolio/img4.jpg'
import img5 from './Portafolio/img5.jpg'
import img6 from './Portafolio/img6.jpg'
import img7 from './Portafolio/img7.jpg'

function App () {
  const images = [
    {
      url: img1,
      description: 'nothing',
    },
    {
      url: img2,
      description: 'nothing',
    },
    {
      url: img3,
      description: 'nothing',
    },
    {
      url: img4,
      description: 'nothing',
    },
    {
      url: img5,
      description: 'nothing',
    },
    {
      url: img6,
      description: 'nothing',
    },
    {
      url: img7,
      description: 'nothing',
    },
  ]

  const [img, setImg] = useState(images)

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: 120, background: 'rgba(219, 220, 222, 1)' }}>
        <Row>

          <div className="col-lg-12 d-flex justify-content-around my-2">
            <span style={{ color: 'yellow', fontSize: 150 }}>&#9650;</span>
            <span style={{ color: '#3f60ad', fontSize: 150 }}>&#9732;</span>
            <span style={{ color: 'red', fontSize: 150 }}>&#9914;</span>
          </div>

          <div className="col-lg-12 my-2">
            <h2 className="titulos-pricipales">dweb</h2>
          </div>

          <Bienvenida />
        </Row>

        <Row>
          <div className="col-lg-12 mt-4">
            <h2 className="titulos-pricipales text-left">Projects</h2>
            <Portafolio images={img}/>
          </div>
        </Row>

        <div className="row">

          <div className="col-lg-12">
            <h3>Team</h3>
            <p>Subtitulo o descripción</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://thispersondoesnotexist.com/image" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make
              up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://thispersondoesnotexist.com/image" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make
              up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </Fragment>

  )
}

export default App
