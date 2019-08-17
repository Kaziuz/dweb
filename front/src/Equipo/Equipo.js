import React, { Fragment } from 'react'
import { IoLogoFacebook, IoIosPerson } from 'react-icons/io'

export default function Equipo (props) {
  return (
    <Fragment>
      <div className="col-lg-12">
        <h2 className="titulos-pricipales text-left">{props.data.titulo}</h2>
        <h6 className="subtitulos">{props.data.descripcion}</h6>
      </div>

      {/* por default */}
      <div className="d-none d-sm-block">

        <div className="col-lg-12  d-flex justify-content-around ">
          <div className="mx-2">
            <img src="https://thispersondoesnotexist.com/image"
              className="img-fluid" alt="..." style={{ maxWidth: '35vw' }} />
            <h6 className="subtitulos mt-4">{props.data.integrante2.nombre}</h6>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className="redes-icon" size="3em"/></a>
              <a href="http://www.twitter.com"><IoIosPerson className="redes-icon" size="3em"/></a>
            </div>
          </div>

          <div className="mx-2">
            <img src="https://thispersondoesnotexist.com/image"
              className="img-fluid" alt="..." style={{ maxWidth: '35vw' }} />
            <h6 className="subtitulos mt-4">{props.data.integrante1.nombre}</h6>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className="redes-icon" size="3em"/></a>
              <a href="http://www.facebook.com"><IoIosPerson className="redes-icon" size="3em"/></a>
            </div>
          </div>

        </div>
      </div>

      {/* solo en celulares */}
      <div className="d-sm-none d-md-none lg-none d-xl-none">

        <div className="col-xs-12">
          <div className="mx-2">
            <img src="https://thispersondoesnotexist.com/image"
              className="img-fluid mx-2 my-2" alt="..." style={{ maxWidth: '95vw' }} />
            <h6 className="subtitulos mt-4">Sub titulo</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
            quisquam consequuntur! Ab officia exercitationem,
           doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
            </p>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className="redes-icon" size="3em"/></a>
              <a href="http://www.twitter.com"><IoIosPerson className="redes-icon" size="3em"/></a>
            </div>
          </div>

          <div className="mx-2">
            <img src="https://thispersondoesnotexist.com/image"
              className="img-fluid mx-2 my-2" alt="..." style={{ maxWidth: '95vw' }} />
            <h6 className="subtitulos mt-4">Sub titulo</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat veritatis tempora
            quisquam consequuntur! Ab officia exercitationem,
           doloribus non dolor cumque laboriosam, quibusdam consectetur odio explicabo, obcaecati a officiis aperiam?
            </p>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className="redes-icon" size="3em"/></a>
              <a href="http://www.facebook.com"><IoIosPerson className="redes-icon" size="3em"/></a>
            </div>
          </div>

        </div>
      </div>


    </Fragment>
  )
}
