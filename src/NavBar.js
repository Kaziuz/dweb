import React, { Fragment, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import dwebblack from './img/dwebblack.png'

function NavBar () {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Fragment>
      <Navbar color="faded" className="root-color fixed-top" style={{boxShadow: '0 1px 3px rgba(0,0,0,.11)'}}>
        <NavbarBrand
          href="/"
          className="mr-auto"
        >
          <img
            src={dwebblack}
            width="90px"
            alt=""
            className="mr-3"
          />
        </NavbarBrand>

        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
        >
          <IoIosMenu className="" size="2em"/>
        </NavbarToggler>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              {/* <NavLink href="/components/">Components</NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/reactstrap/reactstrap"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default NavBar
