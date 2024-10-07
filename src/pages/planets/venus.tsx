import React from 'react';
import './venus.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';



const VenusInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Venus: The Evening Star</h1>
  <h3 className="planet-subtitle">A bright and beautiful planet, shrouded in thick clouds of sulfuric acid.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/venus.png" alt="Venus" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Venus</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 108.2 million km</li>
      <li><strong>Day Length:</strong> 243 Earth days (longer than its year)</li>
      <li><strong>Year Length (Orbital Period):</strong> 225 Earth days</li>
      <li><strong>Diameter:</strong> 12,104 km</li>
      <li><strong>Surface Gravity:</strong> 8.87 m/s²</li>
      <li><strong>Temperature:</strong> A constant 467°C on the surface</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Venus</h2>
    <p>
      Venus is often referred to as Earth's twin due to its similar size and composition. However, its atmosphere is incredibly hostile, consisting mainly of carbon dioxide with clouds of sulfuric acid, resulting in a strong greenhouse effect that raises surface temperatures to scorching levels.
    </p>
    <p>
      The planet has no moons and rotates very slowly on its axis, taking longer to complete one rotation than to orbit the Sun. Its surface is characterized by volcanic plains and vast lava flows, suggesting a geologically active history.
    </p>
  </div>

  {/* Misiones a Venus */}
  <div className="planet-missions">
    <h2>Historic Missions to Venus</h2>
    <ul>
      <li><strong>Mariner 2 (1962):</strong> The first successful spacecraft to fly by Venus, providing valuable data about its atmosphere.</li>
      <li><strong>Venera Program (1961-1984):</strong> A series of Soviet missions that successfully landed on Venus and returned images and data about its surface.</li>
    </ul>
    <p>
      These missions have revealed the extreme conditions on Venus, including high surface pressure and temperatures, leading to a better understanding of its atmosphere and geology. Future exploration, such as the upcoming NASA mission <strong>DAVINCI+</strong>, aims to study Venus' atmosphere in greater detail.
    </p>
  </div>
</div>
</>
    );
  };

export default VenusInfo;