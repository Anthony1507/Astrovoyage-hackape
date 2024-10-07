import './jupiter.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const JupiterInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Jupiter: The King of the Planets</h1>
  <h3 className="planet-subtitle">The largest planet in the Solar System, a gas giant with a stormy atmosphere and many moons.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/jupiter.png" alt="Jupiter" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Jupiter</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 778.5 million km</li>
      <li><strong>Day Length:</strong> 9.9 Earth hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 11.9 Earth years</li>
      <li><strong>Diameter:</strong> 139,822 km</li>
      <li><strong>Surface Gravity:</strong> 24.79 m/s²</li>
      <li><strong>Temperature Range:</strong> -145°C to -110°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Jupiter</h2>
    <p>
      Jupiter is the largest planet in the Solar System, famous for its Great Red Spot, a gigantic storm that has been raging for centuries. 
      Unlike terrestrial planets, Jupiter is primarily composed of hydrogen and helium, with no solid surface. Its atmosphere is filled with colorful bands of clouds, resulting from complex weather systems.
    </p>
    <p>
      Jupiter has a strong magnetic field and is surrounded by a vast system of rings and 79 known moons, including the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto. 
      These moons present unique environments that scientists are eager to explore further, especially Europa, which may harbor an ocean beneath its icy surface.
    </p>
  </div>

  {/* Misiones a Júpiter */}
  <div className="planet-missions">
    <h2>Historic Missions to Jupiter</h2>
    <ul>
      <li><strong>Pioneer 10 (1973):</strong> The first spacecraft to travel through the asteroid belt and make a flyby of Jupiter.</li>
      <li><strong>Voyager 1 & 2 (1979):</strong> Provided detailed images and data about Jupiter's atmosphere and moons.</li>
      <li><strong>Galileo (1995-2003):</strong> Orbited Jupiter, studying its atmosphere, magnetic field, and moons in detail.</li>
      <li><strong>Juno (2016-present):</strong> Currently studying Jupiter's atmosphere, gravity field, magnetic field, and deep interior.</li>
    </ul>
    <p>
      These missions have greatly enhanced our understanding of Jupiter, revealing its complex atmospheric dynamics, magnetic environment, and the fascinating geology of its moons. 
      Future missions aim to delve deeper into the mysteries of this gas giant, including potential habitability of its moons and the planet's formation.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default JupiterInfo;