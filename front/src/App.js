import React, { useState, useEffect } from 'react'

import { Container, Row } from 'reactstrap'

import NavBar from './NavBar'
import Bienvenida from './Bienvenida/Bienvenida'
import Galeria from './Galeria/Galeria'
import Equipo from './Equipo/Equipo'
import Footer from './Footer'
import Contacto from './Contacto'

import img1 from './Galeria/img1.jpg'
import img2 from './Galeria/img2.jpg'
import img3 from './Galeria/img3.jpg'
import img4 from './Galeria/img4.jpg'
import img5 from './Galeria/img5.jpg'
import img6 from './Galeria/img6.jpg'
import img7 from './Galeria/img7.jpg'

import dataInicial from './data.json'

function App () {
  const [data] = useState(dataInicial)
  const [scrollinY, setScrollinY] = useState(0)

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
  const [img] = useState(dummyImages)

  function handleScroll () {
    const scrolly = window.scrollY
    setScrollinY(scrolly)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  // tengo el navbar supeior fixed, para que el contenido
  // no quede tapado agrege un margintop, dependiendo
  // de si estamos en moviles o en desktop ese marginTop
  // se vuelve mas grande o mas chico
  const addmarginTop = window.innerWidth <= 500 ? 70 : 140
  return (
    <div>
      <NavBar posScrollY={scrollinY} />

      <Container
        style={{ background: 'rgba(219, 220, 222, 1)',
          marginTop: addmarginTop }}>
        <Row>
          <Bienvenida data={data.seccion1} />
        </Row>

        <Row>
          <div className="col-lg-12 mt-4">
            <h2 className="titulos-pricipales text-left my-4">Proyectos</h2>
            <Galeria images={img}/>
          </div>
        </Row>

        <Row>
          {/* <a name="equipo"></a> NO BORRAR */}
          <Equipo data={data.seccion3} />
        </Row>

        <Row>
          <Contacto />
        </Row>

      </Container>

      <Footer />

    </div>
  )
}

export default App
