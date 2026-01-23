import MyComponent from "./MyComponent"

// 1 - criando componente
const FirstComponent = () => {
    // lógica da função
    return (
        <div>
            <h2>
                My first component!
                <MyComponent/>
            </h2>
        </div>
    )
}

export default FirstComponent