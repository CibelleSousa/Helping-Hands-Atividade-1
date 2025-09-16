import { FaHome, FaCommentDots, FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="app-header">
        <a href="/" className="logo-link"><div className="logo"><img src={'./src/assets/logo.png'} alt="Imagem da logo da Helping Hands " id="logo-img"/> <span className="logo-text" id='logo-info'>Helping Hands</span></div></a>
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