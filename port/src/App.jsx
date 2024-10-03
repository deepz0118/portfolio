import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import About from './pages/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>

       <Route path='/' element={<Content/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      

       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App