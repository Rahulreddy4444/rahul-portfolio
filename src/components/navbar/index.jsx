import React, { useState } from 'react';
import { FaBars, FaUserGraduate } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLs',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false); // Close the menu after clicking a link
    };

    return (
        <div>
            <nav className="navbar">
                <div className='navbar_container'>
                    <Link to={'/'} className='navbar_container_logo'>
                        <FaUserGraduate size={30} />
                    </Link>
                </div>
                <ul className= {` navbar_container_menu ${toggleIcon ? 'active' : ''} `}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar_container_menu_item'>
                                <Link className='navbar_container_menu_item_links' to={item.to} onClick={handleLinkClick} >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar;