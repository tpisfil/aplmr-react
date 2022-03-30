import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    //click will determine whether it shows the hamburger menu or not

    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }; //reverse the click so it shows either X-icon or menu icon

    const closeMobileMenu = () => {
        setClick(false);
    }; //closes menu because click gets set to false so its not active 

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }; //determines whether the button will be shown or not 

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    //if the window gets resized to smaller than 960 it will set button to false 

    return (
        <>
        <nav className="navbar">

            <div className="navbar-container">
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    APLMR <i className="fa-solid fa-screwdriver-wrench"/>
                </Link>
                {/* this is for the logo in the top left corner of the navbar */}

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> {/* will determine whether it shows X-icon or menu icon */}

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {/* when you click an item, it will take you to the link AND the menu will disappear */}
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li> {/* link 1 */}

                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li> {/* link 2 */}

                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li> {/* link 3 */}

                    <li>
                        <Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>

                    {/* <li className='nav-item'>
                        <Link to='/parts' className='nav-links' onClick={closeMobileMenu}>
                            Parts &amp; Sales
                        </Link>
                    </li> link 4 */}

                    {/* <li className='nav-item'>
                        <Link to='http://www.aplawn.com' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li> link 5 is an EXTERNAL link */}
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    );
};

export default Navbar;