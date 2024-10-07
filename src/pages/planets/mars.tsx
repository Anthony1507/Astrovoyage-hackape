import React from 'react';
import './mars.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const MarsInfo = () => {
    
    return (
<>
<Header />
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Mars: The Red Planet</h1>
  <h3 className="planet-subtitle">A world of mystery and exploration, known for its striking red color.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/mars.png" alt="Mars" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Mars</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 227.9 million km</li>
      <li><strong>Day Length:</strong> 24.6 Earth hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 687 Earth days</li>
      <li><strong>Diameter:</strong> 6,779 km</li>
      <li><strong>Surface Gravity:</strong> 3.7 m/s²</li>
      <li><strong>Temperature Range:</strong> -125°C to 20°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Mars</h2>
    <p>
      Mars, often referred to as the Red Planet due to its reddish appearance from iron oxide, is the fourth planet from the Sun and is known for its dynamic weather and seasons. 
      The planet features the largest volcano in the Solar System, Olympus Mons, and a massive canyon system, Valles Marineris, which dwarfs the Grand Canyon.
    </p>
    <p>
      Mars has two small moons, Phobos and Deimos, and evidence suggests that it once had liquid water on its surface, raising the possibility that it may have harbored life in its past. 
      Its thin atmosphere, composed mainly of carbon dioxide, presents challenges for future exploration and colonization efforts.
    </p>
  </div>

  {/* Misiones a Marte */}
  <div className="planet-missions">
    <h2>Historic Missions to Mars</h2>
    <ul>
      <li><strong>Viking 1 and 2 (1975):</strong> The first successful landers on Mars, conducting experiments to search for signs of life.</li>
      <li><strong>Spirit and Opportunity (2004):</strong> Twin rovers that provided extensive data on Martian geology and climate.</li>
      <li><strong>Curiosity (2012):</strong> A car-sized rover exploring Gale Crater, analyzing soil samples and searching for past life.</li>
    </ul>
    <p>
      These missions have transformed our understanding of Mars, revealing its complex history and potential for life. The upcoming <strong>Perseverance rover</strong> and the <strong>Sample Return Mission</strong> aim to continue this legacy, paving the way for future human exploration.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default MarsInfo;