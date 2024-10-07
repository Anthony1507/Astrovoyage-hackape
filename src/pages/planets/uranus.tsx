import './uranus.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const UranusInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Uranus: The Ice Giant</h1>
  <h3 className="planet-subtitle">A unique planet with a striking blue color and an unusual rotation.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/uranus.png" alt="Uranus" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Uranus</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 2.9 billion km</li>
      <li><strong>Day Length:</strong> 17.24 Earth hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 84 Earth years</li>
      <li><strong>Diameter:</strong> 50,724 km</li>
      <li><strong>Surface Gravity:</strong> 8.69 m/s²</li>
      <li><strong>Temperature:</strong> -224°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Uranus</h2>
    <p>
      Uranus is the third largest planet in the Solar System and is known for its stunning blue hue, caused by methane in its atmosphere. 
      What sets Uranus apart is its extreme axial tilt of 98 degrees, causing it to rotate on its side. This unique feature results in extreme seasonal changes, with each pole experiencing 42 years of continuous sunlight or darkness.
    </p>
    <p>
      The planet is surrounded by a faint ring system and has 27 known moons, the largest being Titania and Oberon. Uranus's atmosphere is primarily composed of hydrogen and helium, with traces of methane, ammonia, and water, contributing to its frigid temperatures.
    </p>
  </div>

  {/* Misiones a Urano */}
  <div className="planet-missions">
    <h2>Historic Missions to Uranus</h2>
    <ul>
      <li><strong>Voyager 2 (1986):</strong> The only spacecraft to fly by Uranus, providing valuable data on its atmosphere, rings, and moons.</li>
    </ul>
    <p>
      The Voyager 2 mission revealed Uranus's complex magnetic field, its unique rotational dynamics, and several of its moons. 
      Although no missions are currently planned for Uranus, the data collected by Voyager 2 continues to shape our understanding of this distant planet.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default UranusInfo;