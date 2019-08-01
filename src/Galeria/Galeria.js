import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

function Galeria ({ images }) {
  const imagenes = images.map((img, idx) => {
    return <ImageCard key={idx} imagen={img} />
  })

  return (
    <div className="wrapGaleria">
      <div className="image-list">{imagenes}</div>
    </div>
  )
}

Galeria.propTypes = {
  images: PropTypes.array,
}

export default Galeria
