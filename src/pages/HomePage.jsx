import TitleComponent from "../components/TitleComponent"
import Result from "../components/Result"
import ImageComponent from "../components/ImageComponent"
import { useState } from "react"
import ChoicesComponent from "../components/ChoicesComponent"

const HomePage = () => {
  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")

  const handleUserChoice = (name) => {
    setUserChoice(name)
  }
  return (
    <>
      <TitleComponent></TitleComponent>
      <Result></Result>
      <ChoicesComponent yourChoice={userChoice}></ChoicesComponent>
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
