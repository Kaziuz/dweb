import React, { Fragment } from 'react'

import { IoLogoFacebook, IoIosPerson } from 'react-icons/io'
import { Navbar, NavbarBrand } from 'reactstrap'

import dwebwhite from './img/dwebwhite.png'

function Footer () {
  return (
    <Fragment>
      <div className="d-none d-sm-block">
        <Navbar color="faded"
          className="d-flex justify-content-around bg-dark py-2 px-2">
          <NavbarBrand
            href="/"
          >
            <img
              src={dwebwhite}
              width="90px"
              alt=""
              className="mr-3"
            />
          </NavbarBrand>

          <span className="" style={{ color: 'white' }}>© Copyright DWEB Medellín - Colombia</span>
          <div className="" style={{ color: 'white' }}>
            <div className="d-flex justify-content-start">
              <a href="http://www.facebook.com"><IoLogoFacebook className="redes-icon-footer" size="3em"/></a>
              <a href="http://www.facebook.com"><IoIosPerson className="redes-icon-footer" size="3em"/></a>
            </div>
          </div>
        </Navbar>
      </div>

      {/* solo se vera en celulares*/}
      <div className="d-block d-sm-none">
      <Navbar className="d-flex justify-content-around bg-dark fixed-bottom">navbar en celular</Navbar>
      </div>
    </Fragment>
  )
}

export default Footer
