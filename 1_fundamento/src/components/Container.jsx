

const Container = ({children, myValue}) => {
  return (
    <div>
    <h1>Titulo do container</h1>
    {children}
    {myValue}
    </div>
  )
}

export default Container