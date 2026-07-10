import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll -> fondo negro
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Esc -> cerrar menú móvil y modal de búsqueda
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // ✅ FIX: cerrar el menú móvil al pasar a desktop
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 992px)');
    const handleChange = (e) => {
      if (e.matches) setMenuOpen(false); // ahora estamos en desktop
    };
    // Estado inicial por si el componente monta ya en desktop con menuOpen=true
    if (mql.matches) setMenuOpen(false);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Lock del scroll cuando el modal de búsqueda está abierto
  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [searchOpen]);

  return (
    <>
      <nav className={`custom-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">

          <Link to="/" className="logo">Frost<span>Quest</span></Link>

          <div className='flex gap-10'>
            <ul className="nav-links-desktop">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
              <li className="nav-item"><Link to="/tour">Tour</Link></li>
              <li className="nav-item"><Link to="/blog">Blog</Link></li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="nav-actions">
              <button onClick={() => setSearchOpen(true)} className="search-icon" aria-label="Open search">
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <ul className="nav-links-mobile">
            <li className="nav-item"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li className="nav-item"><Link to="/tour" onClick={() => setMenuOpen(false)}>Tour</Link></li>
            <li className="nav-item"><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li className="nav-item"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        )}
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <h3 className="search-modal-title">Search</h3>
              <button onClick={() => setSearchOpen(false)} className="search-modal-close" aria-label="Close search">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="search-input-row">
              <input type="text" className="search-input" placeholder="Search destinations, tours..." autoFocus />
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
  );
};

export default Nav;