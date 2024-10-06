import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="logo-container">
        <img src="src/images/NASA-LOGO.png" alt="NASA Logo" width="100" />
        <h1 className="titlePage">AstroVoyage</h1>
        {/* Botón hamburguesa para mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <nav>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#history">History</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#planets">Planets</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#mercury">Mercury</a>
              </li>
              <li>
                <a href="#venus">Venus</a>
              </li>
              <li>
                <a href="#earth">Earth</a>
              </li>
              <li>
                <a href="#mars">Mars</a>
              </li>
              <li>
                <a href="#jupiter">Jupiter</a>
              </li>
              <li>
                <a href="#saturn">Saturn</a>
              </li>
              <li>
                <a href="#uranus">Uranus</a>
              </li>
              <li>
                <a href="#neptune">Neptune</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#more-info">More Info</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#asteroids">Asteroids</a>
              </li>
              <li>
                <a href="#comets">Comets</a>
              </li>
              <li>
                <a href="#dwarf-planets">Dwarf Planets</a>
              </li>
              <li>
                <a href="#sun">The Sun</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
