import React from "react"

const ImageComponent = (props) => {
  const { name, img } = props
  return (
    <button className="btn btn-primary">
      <img src={`/images/${img}`} alt={name} />
    </button>
  )
}

export default ImageComponent
