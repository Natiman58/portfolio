import './index.scss';
import LogoN from '../../assets/images/logo-n.png';
import LogoSubtitle from '../../assets/images/n_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);



    return (
        <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoN} alt='logo'/>
            <img className="sub-logo" src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav className={showNav ? 'mobile-show': ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon
                    icon={faHome}
                    color='#4d4d4e' />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon
                    icon={faUser}
                    color='#4d4d4e'
                />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    color='#4d4d4e'
                />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='portfolio-link' to="/portfolio">
                <FontAwesomeIcon
                    icon={faSuitcase}
                    color='#4d4d4e'
                />
            </NavLink>
            <FontAwesomeIcon
                icon={faClose}
                color='#ffd700'
                size='3px'
                className='close-Icon'
                onClick={() => setShowNav(false)}
            />
        </nav>

        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/natnael-dessie-0292281aa/'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e'  />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Natiman58'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'  />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://twitter.com/home'
                >
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'  />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://medium.com/@natiman58'
                >
                    <FontAwesomeIcon icon={faMedium} color='#4d4d4e'  />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            icon={faBars}
            color='#ffd700'
            size='3px'
            className='hamburger-icon'
            onClick={() => setShowNav(true)}
        />
    </div>
    )
}
export default Sidebar;