import React from 'react';
import './earth.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const EarthInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Earth: Our Blue Planet</h1>
  <h3 className="planet-subtitle">The only planet known to support life, a vibrant oasis in the vastness of space.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/earth.png" alt="Earth" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Earth</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 149.6 million km</li>
      <li><strong>Day Length:</strong> 24 hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 365.25 days</li>
      <li><strong>Diameter:</strong> 12,742 km</li>
      <li><strong>Surface Gravity:</strong> 9.81 m/s²</li>
      <li><strong>Temperature Range:</strong> -88°C to 58°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Earth</h2>
    <p>
      Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
      Its surface is composed of 71% water, with vast oceans, rivers, and lakes, making it unique among the planets. 
      Earth has a diverse climate, ranging from polar ice caps to tropical rainforests, which supports a wide variety of ecosystems.
    </p>
    <p>
      The planet's atmosphere, rich in oxygen and nitrogen, plays a crucial role in maintaining life and regulating climate. 
      Earth's magnetic field protects it from harmful solar and cosmic radiation, making it an ideal environment for living organisms.
    </p>
  </div>

  {/* Misiones a la Tierra */}
  <div className="planet-missions">
    <h2>Significant Missions Related to Earth</h2>
    <ul>
      <li><strong>Apollo 11 (1969):</strong> The first crewed mission to land on the Moon, providing insights into Earth's relationship with its satellite.</li>
      <li><strong>International Space Station (1998-present):</strong> A unique laboratory for scientific research and international cooperation in space.</li>
      <li><strong>Earth Observing System (1997-present):</strong> A series of NASA satellites monitoring Earth's climate and environmental changes.</li>
    </ul>
    <p>
      These missions have expanded our understanding of Earth's geology, climate, and the impact of human activities on the environment. 
      They also help us address challenges such as climate change, natural disasters, and resource management.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default EarthInfo;