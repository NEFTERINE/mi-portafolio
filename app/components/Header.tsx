'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [modoOscuro, setModoOscuro] = useState(false)

  const cambiarTema = () => {
    const nuevoModo = !modoOscuro
    setModoOscuro(nuevoModo)

    if (nuevoModo) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <header className="site-header">
      {/* LOGO */}
      <a href="#inicio" className="brand" onClick={cerrarMenu}>
        M<span>.</span>
      </a>

      {/* NAVEGACIÓN */}
      <nav className={`main-nav ${menuAbierto ? 'is-open' : ''}`}>
<br/>
        <a href="#inicio" onClick={cerrarMenu}>
          Inicio
        </a>

        <a href="#proyectos" onClick={cerrarMenu}>
          Proyectos
        </a>

        <a href="#documentacion" onClick={cerrarMenu}>
          Documentos
        </a>

        <a href="#educacion" onClick={cerrarMenu}>
          Educación
        </a>

        <a href="#sobre-mi" onClick={cerrarMenu}>
          Competencias
        </a>

        <a href="#contacto" onClick={cerrarMenu}>
          Contacto
        </a>
      </nav>

      {/* CONTROLES */}
      <div className="header-controls">

        <button
          className="control-btn"
          onClick={cambiarTema}
          aria-label="Cambiar tema"
        >
          {modoOscuro ? <Sun size={17} /> : <Moon size={17} />}

          <span>
            {modoOscuro ? 'Claro' : 'Oscuro'}
          </span>
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

    </header>
  )
}