import React, { Fragment } from 'react'
import { IoLogoFacebook, IoIosPerson } from 'react-icons/io'

export default function Equipo (props) {
  const { integrante1, integrante2, titulo, descripcion } = props.data

  // variables para animation
  const hideDesktop = 'd-none'
  const showDesktop = 'd-block'

  const showHideTitleProyectos =  props.scrollY < 930 ? hideDesktop : showDesktop
  const addanimaaddAnimationTitleEquipo = props.scrollY >= 930 ? 'animated slideInUp slow' : ''

  const showHidedescription =  props.scrollY < 1027 ? hideDesktop : showDesktop
  const addanimaaddAnimationdescription = props.scrollY >= 1027 ? 'animated fadeIn delay-1s slow' : ''

  const showpersons =  props.scrollY < 1238 ? hideDesktop : showDesktop
  const addanimationTeam = props.scrollY >= 1238 ? 'animated fadeIn slow' : ''

  const showNamesTeam = props.scrollY < 1451 ? hideDesktop : showDesktop
  const addanimaNameTeam = props.scrollY >= 1451 ? 'animated fadeInUp' : ''
  
  const showDescriptionTeam = props.scrollY < 1500 ? hideDesktop : showDesktop
  const addanimaNameDescripTeam = props.scrollY >= 1500 ? 'animated fadeInLeft' : ''
  
  const showRedesTeam = props.scrollY < 1550 ? hideDesktop : showDesktop
  const addanimationRedesTeam = props.scrollY >= 1550 ? 'animated rotatein' : ''

  console.log('scroll en equipo', props.scrollY)
  return (
    <Fragment>
      <div className="col-lg-12 mt-4">
        <h2 className={`${showHideTitleProyectos} titulos-pricipales text-left my-4 ${addanimaaddAnimationTitleEquipo}`}>{titulo}</h2>
        <h6 className={`${showHidedescription} subtitulos mt-4 ${addanimaaddAnimationdescription}`}>{descripcion}</h6>
      </div>

      {/* por default */}
      <div className="d-none d-sm-block">
        <div className="col-lg-12 d-flex justify-content-around mt-2">
          <div className="mx-2">
            <img src="https://bridge34.qodeinteractive.com/wp-content/uploads/2016/05/team.jpg"
              className={`${showpersons} img-fluid ${addanimationTeam}`} alt={integrante2.nombre} style={{ maxWidth: '35vw' }} />
            <h6 className={`${showNamesTeam} ${addanimaNameTeam} subtitulos mt-4`}>{integrante2.nombre}</h6>
            <p className={`${showDescriptionTeam} ${addanimaNameDescripTeam}`}>{integrante2.descripcion}</p>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className={`${showRedesTeam} ${addanimationRedesTeam} redes-icon`} size="3em"/></a>
              <a href="http://www.twitter.com"><IoIosPerson className={`${showRedesTeam} ${addanimationRedesTeam} redes-icon ml-2`} size="3em"/></a>
            </div>
          </div>

          <div className="mx-2">
            <img src="https://bridge34.qodeinteractive.com/wp-content/uploads/2016/05/team2.jpg"
              className={`${showpersons} img-fluid ${addanimationTeam} delay-1s`} alt={integrante1.nombre} style={{ maxWidth: '35vw' }} />
            <h6 className={`${showNamesTeam} ${addanimaNameTeam} subtitulos mt-4`}>{integrante1.nombre}</h6>
            <p className={`${showDescriptionTeam} ${addanimaNameDescripTeam}`}>{integrante1.descripcion}</p>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className={`${showRedesTeam} ${addanimationRedesTeam} redes-icon`} size="3em"/></a>
              <a href="http://www.facebook.com"><IoIosPerson className={`${showRedesTeam} ${addanimationRedesTeam} redes-icon ml-2`} size="3em"/></a>
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
              <a href="http://www.twitter.com"><IoIosPerson className="redes-icon ml-2" size="3em"/></a>
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
              <a href="http://www.facebook.com"><IoIosPerson className="redes-icon ml-2" size="3em"/></a>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}
