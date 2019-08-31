import React, { Fragment, useState } from 'react'
import axios from 'axios'

function Contacto () {
  const [Email, setEmail] = useState('')
  const [nombre, setNombreUsuario] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [showModal, setShowModal] = useState(false)
  const validEmail = isValidEmail(Email)

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
        url: 'http://localhost:3032/send',
        data: datos,
      }).then(response => {
        console.log('response server', response)
        if (response.status === 201) {
          setEmail('')
          setNombreUsuario('Tu nombre')
          setAsunto('Asunto')
          setMensaje('Mensaje')
          setShowModal(false)
          window.alert('mensaje enviado exitomente')
        }
      }).catch(err => {
        console.log(err.response)
        window.alert('Message failed to send.')
      })
    }
  }

  return (
    <Fragment>
      <div className="col-lg-12">
        <h2 className="titulos-pricipales text-left">Contacto</h2>
        <p className="text-left w-responsive mx-auto mb-5">
          Usted tiene alguna idea, tienda web o proyecto que quiere construir?
          Por favor sientase en la libertad de escribirnos y exponernos su idea.
          En la brevedad estaremos en contacto con usted
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-12">
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
                <div className="col-md-12">
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
                <button className="btn bottom-send" type="submit">Enviar</button>
                {showModal && <div> Correo enviado con exito </div>}
              </div>
            </form>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Medellín, Antioquia - Colombia</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 300 218 56 57</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>info@deweb.com</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Fragment>

  )
}

export default Contacto
