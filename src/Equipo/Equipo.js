import React from 'react'
import { Row } from 'reactstrap'
import { IoLogoFacebook, IoIosPerson } from 'react-icons/io'

export default function Equipo () {
  return (
    <Row>
      <div className="col-lg-12 my-2">
        <h2 className="titulos-pricipales text-left">Team</h2>
        <h6 className="subtitulos">
          Estamos en constante aprendizaje, el desarrollo de interfaces, los sitios web y las aplicaciones web son nuestro interes
        </h6>
      </div>
      <div className="col-lg-12 d-flex justify-content-around">
        <div>
          <img src="https://avatars1.githubusercontent.com/u/7493220?s=1200&v=4"
            className="img-fluid" alt="..." style={{ maxWidth: '45vw' }} />
          <h6 className="subtitulos mt-4">Sub titulo</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
            quisquam consequuntur! Ab officia exercitationem,
           doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
          <div className="d-flex justify-content-start">
            <a href="#"><IoLogoFacebook className="redes-icon" size="3em"/></a>
            <a href="#"><IoIosPerson className="redes-icon" size="3em"/></a>
          </div>
        </div>

        <div>
          <img src="https://live.staticflickr.com/8551/28784877964_22b281ae22_k.jpg"
            className="img-fluid" alt="..." style={{ maxWidth: '45vw' }} />
          <h6 className="subtitulos mt-4">Sub titulo</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
            quisquam consequuntur! Ab officia exercitationem,
           doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
          </p>
          <div className="d-flex justify-content-start">
            <a href="#"><IoLogoFacebook className="redes-icon" size="3em"/></a>
            <a href="#"><IoIosPerson className="redes-icon" size="3em"/></a>
          </div>
        </div>
      </div>
    </Row>
  )
}
