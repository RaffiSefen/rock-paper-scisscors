const ChoicesComponent = (props) => {
  const { yourChoice } = props
  return (
    <div>
      <p>You:{yourChoice}</p>
      <p>Computer:</p>
    </div>
  )
}

export default ChoicesComponent
