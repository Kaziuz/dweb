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
    const espacios = Math.ceil(altura / 10) // grid-auto-rows: 12px
    setEspacios(espacios)
  }

  const { imagen: { description, url } } = props

  return (
    <div style={{ gridRowEnd: `span ${espacios}` }}>
      <img
        ref={imageRef}
        alt={description}
        src={url}
      />
    </div>
  )
}

ImageCard.propTypes = {
  imagen: PropTypes.object,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default ImageCard
