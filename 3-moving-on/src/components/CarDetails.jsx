import React from 'react'
                    // escrevo todas as props que vou receber
const CarDetails = ({brand, model, km, color}) => {
  return (
    <div>
        <h2>Car details</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Kilometers: {km}km</li>
            <li>Color: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails