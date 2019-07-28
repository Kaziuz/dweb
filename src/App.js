import React, { Fragment } from 'react'

import { Container, Row } from 'reactstrap'

import NavBar from './NavBar'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: 120, background: "rgba(219, 220, 222, 1)" }}>
        <Row>

          <div className="col-lg-12 d-flex justify-content-around my-2">
            <span style={{ color: 'yellow', fontSize: 150 }}>&#9650;</span>
            <span style={{ color: '#3f60ad', fontSize: 150 }}>&#9732;</span>
            <span style={{ color: 'red', fontSize: 150 }}>&#9914;</span>
          </div>

          <div className="col-lg-12 my-2">
            <h2 className="titulos-pricipales">dweb</h2>
          </div>

          <div className="col-lg-4 my-4">
            <h6 className="subtitulos">Sub titulo</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
              quisquam consequuntur! Ab officia exercitationem,
              doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
          </div>
          <div className="col-lg-4 my-4">
            <h6 className="subtitulos">Sub titulo</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
              quisquam consequuntur! Ab officia exercitationem,
              doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
          </div>
          <div className="col-lg-4 my-4">
            <h6 className="subtitulos">Sub titulo</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
              quisquam consequuntur! Ab officia exercitationem,
              doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
          </div>
        </Row>

        <Row>
          <div className="col-lg-12 mt-4">
            <h2 className="titulos-pricipales text-left">Projects</h2>
            <p>Subtitulo o descripción</p>
            <div> aqui iria galeria desponsive con flex </div>
          </div>
        </Row>



        <div className="row">

          <div className="col-lg-12">
            <h3>Team</h3>
            <p>Subtitulo o descripción</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-center">
            <div className="card" style={{ width: "18rem" }}>
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
            <div className="card" style={{ width: "18rem" }}>
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
