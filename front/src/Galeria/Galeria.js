import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

function Galeria ({ google }) {
  const imagenes = google.map((row, idx) => {
    return <ImageCard key={idx}
      imagen={row}
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
}

export default Galeria
