import './App.css'

// imagem em asset
import nightImg from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderizando lista
import ListRender from './components/ListRender'

function App() {

  return (
    <div style={{paddingBottom: "500px"}}>
      <h1>Moving forward in React</h1>
      {/*1 - imagem em public*/}
      <img src="/img.jpg" alt="image in public" />
      
      {/* 2 - imagem em assets*/}
      <img src={nightImg} alt="image in assets" />

      <Data/>
      
      {/* render de lista*/}
      <ListRender/>
    </div>
  )
}

export default App
