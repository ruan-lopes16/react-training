import React from 'react'

function TemplateExpression() {

    // criando variavel
    const name = "Ruan"

    // objeto > json
    const data = {
        age: 22,
        job: "Developer"
    }


  return (
    <div>
        <p>2 + 2</p>
        <p>The sum is {2 + 2}</p>
        <h3>Welcome {name}!</h3>
        <p>You're {data.age} years old. You're {data.job}.</p>
    </div>
  )
}

export default TemplateExpression