import React from 'react'

function Contacto () {
  return (
    <div className="row">
      <div className="col-lg-12 my-2">
        <h2 className="titulos-pricipales text-left">Contacto</h2>
        <p className="text-left w-responsive mx-auto mb-5">
          Usted tiene alguna idea, tienda web o proyecto que quiere construir? 
          Por favor sientase en la libertad de escribirnos y exponernos su idea.
          En la brevedad estaremos en contacto con usted</p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-2">
                    <input type="text" id="name" name="name"
                      className="form-control form-custom" placeholder="Tu nombre" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-2">
                    <input type="text" id="email" name="email"
                      className="form-control form-custom" placeholder="Tu email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-2">
                    <input type="text" id="subject" name="subject"
                      className="form-control form-custom" placeholder="Asunto"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message"
                      rows="2" className="form-control form-custom md-textarea" placeholder="Tu mensaje"></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left">
              <button className="btn btn-primary" onClick={console.log('ewnviar')}>Enviar</button>
            </div>
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
    </div>

  )
}

export default Contacto
