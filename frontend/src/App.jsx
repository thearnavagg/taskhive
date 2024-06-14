import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from './View/login'

function App() {
  const [count, setCount] = useState(0)

  return <login/>
}

export default App
