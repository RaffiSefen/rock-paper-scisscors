const Result = (props) => {
  const { userScore, computerScore, success } = props
  return (
    <div className={`text-center ${success ? "bg-success" : "bg-danger"}`}>
      <h3 className="col-md-6" id="user-score">
        You:{userScore}
      </h3>
      <h3 className="col-md-6" id="computer-score">
        Computer:{computerScore}
      </h3>
    </div>
  )
}

export default Result
