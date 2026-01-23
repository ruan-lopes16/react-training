// 2 - importando componente
import FirstComponent from './components/FirstComponent'
import './App.css'

// 4 - importando template expression
import TemplateExpression from './components/TemplateExpression'
// 5 - hierarquia
import MyComponent from './components/MyComponent'
// 6 - eventos
import Events from './components/Events'

function App() {
  // 3 - comentários
  return (
    
      <div className='App'>
        {/* comentário JSX */}
        <h1>Fundamentals React</h1>
        <FirstComponent /><br />
        <TemplateExpression /><hr />
        <MyComponent /><hr />
        <Events/>
      </div>
  )
}

export default App
