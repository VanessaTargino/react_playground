import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Este é o componente Home, que recebe props."
      />
      <Contador />
    </>
  )
}

export default App