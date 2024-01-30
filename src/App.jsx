import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsList from './component/all/itemlist/index.jsx'
import ItemFormFind from './component/all/itemformfind/index.jsx'
import StudentList from './component/all/studentlist/index.jsx'
import StudentFormFind from './component/all/studentformfind/index.jsx'
import SubjectsList from './component/all/subjectlist/index.jsx'
import SubjectFormFind from './component/all/subjectformfind/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <p>
        <ItemsList/>
        <ItemFormFind/>
        <StudentList/>
        <StudentFormFind/>
        <SubjectsList/>
        <SubjectFormFind/> 
        </p>
      </div>
    </>
  )
}

export default App
