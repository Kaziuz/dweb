import React, { Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// import { IoIosMenu } from 'react-icons/io'
import dwebblack from './img/dwebblack.png'

function NavBar ({ posScrollY }) {
  const refLogo = useRef()
  // const refHamburguer = useRef()
  const refNavbar = useRef()

  useEffect(() => {
    // const element =  refLogo &&
    //   refLogo.current.classList.add('animated', 'bounceOutLeft')
    if (posScrollY >= 10) {
      refNavbar.current.style.boxShadow = '0 1px 3px rgba(0,0,0,.11)'
      refNavbar.current.style.background = '#dbdcde'
      refNavbar.current.style.height = '52px'
      refLogo.current.style.width = '36px'
      refLogo.current.style.top = '0px'
      // refHamburguer.current.style.top = '-47px'
    } else {
      refNavbar.current.style.boxShadow = '1px 1px 1px transparent'
      refNavbar.current.style.background = 'transparent'
      refNavbar.current.style.height = '100px'
      refLogo.current.style.width = '120px'
      refLogo.current.style.top = '30px'
      // refHamburguer.current.style.top = '0px'
    }
  })

  return (
    <Fragment>

      <div className="d-none d-sm-block">
        <nav ref={refNavbar}
          className="navbar fixed-top custom-nav d-flex justify-content-center">
          <a className="navbar-brand" href="#">
            <div className="mr-3 logo"
              style={{ background: `url(${dwebblack}) no-repeat top left`,
                backgroundSize: 'contain',
              }} ref={refLogo}></div>
          </a>
          {/* <div className="navbar-top" ref={refHamburguer}><IoIosMenu size="1.6em"/></div> NO BORRAR */}
        </nav>
      </div>

      {/* solo para celulares */}
      <div className="d-block d-sm-none">
        <nav
          className="navbar fixed-top root-color shadow custom-nav d-flex justify-content-center">
          <a className="navbar-brand" href="#">
            <div className="mr-3 logo-celular"
              style={{ background: `url(${dwebblack}) no-repeat top left`,
                backgroundSize: 'contain',
              }}></div>
          </a>
          {/* <div className="navbar-top"><IoIosMenu size="1.6em"/></div> NO BORRAR */}
        </nav>
      </div>

    </Fragment>
  )
}

NavBar.propTypes = {
  posScrollY: PropTypes.number,
}

export default NavBar
