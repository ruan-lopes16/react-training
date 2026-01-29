import React from 'react'

const Fragment = () => {
  return (
    <>
        <div> {/** minhas duas divs estão em um elemento pai - se olhar as outras estará em uma só div */}
            <h2>parent element</h2>
        </div>
        <div>
            <h2>that is also</h2>
        </div>
    </>
  )
}

export default Fragment