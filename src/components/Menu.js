import HomeIcon from 'react-icons/lib/fa/home'
import About from 'react-icons/lib/fa/user'
import Contact from 'react-icons/lib/fa/envelope-o'
import Scrollchor from 'react-scrollchor'

import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () =>
    <div className="menu">
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav">
                    <li className="nav-item">
                        <Scrollchor to="#first">
                            <HomeIcon/> Home
                        </Scrollchor>
                    </li>
                    <li className="nav-item">
                        <Scrollchor to="#second">
                            <About/> About
                        </Scrollchor>
                    </li>
                    <li className="nav-item">
                        <Scrollchor to="#third">
                            <Contact/> Contact
                        </Scrollchor>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

