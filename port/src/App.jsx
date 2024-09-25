import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Content/>
    <About/>
    <Projects/>
    </div>
  )
}

export default App