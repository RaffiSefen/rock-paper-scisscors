import React from "react"

export default function Alert(props) {
  const { success } = props
  return (
    <div
      className={`alert alert-dismissible fade show alert-${
        success ? "success" : "danger"
      }`}
      role="alert"
    >
      {success
        ? "Congratulation! You received 1 point"
        : "Unlucky! You won no point"}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
