const ImageComponent = (props) => {
  const { name, img, handleUserChoice } = props

  return (
    <>
      <button className="btn" onClick={() => handleUserChoice(name)}>
        <img src={`./assets/${img}`} alt={name} />
      </button>
    </>
  )
}

export default ImageComponent
