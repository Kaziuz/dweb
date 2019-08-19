import React, { Fragment, useEffect, useState, useRef } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import dwebblack from './img/dwebblack.png'

function NavBar ({ posScrollY }) {
  const refLogo = useRef()
  const navbarRef = useRef()
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    // const element =  refLogo &&
    // refLogo.current.classList.add('animated', 'bounceOutLeft')

    if (posScrollY >= 10 ) {
      refLogo.current.style.width = '36px'

    } else {
      refLogo.current.style.width = '120px' 
    }

    console.log('navbarRef', navbarRef)
  })

  const toggleNavbar = () => setCollapsed(!collapsed)

  // console.log('select element', element)

  return (
    <Fragment>
      <Navbar ref={navbarRef}
        color="faded"
        className="fixed-top"
      >
        <NavbarBrand
          href="/"
          className="mr-auto"
        >
          <div className="mr-3 logo"
            style={{ background: `url(${dwebblack}) no-repeat top left`,
              backgroundSize: 'contain',
            }} ref={refLogo}></div>
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
