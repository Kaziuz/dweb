import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGithub } from '@fortawesome/free-solid-svg-icons'

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

function Footer () {
  return (
    <Fragment>
      <Navbar color="faded" className="bg-dark mt-4">
        <NavbarBrand
          href="/"
          className="mr-auto"
        >
          <img
            src="https://png.pngtree.com/element_pic/16/05/30/11574bb301599cc.jpg"
            width="90px"
            alt=""
            className="mr-3"
          />
        </NavbarBrand>  

      </Navbar>
    </Fragment>
  )
}

export default Footer
