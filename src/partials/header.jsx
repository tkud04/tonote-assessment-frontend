import logo from '../assets/img/logo.png';

export default function Header(){
    return (
        <header>
          <div id="lgx-header" className="lgx-header">
             <div className="lgx-header-position lgx-header-position-white lgx-header-position-fixed ">
                <div className="lgx-container">
                   <nav className="navbar navbar-default lgx-navbar">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="lgx-logo">
                                <a href="/" className="lgx-scroll">
                                   <img src={logo} alt="Event Website"/>
                                </a>
                            </div>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <div className="lgx-nav-right navbar-right">
                                <div className="lgx-cart-area">
                                    <a className="lgx-btn lgx-btn-red" href="#"><span>Buy Ticket</span></a>
                                </div>
                            </div>
                            <ul className="nav navbar-nav lgx-nav navbar-right">
                                <li>
                                    <a href="/" className="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span className="caret"></span></a>
                                    <ul className="dropdown-menu multi-level">
                                        <li><a href="/">Home (Default)</a></li>
                                        <li><a href="index2.html">Box Layout</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/" className="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                    <ul className="dropdown-menu multi-level">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="schedules.html">Schedule</a></li>
                                        <li className="dropdown-submenu">
                                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Speakers <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                               <li><a href="speakers.html">Speakers List</a></li>
                                               <li><a href="speaker.html">Speaker Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="sponsors.html">Sponsors List</a></li>
                                        <li><a href="registration.html">Registration</a></li>                              
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
              </div>
           </div>
       </header>
    );
}