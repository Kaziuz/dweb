import React, { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

function Portafolio (props) {
    const imagenes = props.images.map((img, idx) => {
        return <ImageCard key={idx} imagen={img} />
    })

    return (
        <div className="image-list">{imagenes}</div>
    )
}

export default Portafolio