import React, { Fragment } from 'react'

import ecommerce from '../img/servicios/ecommerce.svg'
import aplicaciones from '../img/servicios/aplicaciones.svg'
import ux from '../img/servicios/ux.svg'
import wordpress from '../img/servicios/wordpress.svg'

function Bienvenida (props) {
  const { descripcion, titulo,
    servicios, servicio1, servicio2, servicio3 } = props.data

  function drawIcon (image) {
    if (image.includes('Wordpress')) {
      return <div className={`servicios-icons`}
        style={{ background: `url(${wordpress}) no-repeat top left`, backgroundSize: 'contain', filter: 'invert(1)' }}></div>
    } else if (image.includes('UX')) {
      return <div className={`servicios-icons`}
        style={{ background: `url(${ux}) no-repeat top left`, backgroundSize: 'contain', filter: 'invert(1)' }}></div>
    } else if (image.includes('Ecommerce')) {
      return <div className={`servicios-icons`}
        style={{ background: `url(${ecommerce}) no-repeat top left`, backgroundSize: 'contain', filter: 'invert(1)' }}></div>
    } else {
      return <div className={`servicios-icons`}
        style={{ background: `url(${aplicaciones}) no-repeat top left`, backgroundSize: 'contain', filter: 'invert(1)' }}></div>
    }
  }

  const hideDesktop = 'none'
  const showDesktop = 'inline-grid'
  const showHideProyectos =  props.scrollY <= 255 ? hideDesktop : showDesktop

  return (
    <Fragment>
      <div className="col-lg-12">
        <h2 className="text-left titulos-pricipales text-center">{titulo}</h2>
        <p className="mt-4">{descripcion}</p>
      </div>

      <div className="col-sm-4 mt-4">
        <h5 className="subtitulos text-left">{servicio1.titulo}</h5>
        <p>{servicio1.descripcion}</p>
      </div>

      <div className="col-sm-4 mt-4">
        <h5 className="subtitulos text-left">{servicio2.titulo}</h5>
        <p>{servicio2.descripcion}</p>
      </div>

      <div className="col-sm-4 mt-4">
        <h5 className="subtitulos text-left">{servicio3.titulo}</h5>
        <ul className="">
          { servicio3.descripcion.map((o, idx) => {
            return <li key={idx}> {o}</li>
          }) }
        </ul>
      </div>

      <div className="d-none d-sm-flex col-lg-12 justify-content-between">
        { servicios.map((servicio, idx) => {
          return (
            <div key={`${idx}-${servicio.titulo}`} style={{ display: `${showHideProyectos}` }}>
              {drawIcon(servicio)}
              <span className="p-2 text-center text-uppercase font-weight-bold">
                {servicio}
              </span>
            </div>
          )
        })}
      </div>

      <div className="d-sm-none col-sm-12">
        { servicios.map((servicio, idx) => {
          return (
            <div key={`${idx}-moviles`} className={`d-flex align-items-center`}>
              {drawIcon(servicio)}
              <span className="p-2 text-right text-uppercase font-weight-bold">
                {servicio}
              </span>
            </div>
          )
        })}
      </div>

    </Fragment>
  )
}

export default Bienvenida
