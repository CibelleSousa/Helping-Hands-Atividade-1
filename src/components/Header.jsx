import { FaHome, FaCommentDots, FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="app-header">
        <a href="/" className="logo-link"> <span className="logo-text">Helping Hands</span></a>
        <nav className="main-nav">
            <ul>
                <li><a href="/home" title="Início"><FaHome/></a></li>
                <li><a href="/chat" title="Chat"><FaCommentDots/></a></li>
                <li><a href="/profile" title="Perfil"><FaUserAlt/></a></li>
                <li><a href="/calendar" title="Calendário"><FaRegCalendarAlt/></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header