import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGithub } from '@fortawesome/free-solid-svg-icons'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

function NavBar () {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Fragment>
      <Navbar color="faded" className="root-color fixed-top">
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

        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
        >
          {/* <span style={{ outline: 'none' }}>&#9776;</span> */}
          <i className="fa fa-bars"></i>
          <FontAwesomeIcon icon={faBars} />
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
