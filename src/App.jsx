import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsList from './component/all/itemlist/index.jsx'
import Item from './component/all/item/item.jsx'
import ItemFormFind from './component/all/itemformfind/index.jsx'
import Student from './component/all/student/student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <p>
        <ItemsList/>
        <ItemFormFind/>
        <Student id="1"/>
        </p>
      </div>
    </>
  )
}

export default App
