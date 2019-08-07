import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function ImageCard (props) {
  const [espacios, setEspacios] = useState(0)
  const imageRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans())
  }, [])

  const setSpans = () => {
    const altura = imageRef.current.clientHeight
    const espacios = Math.ceil(altura / 10)
    setEspacios(espacios)
  }

  const { imagen: { description, url } } = props

  return (
    <div style={{ gridRowEnd: `span ${espacios}` }}>
      <div className="wrap-img-gallery">
        <img
          ref={imageRef}
          alt={description}
          src={url}
          className="img-galery"
        />
        <div className="more-info">
          <a href="#">Link hacia la web </a>
        </div>
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  imagen: PropTypes.object,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default ImageCard
