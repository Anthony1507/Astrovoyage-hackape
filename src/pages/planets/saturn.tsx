import './saturn.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const SaturnInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Saturn: The Jewel of the Solar System</h1>
  <h3 className="planet-subtitle">Renowned for its stunning rings, Saturn captivates all who gaze upon it.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/saturn.png" alt="saturn" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Saturn</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 1.4 billion km</li>
      <li><strong>Day Length:</strong> 10.7 hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 29.5 Earth years</li>
      <li><strong>Diameter:</strong> 116,460 km</li>
      <li><strong>Surface Gravity:</strong> 10.44 m/s²</li>
      <li><strong>Temperature Range:</strong> -178°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Saturn</h2>
    <p>
      Saturn is the second-largest planet in the Solar System, famous for its intricate and beautiful ring system made up of ice and rock particles. Its atmosphere is predominantly hydrogen and helium, creating a stunning yellow hue. 
      Unlike Earth, Saturn is a gas giant with no solid surface, and it features a complex weather system with the fastest winds in the Solar System, reaching speeds of over 1,800 km/h.
    </p>
    <p>
      Saturn is home to over 80 known moons, including Titan, the second-largest moon in the Solar System, which has a thick atmosphere and is known to contain lakes of liquid methane. This diversity of moons and the unique characteristics of its rings make Saturn a fascinating subject of study.
    </p>
  </div>

  {/* Misiones a Saturno */}
  <div className="planet-missions">
    <h2>Historic Missions to Saturn</h2>
    <ul>
      <li><strong>Voyager 1 and 2 (1979):</strong> Provided the first close-up images of Saturn and its moons, greatly enhancing our understanding of the planet.</li>
      <li><strong>Cassini-Huygens (2004-2017):</strong> A landmark mission that orbited Saturn and revealed intricate details about its rings, atmosphere, and moons, including the landing of the Huygens probe on Titan.</li>
    </ul>
    <p>
      The Cassini mission, in particular, transformed our understanding of Saturn, uncovering its dynamic atmosphere, seasonal changes, and complex ring structure. Future missions are planned to continue exploring this majestic planet and its diverse system of moons.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default SaturnInfo;