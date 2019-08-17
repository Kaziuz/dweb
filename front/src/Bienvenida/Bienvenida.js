import React, { Fragment } from 'react'
import ecommerce from '../img/servicios/ecommerce.svg'
import aplicaciones from '../img/servicios/aplicaciones.svg'
import ux from '../img/servicios/ux.svg'
import wordpress from '../img/servicios/wordpress.svg'

const width = 120

function Bienvenida (props) {
  console.log('props b', props)
  const { descripcion, titulo, subtitulo,
    servicios, servicio1, servicio2, servicio3 } = props.data

  function drawIcon (image) {
    if (image.includes('Wordpress')) {
      return <img src={wordpress} width={`${width}px`} />
    } else if (image.includes('UX')) {
      return <img src={ux} width={`${width}px`} />
    } else if (image.includes('Ecommerce')) {
      return <img src={ecommerce} width={`${width}px`} />
    } else {
      return (
        <img src={aplicaciones} width={`${width}px`} />
      )
    }
  }

  return (
    <Fragment>
      <div className="col-lg-12">
        <h2 className="text-left titulos-pricipales my-2">{titulo}</h2>
        <p>{descripcion}</p>
      </div>

      <div className="col-sm-4">
        <h5 className="subtitulos text-left">{servicio1.titulo}</h5>
        <p>{servicio1.descripcion}</p>
      </div>

      <div className="col-sm-4">
        <h5 className="subtitulos text-left">{servicio2.titulo}</h5>
        <p>{servicio2.descripcion}</p>
      </div>

      <div className="col-sm-4">
        <h5 className="subtitulos text-left">{servicio3.titulo}</h5>
        <ul className="">
          { servicio3.descripcion.map(o => {
            return <li>{o}</li>
          }) }
        </ul>
      </div>

      <div className="d-none d-lg-flex col-lg-12 justify-content-between">
        { servicios.map((servicio, idx) => {
          return (
            <div key={servicio.titulo} style={{ display: 'inline-grid' }}>
              {drawIcon(servicio)}
              <span className="p-2 text-center text-uppercase font-weight-bold">
                {servicio}
              </span>
            </div>
          )
        }
        )}
      </div>

      <div className="d-sm-none col-sm-12">
        { servicios.map((servicio, idx) => {
          return (
            <div key={`${idx}-moviles`} className="d-flex justify-content-center align-items-center">
              <div className="">{drawIcon(servicio)}</div>
              <span className="p-2 text-right text-uppercase font-weight-bold">
                {servicio}
              </span>
            </div>
          )
        })
        }
      </div>

    </Fragment>
  )
}

export default Bienvenida
