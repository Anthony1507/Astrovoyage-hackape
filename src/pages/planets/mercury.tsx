import React from 'react';
import './mercury.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';



const MercuryInfo = () => {
    
    return (
<>
<Header/>
      <div className="planet-container">
        {/* Título principal */}
        <h1 className="planet-title">Mercury: The Swift Messenger</h1>
        <h3 className="planet-subtitle">The planet closest to the Sun, racing through the cosmos at incredible speed.</h3>
  
        {/* Imagen central */}
        <div className="planet-image">
          <img src="/images/mercury.png" alt="Mercury" />
        </div>
  
        {/* Datos clave */}
        <div className="planet-highlights">
          <h2 className="highlight-title">Key Facts about Mercury</h2>
          <ul>
            <li><strong>Average Distance from Sun:</strong> 57.9 million km</li>
            <li><strong>Day Length:</strong> 58.6 Earth days</li>
            <li><strong>Year Length (Orbital Period):</strong> 88 Earth days</li>
            <li><strong>Diameter:</strong> 4,880 km</li>
            <li><strong>Surface Gravity:</strong> 3.7 m/s²</li>
            <li><strong>Temperature Range:</strong> -173°C to 427°C</li>
          </ul>
        </div>
  
        {/* Información adicional */}
        <div className="planet-details">
          <h2>More about Mercury</h2>
          <p>
            Mercury is the smallest planet in the Solar System and has no moons. Its surface is heavily cratered, resembling Earth's Moon, with vast plains of volcanic origin. 
            Despite its proximity to the Sun, it has a surprisingly cold side, as it lacks a significant atmosphere to retain heat. This results in extreme temperature fluctuations, 
            ranging from scorching 427°C on the day side to frigid -173°C on the night side.
          </p>
          <p>
            Mercury's highly elliptical orbit and slow rotation make it a fascinating subject for study, especially for understanding planetary formation and the effects of solar radiation. 
            It has been visited by only a few spacecraft, but what we’ve learned from those missions has greatly expanded our knowledge.
          </p>
        </div>
  
        {/* Misiones a Mercurio */}
        <div className="planet-missions">
          <h2>Historic Missions to Mercury</h2>
          <ul>
            <li><strong>Mariner 10 (1974-1975):</strong> The first spacecraft to fly by Mercury, mapping about 45% of its surface.</li>
            <li><strong>MESSENGER (2011-2015):</strong> Orbited Mercury, providing detailed data on its composition, magnetic field, and thin atmosphere.</li>
          </ul>
          <p>
            These missions revealed Mercury's dense metallic core, its magnetic field (a rarity for such a small planet), and complex geological history. 
            Future missions, like the joint ESA-JAXA mission <strong>BepiColombo</strong>, aim to further unlock the secrets of this enigmatic world.
          </p>
        </div>
      </div></>
    );
  };

export default MercuryInfo;