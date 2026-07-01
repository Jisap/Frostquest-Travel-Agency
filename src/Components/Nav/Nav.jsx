import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ⬅️ Estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "black-them" : "white-them"}`}>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <a href="#" className='logo navbar-brand'>Frost<span>Quest</span></a>

          <div className='d-flex align-items-center'>
            <i className='bi bi-search search-icon me-2'
              type="button"
              data-bs-target="#searchModal" // ⬅️ Indica el div a colapsar
              data-bs-toggle="modal"        // ⬅️ Indica que abre/cierra el modal 
            ></i>

            {/* Botón hamburguesa con React */}
            <button
              className='navbar-toggler'
              type="button"
              onClick={() => setMenuOpen(!menuOpen)} // ⬅️ Toggle con React
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
        </div>

        {/* Menú controlado por React (sin clase 'collapse' de Bootstrap) */}
        <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item'><a href="#">Home</a></li>
            <li className='nav-item'><a href="#">About</a></li>
            <li className='nav-item'><a href="#">Tour</a></li>
            <li className='nav-item'><a href="#">Blog</a></li>
            <li className='nav-item'><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Modal de Bootstrap (sigue funcionando con data-bs-*) */}
      <div
        className='modal fade'               // ⬅️ Indica que es un modal
        id="searchModal"                     // ⬅️ ID del modal
        tabIndex="-1"                        // ⬅️ Indica que no es un elemento interactivo
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-dark text-white'>
            <div className='modal-header border-0'>
              <h5 className='modal-title' id="searchModalLabel">
                Search
              </h5>

              <button
                type="button"
                className='btn-close btn-close-white'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
              </button>
            </div>

            <div className='modal-body'>
              <div className='input-group modal-input'>
                <input type="text" className='form-control' placeholder="Search Here..." />
                <span className='input-group-text bg-white'>
                  <i className='bi bi-search text-dark'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav