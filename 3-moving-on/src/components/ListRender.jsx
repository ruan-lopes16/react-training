import {use, useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Ruan", "Ana", "Clara"])

    // array de objeto
    const [users, setUsers] = useState([
        {id: 1, name: "Ruan", age: 22},
        {id: 2, name: "Ana", age: 23},
        {id: 3, name: "Clara", age: 24}
    ])

    // 6 - previous state
    const deleteRandom = () => {
        // achar um numero aleatorio com base na quantidade de itens na lista
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>  
            // quero que faça um filtro nos usuários => retorna todos os usuarios com o id diferente no numero aleatorio
            prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/* render sem key*/}
        <ul>
            {/*
            {list.map((item) => ( // loop para exibi elementos
                <li>{item}</li>
            ))}
            */}

            {/*gambiarra para parar o warning no console - não aconselhavel*/}
            {list.map((item, i) => ( // loop para exibi elementos
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* render com key */}
        <ul>
            {users.map((user) => (
                // definindo/indicando a key
                <li key={user.id}> 
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        <hr />
        {/* 6- previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender