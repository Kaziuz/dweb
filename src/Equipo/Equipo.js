import React from 'react'
import { Row } from 'reactstrap'

export default function Equipo () {
  return (
    <Row>

      <div className="col-lg-12 my-2">
        <h2 className="titulos-pricipales text-left">Team</h2>
        <h6 className="subtitulos">
          Estamos en constante aprendizaje, el desarrollo de interfaces, los sitios web y las aplicaciones web son nuestro interes
        </h6>
      </div>

      <div className="col-lg-6 mt-6 d-flex justify-content-lg-center">

        <div className="card" style={{ width: '18rem' }}>
          <img src="https://media.licdn.com/dms/image/C4E03AQFdTpFimrGWlA/profile-displayphoto-shrink_200_200/0?e=1570060800&v=beta&t=M1G__vWTh1x24y2RfED0BEgIqV4eXP_Ps6MAmEjcHM8" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make
            up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mt-6 d-flex justify-content-lg-center">
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://live.staticflickr.com/8551/28784877964_22b281ae22_k.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make
            up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </Row>
  )
}
