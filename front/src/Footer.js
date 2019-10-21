import React, { Fragment } from 'react'

import { Navbar, NavbarBrand } from 'reactstrap'

import dwebwhite from './img/dwebwhite.png'

function Footer () {
  return (
    <Fragment>
      <div className="d-none d-sm-block mt-4">
        <Navbar color="faded"
          className="d-flex justify-content-around py-2 px-2" style={{ background: 'rgb(29, 28, 36)' }}>
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
        </Navbar>
      </div>

      {/* solo se vera en celulares */}
      <div className="d-block d-sm-none">
        <Navbar className="d-flex justify-content-around fixed-bottom" style={{ background: 'rgb(29, 28, 36)' }}>
          <span className="text-left" style={{ color: 'white', fontSize: 12 }}>© Copyright DWEB Medellín - Colombia</span>
        </Navbar>
      </div>
    </Fragment>
  )
}

export default Footer
