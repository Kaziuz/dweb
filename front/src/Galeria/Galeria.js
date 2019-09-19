import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

function Galeria ({ google, scrollY }) {
  const hideDesktop = 'd-none'
  const showDesktop = 'd-block'
  const showHideProyectos = scrollY < 660 ? hideDesktop : showDesktop
  const addAnimation = scrollY >= 660 ? 'animated zoomIn slow' : ''

  const imagenes = google.map((row, idx) => {
    return <ImageCard key={idx}
      imagen={row}
      animation={addAnimation}
      showHideProyectos={showHideProyectos}
    />
  })

  return (
    <div className="wrap-galeria mt-4">
      <div className="image-list">{imagenes}</div>
    </div>
  )
}

Galeria.propTypes = {
  google: PropTypes.array,
  scrollY: PropTypes.number,
}

export default Galeria
