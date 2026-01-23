// 2 - importando componente
import FirstComponent from './components/FirstComponent'
import './App.css'

// 4 - importando template expression
import TemplateExpression from './components/TemplateExpression'

function App() {
  // 3 - comentários
  return (
    
      <div className='App'>
        {/* comentário JSX */}
        <h1>Fundamentals React</h1>
        <FirstComponent /><br />
        <TemplateExpression />
      </div>
  )
}

export default App
