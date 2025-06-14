// create a navbar
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from "./Context"
import { SunMoon,Moon } from 'lucide-react';

// style this navbar with css
const StyleCss = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '18px'
};


const Navbar = () => {
const {user, dark , ToggleMode} = useContext(UserContext)

  return (
    <nav className={` flex  ${
      dark === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    > 
    <h1>{user}</h1>
    <p className='text-2xl ml-6'>{dark}</p>
    <button onClick={ToggleMode} >
      {
        dark === "light" ? <SunMoon className='text-red-600'/> : <Moon />
      }
    </button>
            {/* <button  onClick={ToggleMode}  className="text-white shadow-lg hover:bg-white hover:text-blue-400  shadow-blue-300 flex mt-[18px] rounded-[200px] cursor-pointer bg-blue-400 p-6 mx-auto">TOGGLE</button> */}

    </nav>
  );
}

export default Navbar;

