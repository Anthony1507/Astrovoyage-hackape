import './asteroids.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

const Asteroids = () => {
    const asteroids = [
        {
            name: 'Eros',
            description: 'Eros is a near-Earth asteroid that was the first to be orbited and landed on by a spacecraft. It is one of the largest near-Earth asteroids, measuring about 16.8 km in diameter.',
            imageUrl: '/images/eros.png',
        },
        {
            name: 'Hygiea',
            description: 'Hygiea is the fourth largest object in the asteroid belt and is notable for being nearly spherical, which almost qualifies it as a dwarf planet. It is composed mostly of carbon-rich material.',
            imageUrl: '/images/hygiea.png',
        },
        {
            name: 'Juno',
            description: 'Juno is one of the largest asteroids in the asteroid belt. Discovered in 1804, it is composed mainly of rock with a high albedo, making it quite reflective compared to other asteroids.',
            imageUrl: '/images/juno.png',
        },
        {
            name: 'Pallas',
            description: 'Pallas is the second asteroid ever discovered and one of the largest in the asteroid belt. It has an irregular shape and is believed to be a remnant of protoplanetary material.',
            imageUrl: '/images/pallas.png',
        },
        {
            name: 'Vesta',
            description: 'Vesta is the second-largest object in the asteroid belt and has a unique geological history with volcanic activity. It is one of the brightest objects in the sky and is easily observable from Earth.',
            imageUrl: '/images/vesta.png',
        },
    ];

    return (
        <>
            <Header />
            <div className="asteroids-container">
                <h1 className="title">Asteroids</h1>
                <div className="asteroids-grid">
                    {asteroids.map((asteroid) => (
                        <div key={asteroid.name} className="asteroid-card">
                            <img src={asteroid.imageUrl} alt={asteroid.name} className="asteroid-image" />
                            <h2 className="asteroid-name">{asteroid.name}</h2>
                            <p className="asteroid-description">{asteroid.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Asteroids;
