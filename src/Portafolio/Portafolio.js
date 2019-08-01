import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'
import './ImageList.css'

function Portafolio ({ images }) {
  const imagenes = images.map((img, idx) => {
    return <ImageCard key={idx} imagen={img} />
  })

  return (
    <div className="wrapGaleria">
      <div className="image-list">{imagenes}</div>
    </div>
  )
}

Portafolio.propTypes = {
  images: PropTypes.array,
}

export default Portafolio
