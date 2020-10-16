import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const closeMobileMenu = () => setClick(false);
    const handleClick= () => setClick(!click);

    const showButton = () => {
        (window.innerWidth <= 960 ? setButton(false) : setButton(true))
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <i className='fas fa-dumbbell'/>&nbsp;CALISOMETRIC 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Strona główna
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/o-mnie' className='nav-links' onClick={closeMobileMenu}>
                                O mnie
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                    </ul>
                    {button}
                </div>
            </nav>
        </>
    )
}

export default Navbar