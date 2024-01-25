import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsList from './component/itemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <p>
        <ItemsList/>
        </p>
      </div>
    </>
  )
}

export default App
