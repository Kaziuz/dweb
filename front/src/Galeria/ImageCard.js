import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function ImageCard (props) {
  const [espacios, setEspacios] = useState(0)
  const [widthImage, setWidthImage] = useState(0)
  const imageRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans())
  }, [])

  const setSpans = () => {
    const altura = imageRef.current.clientHeight
    const widthImageDOM = imageRef.current.clientWidth
    const espacios = Math.ceil(altura / 10)
    setEspacios(espacios)
    setWidthImage(widthImageDOM)
  }

  const { imagen: { description, url } } = props

  return (
    <div style={{ gridRowEnd: `span ${espacios}` }}>
      <div className="wrap-img-gallery"
        style={{ width: `${widthImage}px` }}>
        <img
          ref={imageRef}
          alt={description}
          src={url}
          className="img-galery"
        />
        <div className="more-info">
          <a href="http://www.facebook.com">Link hacia la web </a>
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
