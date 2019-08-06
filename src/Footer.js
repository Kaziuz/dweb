import React, { Fragment, useState } from 'react'

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import dwebwhite from './img/dwebwhite.png'

function Footer () {
  return (
    <Fragment>
      <Navbar color="faded" className="bg-dark mt-4 d-flex justify-content-around">
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
          Redes sociales del sitio aqui
        </div>
      </Navbar>
    </Fragment>
  )
}

export default Footer
