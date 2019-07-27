import React from 'react'

import NavBar from './NavBar' 

function App() {
  return (
    <div className="container">
            <NavBar />
      <div className="row">
        <div className="col-ld-12 h-100">
          menu superior
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h2>Título</h2>
        </div>
        <div className="col-lg-4">
          <h6>Sub titulo</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora 
            quisquam consequuntur! Ab officia exercitationem, 
            doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
        </div>
        <div className="col-lg-4">
          <h6>Sub titulo</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora 
            quisquam consequuntur! Ab officia exercitationem, 
            doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
        </div>
        <div className="col-lg-4">
          <h6>Sub titulo</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora 
            quisquam consequuntur! Ab officia exercitationem, 
            doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
         <h3>Projects</h3>
         <p>Subtitulo o descripción</p>
         <div> aqui iria galeria desponsive con flex </div>
        </div>
      </div>



      <div className="row">
        <div className="col-lg-12">
          <h3>Team</h3>
          <p>Subtitulo o descripción</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-center">
          <div className="card" style={{ width: "18rem"}}>
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
          <div className="card" style={{ width: "18rem"}}>
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
    </div>
  )
}

export default App;
