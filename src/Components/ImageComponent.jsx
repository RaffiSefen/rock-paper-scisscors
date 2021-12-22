import React from "react"

const ImageComponent = (props) => {
  const { name, img } = props
  return (
    <button className="btn">
      <img src={`./assets/${img}`} alt={name} />
    </button>
  )
}

export default ImageComponent
