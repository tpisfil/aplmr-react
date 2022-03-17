import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {

    const [click, setClick] = useState(false);
    //click will determine whether it shows the hamburger menu or not

    const [buttton, setButton] = useState(true);

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
    //testing

    window.addEventListener('resize', showButton);
    //if the window gets resized to smaller than 960 it will set button to false 

    return (
        <>
            <nav className="navbar">

                <div className="navbar-container">
                    <Link to="/" className='navbar-logo'>
                        APLMR <i class="fa-solid fa-screwdriver-wrench"/>
                    </Link>
                </div> {/* this is for the logo in the top left corner of the navbar */}

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> {/* will determine whether it shows X-icon or menu icon */}

                <div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* when you click an item, it will take you to the link AND the menu will disappear */}
                        
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> {/* link 1 */}

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li> {/* link 2 */}

                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Our Services
                            </Link>
                        </li> {/* link 3 */}

                        <li className='nav-item'>
                            <Link to='/parts' className='nav-links' onClick={closeMobileMenu}>
                                Parts &amp; Sales
                            </Link>
                        </li> {/* link 4 */}

                        <li className='nav-item'>
                            <Link to='http://www.aplawn.com' className='nav-links' onClick={closeMobileMenu}>
                                Landscaping Services
                            </Link>
                        </li> {/* link 5 is an EXTERNAL link */}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;