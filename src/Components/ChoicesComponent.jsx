const ChoicesComponent = (props) => {
  const { yourChoice, computerChoice } = props
  return (
    <div>
      <p>You:{yourChoice}</p>
      <p>Computer:{computerChoice}</p>
    </div>
  )
}

export default ChoicesComponent
