import './neptune.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';



const NeptuneInfo = () => {
    
    return (
<>
<Header/>
<div className="planet-container">
  {/* Título principal */}
  <h1 className="planet-title">Neptune: The Windy Planet</h1>
  <h3 className="planet-subtitle">The farthest planet from the Sun, shrouded in deep blue and fierce winds.</h3>

  {/* Imagen central */}
  <div className="planet-image">
    <img src="/images/neptune.png" alt="Neptune" />
  </div>

  {/* Datos clave */}
  <div className="planet-highlights">
    <h2 className="highlight-title">Key Facts about Neptune</h2>
    <ul>
      <li><strong>Average Distance from Sun:</strong> 4.5 billion km</li>
      <li><strong>Day Length:</strong> 16 hours</li>
      <li><strong>Year Length (Orbital Period):</strong> 165 Earth years</li>
      <li><strong>Diameter:</strong> 49,244 km</li>
      <li><strong>Surface Gravity:</strong> 11.0 m/s²</li>
      <li><strong>Temperature Range:</strong> -214°C</li>
    </ul>
  </div>

  {/* Información adicional */}
  <div className="planet-details">
    <h2>More about Neptune</h2>
    <p>
      Neptune is the eighth and farthest planet from the Sun in our Solar System. Its striking blue color is due to the presence of methane in its atmosphere, 
      which absorbs red light and reflects blue light. This gas giant is known for its intense storms and strong winds, reaching speeds of up to 2,100 km/h, making it the windiest planet in the Solar System.
    </p>
    <p>
      Neptune has a dynamic atmosphere with high-altitude clouds and dark spots, which are storm systems similar to Jupiter’s Great Red Spot. Despite its distance from the Sun, 
      it radiates more heat than it receives, indicating a complex internal heat source that scientists are still studying.
    </p>
  </div>

  {/* Misiones a Neptuno */}
  <div className="planet-missions">
    <h2>Historic Missions to Neptune</h2>
    <ul>
      <li><strong>Voyager 2 (1989):</strong> The only spacecraft to fly by Neptune, providing invaluable data and stunning images of the planet and its moons.</li>
    </ul>
    <p>
      Voyager 2 revealed Neptune's ring system, its dynamic atmosphere, and the largest moon, Triton, which is geologically active and has geysers that spew nitrogen gas. 
      The mission has set the foundation for future exploration of this mysterious planet and its moons.
    </p>
  </div>
</div>
<Footer />
</>
    );
  };

export default NeptuneInfo;