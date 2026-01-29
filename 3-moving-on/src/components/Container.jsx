const Container = ({children}) => {
  return (
    <div> {/** coisa que irá ficar fixa */}
        <h1>Content of the parent component</h1>
        {children} {/** coisa que vai ser dinamica de acordo com o que colocar em App */}
    </div>
  )
}

export default Container