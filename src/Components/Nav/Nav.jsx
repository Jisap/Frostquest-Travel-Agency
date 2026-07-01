import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    }
    if (searchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    }
  }, [searchOpen])

  return (
    <>
      {/* Navbar */}
      <nav className={`custom-nav ${scrolled ? 'nav-scrolled' : ''}`}>

        {/* Barra principal */}
        <div className="nav-inner">

          {/* Logo */}
          <a href="#" className="logo">
            Frost<span>Quest</span>
          </a>

          {/* Links desktop — siempre visibles en pantallas grandes */}
          <ul className="nav-links-desktop">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Tour</a></li>
            <li className="nav-item"><a href="#">Blog</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>

          {/* Acciones: search + hamburguesa */}
          <div className="nav-actions">
            {/* Icono de búsqueda */}
            <button
              onClick={() => setSearchOpen(true)}
              className="search-icon"
              aria-label="Open search"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Botón hamburguesa — solo móvil */}
            <button
              className="navbar-toggler"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <ul className="nav-links-mobile">
            <li className="nav-item"><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
            <li className="nav-item"><a href="#" onClick={() => setMenuOpen(false)}>Tour</a></li>
            <li className="nav-item"><a href="#" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li className="nav-item"><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Modal de Búsqueda */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            {/* Cabecera */}
            <div className="search-modal-header">
              <h3 className="search-modal-title">Search</h3>
              <button
                onClick={() => setSearchOpen(false)}
                className="search-modal-close"
                aria-label="Close search"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Input */}
            <div className="search-input-row">
              <input
                type="text"
                className="search-input"
                placeholder="Search destinations, tours..."
                autoFocus
              />
              <button className="search-submit" aria-label="Search">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <p className="search-hint">Pulsa <kbd>Esc</kbd> para cerrar</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav