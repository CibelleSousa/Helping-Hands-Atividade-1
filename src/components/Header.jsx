function Header() {
  return (
    <header className="app-header">
        <a href="/" className="logo-link"> <span className="logo-text">Helping Hands</span></a>
        <nav className="main-nav">
            <ul>
                <li><a href="/home">Casa</a></li>
                <li><a href="/chat">Chat</a></li>
                <li><a href="/profile">Perfil</a></li>
                <li><a href="/calendar">Calendário</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header