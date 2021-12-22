import TitleComponent from "./Components/TitleComponent"
import Result from "./Components/Result"
import ImageComponent from "./Components/ImageComponent"

function App() {
  return (
    <div className="App">
      <TitleComponent></TitleComponent>
      <Result></Result>

      <ImageComponent name="Rock" img="rock.jpg"></ImageComponent>
    </div>
  )
}

export default App
