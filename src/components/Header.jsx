import { FaHome, FaCommentDots, FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import logo from './logo.png';
function Header() {
  return (
    <header className="app-header">
        <a href="/" className="logo-link"><div className="Logo"><img src={logo} id="logo-img"/> <span className="logo-text" id='logo-info'>Helping Hands</span></div></a>
        <nav className="main-nav">
            <ul className="header-icons">
                <li className="header-icon"><a href="/home" title="Início"><FaHome className="icon-header"/></a></li>
                <li className="header-icon"><a href="/chat" title="Chat"><FaCommentDots className="icon-header"/></a></li>
                <li className="header-icon"><a href="/profile" title="Perfil"><FaUserAlt className="icon-header"/></a></li>
                <li className="header-icon"><a href="/calendar" title="Calendário"><FaRegCalendarAlt className="icon-header"/></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header