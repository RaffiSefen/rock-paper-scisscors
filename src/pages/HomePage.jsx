import TitleComponent from "../components/TitleComponent"
import Result from "../components/Result"
import ImageComponent from "../components/ImageComponent"
import { useEffect, useState } from "react"
import ChoicesComponent from "../components/ChoicesComponent"
import Alert from "../components/Alert"
import DrawComponent from "../components/DrawComponent"

const HomePage = () => {
  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [isWinner, setIsWinner] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const handleUserChoice = (name) => {
    setUserChoice(name)
    handleComputerChoice()
  }
  const handleWinner = () => {
    console.log(`Switch:>>`, userChoice[0] + computerChoice[0])
    switch (userChoice[0] + computerChoice[0]) {
      case "RS":
        setIsWinner(true)
        setIsDraw(false)
        setUserScore(userScore + 1)
        break
      case "RP":
        setIsWinner(false)
        setIsDraw(false)
        setComputerScore(computerScore + 1)
        break
      case "PR":
        setIsWinner(true)
        setIsDraw(false)
        setUserScore(userScore + 1)
        break
      case "PS":
        setIsWinner(false)
        setIsDraw(false)
        setComputerScore(computerScore + 1)
        break
      case "SP":
        setIsWinner(true)
        setIsDraw(false)
        setUserScore(userScore + 1)
        break
      case "SR":
        setIsWinner(false)
        setIsDraw(false)
        setComputerScore(computerScore + 1)
        break
      case "RR":
        setIsDraw(true)
        setIsWinner(false)
        break
      case "PP":
        setIsDraw(true)
        setIsWinner(false)
        break
      case "SS":
        setIsDraw(true)
        setIsWinner(false)
        break
      default:
        setIsDraw(false)
        setIsWinner(false)
    }
  }

  const handleComputerChoice = () => {
    const allChoices = ["Rock", "Paper", "Scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    const randomChoice = allChoices[randomNumber]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    handleWinner()
  }, [userChoice])
  console.log(`isDraw`, isDraw)
  console.log(`isWinner`, isWinner)
  return (
    <div className="container-fluid">
      {isDraw && !isWinner ? (
        <DrawComponent></DrawComponent>
      ) : (
        <Alert success={isWinner}></Alert>
      )}
      <TitleComponent></TitleComponent>
      <Result
        userScore={userScore}
        computerScore={computerScore}
        success={isWinner}
      ></Result>
      <ChoicesComponent
        yourChoice={userChoice}
        computerChoice={computerChoice}
      ></ChoicesComponent>
      <ImageComponent
        name="Rock"
        img="rock.jpg"
        handleUserChoice={handleUserChoice}
      ></ImageComponent>
      <ImageComponent
        name="Paper"
        img="paper.jpg"
        handleUserChoice={handleUserChoice}
      ></ImageComponent>
      <ImageComponent
        name="Scissors"
        img="scissors.jpg"
        handleUserChoice={handleUserChoice}
      ></ImageComponent>
    </div>
  )
}

export default HomePage
