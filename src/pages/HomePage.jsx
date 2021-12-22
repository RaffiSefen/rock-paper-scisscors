import TitleComponent from "../components/TitleComponent"
import Result from "../components/Result"
import ImageComponent from "../components/ImageComponent"
import { useState } from "react"

const HomePage = () => {
  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")

  const handleUserChoice = (name) => {
    setUserChoice(name)
  }
  return (
    <>
      {userChoice}
      <TitleComponent></TitleComponent>
      <Result></Result>

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
    </>
  )
}

export default HomePage
