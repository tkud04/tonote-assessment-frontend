import logo from '../assets/img/logo.png';

export default function Header(){
    return (
        <header>
          <div id="lgx-header" className="lgx-header">
             <div className="lgx-header-position lgx-header-position-white lgx-header-position-fixed menu-onscroll ">
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
                                    <a className="lgx-btn lgx-btn-red" href="register"><span>Register</span></a>
                                </div>
                            </div>
                            <ul className="nav navbar-nav lgx-nav navbar-right">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="about">About</a>
                                </li>
                                <li>
                                   <a href="contact">Contact</a>
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