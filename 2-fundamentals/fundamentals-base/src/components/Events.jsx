import React from 'react'

const Events = () => {
    // função
    const handleClick = (e) => {
        console.log(e)
        console.log("Executed")
    }

    // 8 - função de renderização
    const renderSomething = (x) => { // JSX
        if(x){
            return <p>Rendering this</p>
        } else {
            return <p>Rendering other</p>
        }
    }

  return (
    <div>
        <button onClick={() => console.log("Testing a Event")}>
            Click here
        </button>
        <br /><br />
        {/* 7 - evento com função*/}
        <div>
            <button onClick={handleClick}>Click here >>> function</button>
        </div>
       <hr />
        {/** 8 - função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events
