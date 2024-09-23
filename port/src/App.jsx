import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import About from './pages/About'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Content/>
    <About/>
    </div>
  )
}

export default App