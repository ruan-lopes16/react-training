import React from 'react'
                    // indica que estou esperando propriedades
const ShowUserName = (props) => {
  return (
    <div>
        <h2>User name is: {props.name}</h2>
    </div>
  )
}

export default ShowUserName