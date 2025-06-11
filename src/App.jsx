import About from './components/AboutUs'
import Projects from './components/Projects'
import './App.css'
import {Routes, Route } from "react-router-dom";

import Lists from './components/Lists'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './pages/register'
import Users from './pages/users'

function App() {

  return (
    <div className="App">    

      {/* <Navbar/> */}

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/lists' element={<Lists/>} /> 
      </Routes>


      
    </div>

    
  )
}
export default App


