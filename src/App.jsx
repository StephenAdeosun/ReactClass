import About from './components/AboutUs'
import Projects from './components/Projects'
import './App.css'
import {Routes, Route } from "react-router-dom";

import Lists from './components/Lists'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './pages/register'
import Users from './pages/users'
import Reference from './pages/reference'
import ResponsiveCards from './pages/responsiveCards';
import { UserProvider } from "../src/components/Context"

function App() {

  return (
    <div className="App">    

    <UserProvider>
      
      <Navbar/>

  <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/reference' element={<Reference/>} />
          <Route path='/cards' element={<ResponsiveCards/>} />

          <Route path='/about' element={<About/>} />
          <Route path='/lists' element={<Lists/>} /> 
      </Routes>

    </UserProvider>


    

      
    </div>

    
  )
}
export default App


