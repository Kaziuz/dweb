import React, { Fragment, useState } from 'react'
import axios from 'axios'

function Contacto (props) {
  const [Email, setEmail] = useState('')
  const [nombre, setNombreUsuario] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [showModal, setShowModal] = useState(false)
  const validEmail = isValidEmail(Email)

  const { scrollY } = props 

  // variables para animacion
  const hideDesktop = 'd-none'
  const showDesktop = 'd-block'

  // falta animar este contenido
  const hidetitle = scrollY < 1806 ? hideDesktop : showDesktop
  const hideDescription = scrollY < 1926 ? hideDesktop : showDesktop
  const hideinputName = scrollY < 2035 ? hideDesktop : showDesktop
  const hideinputEmail = scrollY < 2035 ? hideDesktop : showDesktop
  const hideinputAsunto = scrollY < 2056 ? hideDesktop : showDesktop
  const hideinputMensaje = scrollY <  2120 ? hideDesktop : showDesktop
  const hideshowButton = scrollY < 2194 ? hideDesktop : showDesktop

  function isValidEmail (mail) {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)
  }

  const sendEmail = e => {
    e.preventDefault()
    if (Boolean(validEmail) === false) {
      window.alert('su correo esta mal o faltan datos')
    } else {
      const datos = {
        nombre,
        email: Email,
        asunto,
        mensaje,
      }
      axios({
        method: 'POST',
        url: 'http://localhost:3032/send', // local
        data: datos,
      }).then(response => {
        console.log('response server', response)
        if (response.status === 201) {
          setEmail('')
          setNombreUsuario('Tu nombre')
          setAsunto('Asunto')
          setMensaje('Mensaje')
          setShowModal(false)
          window.alert('mensaje enviado exitosamente')
        }
      }).catch(err => {
        console.log(err.response)
        window.alert('Message failed to send.')
      })
    }
  }

  return (
    <Fragment>
      <div className="col-lg-12 mt-4">
        <h2 className={`${hidetitle} titulos-pricipales text-left`}>{props.data.titulo}</h2>
        <p className={`${hideDescription} text-left w-responsive mx-auto mb-5`}>{props.data.descripcion}</p>
        <div className="row">
          <div className="col-md-12 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={sendEmail}>
              <div className="row">

                <div className={`${hideinputName} col-md-6`}>
                  <div className="md-form mb-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-custom"
                      value={nombre}
                      placeholder="Tu nombre"
                      onChange={e => setNombreUsuario(e.target.value)}
                    />
                  </div>
                </div>

                <div className={`${hideinputEmail} col-md-6`}>
                  <div className="md-form mb-2">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control form-custom"
                      placeholder="Tu email"
                      onChange={e => setEmail(e.target.value)}
                      value={Email}
                    />
                  </div>
                </div>

              </div>
              <div className="row">

                <div className={`${hideinputAsunto} col-md-12`}>
                  <div className="md-form mb-2">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control form-custom"
                      placeholder="Asunto"
                      value={asunto}
                      onChange={e => setAsunto(e.target.value)}
                    />
                  </div>
                </div>

              </div>
              <div className="row">

                <div className={`${hideinputMensaje} col-md-12`}>
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control form-custom md-textarea"
                      placeholder="Tu mensaje"
                      value={mensaje}
                      onChange={e => setMensaje(e.target.value)}
                    ></textarea>
                  </div>
                </div>

              </div>
              <div className="text-md-left my-2">
                <button className={`${hideshowButton} btn bottom-send`} type="submit">Enviar</button>
                {showModal && <div> Correo enviado con exito </div>}
              </div>
            </form>
            <div className="status"></div>
          </div>

        </div>
      </div>
    </Fragment>

  )
}

export default Contacto
