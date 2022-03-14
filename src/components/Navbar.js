import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);
    //click will determine whether it shows the hamburger menu or not

    const handleClick = () => {
        setClick(!click);
    } //reverse the click so it shows either X-icon or menu icon

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
            </nav>
        </>
    );
};

export default Navbar;