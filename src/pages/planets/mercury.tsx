import React from 'react';
import './mercury.css';  // Importa el archivo de estilos específico

const MercuryInfo = () => {
  return (
    <div className="planet-container">
      {/* Sección de título */}
      <h1 className="planet-title">Mercury: The Swift Messenger</h1>

      {/* Imagen del planeta */}
      <div className="planet-image">
        <img src="/images/mercury.png" alt="Mercurio" />
      </div>

      {/* Datos destacados */}
      <div className="planet-highlights">
        <h2 className="highlight-title">Quick Facts:</h2>
        <ul>
          <li><strong>Distance from Sun:</strong> 57.9 million km</li>
          <li><strong>Day Length:</strong> 58.6 Earth days</li>
          <li><strong>Orbital Period:</strong> 88 Earth days</li>
          <li><strong>Diameter:</strong> 4,880 km</li>
          <li><strong>Gravity:</strong> 3.7 m/s²</li>
        </ul>
      </div>

      {/* Información detallada */}
      <div className="planet-details">
        <h2>About Mercury</h2>
        <p>
          Mercury, the smallest and innermost planet in our solar system, is known for its short year and long days. With extreme temperature variations and no atmosphere to speak of, Mercury is a challenging place for exploration.
        </p>
      </div>

      {/* Misiones */}
      <div className="planet-missions">
        <h2>Notable Missions to Mercury:</h2>
        <ul>
          <li><strong>Mariner 10:</strong> The first mission to fly by Mercury in 1974.</li>
          <li><strong>MESSENGER:</strong> Orbited Mercury from 2011 to 2015, providing a wealth of new data.</li>
        </ul>
      </div>

      {/* Sección interactiva */}
      <div className="planet-interactive">
        <button className="explore-button">Explore Mercury in 3D</button>
      </div>
    </div>
  );
};

export default MercuryInfo;
