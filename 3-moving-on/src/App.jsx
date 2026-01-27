import './App.css'

// imagem em asset
import nightImg from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderizando lista
import ListRender from './components/ListRender'

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", model: "SF90 XX", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", model:"Cerato", color: "Branco", km: 120040 },
  { id: 3, brand: "Renault", model:"Clio RS", color: "Azul", km: 32000 },
]

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

      {/* render condicional */}
      <ConditionalRender />

      {/* props */}
      <ShowUserName name="Ruan"/>

      {/* desestruturando props*/}
      <CarDetails brand="VW" model="Up!" km={120000} color="white" />

      {/* reutilizando props */}
      <CarDetails brand="Chevrolet" model="Corsa" km={98001} color="silver" />
      <CarDetails brand="Fiat" model="Palio" km={125058} color="silver" />

      {/*renderização de listas com componente*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} model={car.model} km={car.km} color={car.color} />
      ))}
    </div>
  )
}

export default App
