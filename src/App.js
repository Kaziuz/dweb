import React, { Fragment, useState } from 'react'

import { Container, Row } from 'reactstrap'

import NavBar from './NavBar'
import Bienvenida from './Bienvenida/Bienvenida'
import Galeria from './Galeria/Galeria'
import Equipo from './Equipo/Equipo'

import img1 from './Galeria/img1.jpg'
import img2 from './Galeria/img2.jpg'
import img3 from './Galeria/img3.jpg'
import img4 from './Galeria/img4.jpg'
import img5 from './Galeria/img5.jpg'
import img6 from './Galeria/img6.jpg'
import img7 from './Galeria/img7.jpg'

function App () {
  const dummyImages = [
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

  const [img, setImg] = useState(dummyImages)

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
            <Galeria images={img}/>
          </div>
        </Row>

        <Equipo />

      </Container>
    </Fragment>
  )
}

export default App
