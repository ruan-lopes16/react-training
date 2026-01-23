import './App.css'

// imagem em asset
import nightImg from './assets/night.jpg'

function App() {

  return (
    <div>
      <h1>Moving forward in React</h1>
      {/*1 - imagem em public*/}
      <img src="/img.jpg" alt="image in public" />
      
      {/* 2 - imagem em assets*/}
      <img src={nightImg} alt="image in assets" />
    </div>
  )
}

export default App
