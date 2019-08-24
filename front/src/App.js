import React, { useState, useEffect, useRef } from 'react'
import dataInicial from './data.json'
import { Container, Row } from 'reactstrap'
import Tabletop from 'tabletop'
import NavBar from './NavBar'
import Bienvenida from './Bienvenida/Bienvenida'
import Galeria from './Galeria/Galeria'
import Equipo from './Equipo/Equipo'
import Footer from './Footer'
import Contacto from './Contacto'

function App () {
  const [data] = useState(dataInicial)
  const [googleSheet, setGoogleSheet] = useState([])
  const [scrollinY, setScrollinY] = useState(0)
  const refBody = useRef()

  function handleScroll () {
    const scrolly = window.scrollY
    setScrollinY(scrolly)
  }

  function tabletopInit () {
    console.log('tabletopInit')
    Tabletop.init({
      key: '1Wx2_nXx-33vHE3jcyL0-4uOYu0NSn191OsSjo-FfyW4',
      callback: res => {
        setGoogleSheet(res.proyectos.elements)
      },
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    tabletopInit()
  }, [])

  // tengo el navbar supeior fixed, para que el contenido
  // no quede tapado agrege un margintop, dependiendo
  // de si estamos en moviles o en desktop ese marginTop
  // se vuelve mas grande o mas chico
  const addmarginTop = window.innerWidth <= 500 ? 70 : 140

  function onGoTop (e) {
    e.preventDefault()
    window.scrollTo(0, 0)
  }

  return (
    <div ref={refBody}>
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
            <Galeria google={googleSheet} />
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

      <button type="button" className="btn float-right custom-buttom"
        onClick={e => onGoTop(e)}
      >
        TOP
      </button>
      <div style={{ clear: 'both' }}></div>

      <Footer />

    </div>
  )
}

export default App
