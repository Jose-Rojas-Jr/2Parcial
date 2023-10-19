import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nombre } from './componentes/atomos/nombre'
import { Perfil } from './componentes/atomos/perfil'
import { Fondosup } from './componentes/atomos/fondosup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Fondosup></Fondosup>  
      <div>
        
        <Perfil></Perfil>
        <Nombre></Nombre>
        
      </div>
      
      
    </>
  )
}

export default App
