import { useState } from "react"

const Data = () => {
    let someData = 10;

    // alterando valor - fazendo re-renderização do componente
    //    [variavel     , método que muda a variavel]
    const [anotherNumber, setAnotherNumber] = useState(15) // dentro de () dou um valor inicial para o estado

  return (
    <div>
        <p>Value: {someData}</p>
        {/*isso não funciona*/}
        <button onClick={() => (someData = 15)}>change variable</button>

        {/*jeito certo*/}
        <p>UseState Value: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Change State</button>
        <hr />
    </div>
  )
}

export default Data