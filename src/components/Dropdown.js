import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-row-4 text-center items-center'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <div>
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/menu">Projects</Link>
            </div>
            
        </div >
    )
}

export default Dropdown
