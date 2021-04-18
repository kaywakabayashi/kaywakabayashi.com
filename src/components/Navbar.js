import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    // if (window.location.pathname === '/') return null;

    return (
        <nav className="flex justify-between items-center h-16  relative font-mono">
            <div className="px-8 py-8 cursor-pointer transition duration-500 ease-in-out" onClick={toggle}>
                KW
            </div>

        </nav>
    )
}

export default Navbar