import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-black p-1 sticky top-0'>
        <nav className='container text-white mx-auto'  >
            <div className='flex justify-between font-bold'>
                <h1>LOGO</h1>
                <ul className='flex'>
                  <li className='mx-4'><NavLink to="/">Home</NavLink></li>
                  <li className='mx-4'><NavLink to="/login">Login</NavLink></li>
                  <li className='mx-4'><NavLink to="/signup">SignUp</NavLink></li>
                  <li className='mx-4'><button>Logout</button></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar