import HomeIcon from 'react-icons/lib/fa/home'
import About from 'react-icons/lib/fa/user'
import Contact from 'react-icons/lib/fa/envelope-o'
import Scrollchor from 'react-scrollchor'

import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () =>
    <div className="menu">
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Tozzi</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="">
                        <Scrollchor to="#first">
                            <HomeIcon/> Home
                        </Scrollchor>
                    </li>
                    <li className="">
                        <Scrollchor to="#second">
                            <About/> About
                        </Scrollchor>
                    </li>
                    <li className="">
                        <Scrollchor to="#third">
                            <Contact/> Contact
                        </Scrollchor>
                    </li>
                </ul>

            </div>
        </nav>
    </div>

