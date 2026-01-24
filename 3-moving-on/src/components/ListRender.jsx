import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Ruan", "Ana", "Clara"])

  return (
    <div>
        <ul>
            {list.map((item) => ( // loop para exibi elementos
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender