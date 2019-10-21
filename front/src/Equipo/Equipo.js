import React, { Fragment } from 'react'
import { IoIosPerson } from 'react-icons/io'
import equipo_dweb from '../img/equipo/equipo_dweb.jpg'

export default function Equipo(props) {
  const { integrante1, integrante2, titulo, descripcion } = props.data
  return (
    <Fragment>
      <div className="col-lg-12 mt-4">
        <h2 className={`titulos-pricipales text-left my-4`}>{titulo}</h2>
        <h6 className={`subtitulos mt-4 s`}>{descripcion}</h6>
      </div>

      {/* por default */}
      <div className="d-none d-sm-block">
        <img src={equipo_dweb} className={`d-block mx-auto img-fluid my-4`} alt="equipo dweb" />
      </div>
      <div className="d-none d-sm-block">
        <div className="col-lg-12 d-flex justify-content-between mt-2">
          <div className="mx-2">
            <h6 className={`subtitulos mt-4`}>{integrante2.nombre}</h6>
            <p>{integrante2.descripcion}</p>
            <div className="d-flex justify-content-start">
              <a href="http://danielarango.cleverapps.io/"><IoIosPerson className={`redes-icon ml-2`} size="3em" /></a>
            </div>
          </div>
          <div className="mx-2">
            <h6 className={`subtitulos mt-4 text-right`}>{integrante1.nombre}</h6>
            <p className="text-right">{integrante1.descripcion}</p>
            <div className="d-flex justify-content-end">
              <a href="https://mi-sitio-web.johnnysepulveda988.now.sh/"><IoIosPerson className={`redes-icon ml-2`} size="3em" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* solo en celulares */}
      <div className="d-sm-none d-md-none lg-none d-xl-none">
        <img src={equipo_dweb} className={`d-block mx-auto img-fluid my-4`} alt="equipo dweb" />
        <div className="col-xs-12">
          <div className="mx-2">
            <h6 className={`subtitulos mt-4`}>{integrante2.nombre}</h6>
            <p>{integrante2.descripcion}</p>
            <div className="d-flex justify-content-start">
              <a href="http://danielarango.cleverapps.io/"><IoIosPerson className={`redes-icon ml-2`} size="3em" /></a>
            </div>
          </div>

          <div className="mx-2">
            <h6 className={`subtitulos mt-4 text-right`}>{integrante1.nombre}</h6>
            <p className="text-right">{integrante1.descripcion}</p>
            <div className="d-flex justify-content-end">
              <a href="https://mi-sitio-web.johnnysepulveda988.now.sh/"><IoIosPerson className={`redes-icon ml-2`} size="3em" /></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
