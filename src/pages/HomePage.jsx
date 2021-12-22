import TitleComponent from "../components/TitleComponent"
import Result from "../components/Result"
import ImageComponent from "../components/ImageComponent"

const HomePage = () => {
  return (
    <>
      <TitleComponent></TitleComponent>
      <Result></Result>

      <ImageComponent name="Rock" img="rock.jpg"></ImageComponent>
      <ImageComponent name="Paper" img="paper.jpg"></ImageComponent>
      <ImageComponent name="Scissors" img="scissors.jpg"></ImageComponent>
    </>
  )
}

export default HomePage
