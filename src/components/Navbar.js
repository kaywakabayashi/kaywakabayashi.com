import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    // if (window.location.pathname === '/') return null;

    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative font-mono">
            <div className="px-8 py-8 cursor-pointer" onClick={toggle}>
                KW
            </div>
        </nav>
    )
}

export default Navbar