import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function ImageCard (props) {
  const [espacios, setEspacios] = useState(0)
  const [widthImage, setWidthImage] = useState(0)
  const imageRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans())
  })

  const setSpans = () => {
    const altura = imageRef.current.clientHeight
    const widthImageDOM = imageRef.current.clientWidth
    const espacios = Math.ceil(altura / 10)
    setEspacios(espacios)
    setWidthImage(widthImageDOM)
  }

  return (
    <div style={{ gridRowEnd: `span ${espacios}` }}>
      <div className="wrap-img-gallery"
        style={{ width: `${widthImage}px` }}>
        <img
          ref={imageRef}
          alt={props.imagen.cliente}
          src={props.imagen.img}
          className={`img-galery ${props.showHideProyectos} ${props.animation}`}
        />
        <div className="more-info">
          {/*
          <h6 className="text-warning font-weight-bold text-center"
          style={{ lineHeight: 6, fontSize: 22 }}>{props.imagen.proyecto}</h6> */}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={props.imagen.urlproyecto} target="_blank">Link hacia la web</a>
        </div>
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  imagen: PropTypes.object,
  cliente: PropTypes.string,
  img: PropTypes.string,
  urlproyecto: PropTypes.string,
  animation: PropTypes.string,
  showHideProyectos: PropTypes.string,
}

export default ImageCard
