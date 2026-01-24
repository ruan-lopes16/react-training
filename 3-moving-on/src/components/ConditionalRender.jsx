import React from 'react'

const ConditionalRender = () => {
    const x = 5
    const name = "Ruan"

  return (
    <div>
        {/* 7 - render condicional - if*/}
        <h3>Will that be displayed?</h3>
        {x > 2 && <p>If X is true yes </p>}
<hr />
        {/* 8 - render condicional - else*/}
        <h3>Render Ternário</h3>
        {name === "Ana" ? (
            <div> 
                <p>Hello, Ana!</p>
            </div>
        ) : (
            <div>
                <p>Name not found.</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender