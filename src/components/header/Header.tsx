import { useState } from "react";
import LOGO from "../../../images/logo2.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <header>
      <div className="logo-container">
        <img src={LOGO} alt="NASA Logo" width="100" className="logoIMG"   onClick={()=>{goTo("/")}}/>
        <h1 className="titlePage" onClick={()=>{goTo("/")}}>AstroVoyage</h1>
        {/* Botón hamburguesa para mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <nav>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a onClick={() => { goTo("/"); }}>Home</a>
          </li>

            <li>
            <a  onClick={() => { goTo("/images") }}>Gallery</a>
           
            </li>



          <li>
            <a href="#planets">Planets</a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={()=>{goTo("/mercury")}}>Mercury</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/venus")}}>Venus</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/earth")}}>Earth</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/mars")}}>Mars</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/jupiter")}}>Jupiter</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/saturn")}}>Saturn</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/uranus")}}>Uranus</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/neptune")}}>Neptune</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#more-info">More Info</a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={()=>{goTo("/asteroids")}}>Asteroids</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/dwarfplanets")}}>Dwarf Planets</a>
              </li>
              <li>
                <a onClick={()=>{goTo("/sun")}}>The Sun</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
