import React from 'react';
import './sun.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const SunInfo = () => {
    
    return (
<>
<Header />
<div className="sun-container">
  {/* Título principal */}
  <h1 className="sun-title">Sun: The Heart of Our Solar System</h1>
  <h3 className="sun-subtitle">A blazing ball of gas that sustains life on Earth and powers our solar system.</h3>

  {/* Imagen central */}
  <div className="sun-image">
    <img src="/images/sun.png" alt="Sun" />
  </div>

  {/* Datos clave */}
  <div className="sun-highlights">
    <h2 className="highlight-title">Key Facts about the Sun</h2>
    <ul>
      <li><strong>Average Distance from Earth:</strong> 149.6 million km</li>
      <li><strong>Diameter:</strong> 1.39 million km</li>
      <li><strong>Surface Temperature:</strong> Approximately 5,500°C</li>
      <li><strong>Core Temperature:</strong> Approximately 15 million °C</li>
      <li><strong>Age:</strong> About 4.6 billion years</li>
      <li><strong>Energy Output:</strong> 3.8 x 10²⁶ watts</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="sun-details">
    <h2>More about the Sun</h2>
    <p>
      The Sun is a nearly perfect sphere of hot plasma and is the most significant source of energy for life on Earth. It contains 99.86% of the total mass of our solar system, 
      dominating the gravitational forces that keep the planets in orbit. The Sun's core is the site of nuclear fusion, where hydrogen is converted into helium, releasing 
      tremendous energy that travels to the surface and radiates into space.
    </p>
    <p>
      The Sun has a dynamic atmosphere composed of several layers, including the photosphere, chromosphere, and corona. Solar phenomena such as sunspots, solar flares, 
      and coronal mass ejections can have profound effects on space weather and the Earth's magnetosphere, sometimes disrupting communications and power systems.
    </p>
  </div>

  {/* Misiones al Sol */}
  <div className="sun-missions">
    <h2>Historic Missions to the Sun</h2>
    <ul>
      <li><strong>Solar and Heliospheric Observatory (SOHO) (1995 - Present):</strong> A collaborative project between NASA and ESA, SOHO has provided critical data about solar activity.</li>
      <li><strong>Parker Solar Probe (2018 - Present):</strong> The first spacecraft to fly into the Sun's atmosphere, designed to study solar winds and the solar corona up close.</li>
    </ul>
    <p>
      SOHO has continuously monitored the Sun, helping scientists understand solar cycles and their effects on Earth. The Parker Solar Probe is making history by getting closer to 
      the Sun than any other spacecraft, offering unprecedented insights into solar dynamics and its impact on space weather.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default SunInfo;