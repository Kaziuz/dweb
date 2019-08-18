import React, { Fragment, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import dwebblack from './img/dwebblack.png'

function NavBar (props) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  console.log('scroll in y nav', props.posScrollY)

  return (
    <Fragment>
      <Navbar color="faded" className="root-color fixed-top custom-navbar-final">
        <NavbarBrand
          href="/"
          className="mr-auto"
        >
          <div className="mr-3 logo" style={{ background: `url(${dwebblack}) no-repeat top left`, backgroundSize: 'contain' }}></div>
        </NavbarBrand>

        <NavbarToggler
          onClick={toggleNavbar}
        >
          <IoIosMenu className="" size="1.6em"/>
        </NavbarToggler>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                href="#equipo"
              >
                Equipo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default NavBar
