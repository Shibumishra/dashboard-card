import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>Logo</Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;