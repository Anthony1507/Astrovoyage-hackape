import React from 'react';
import './dwarfplanets.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

const DwarfPlanets = () => {
    const dwarfPlanets = [
        {
            name: 'Ceres',
            description: 'Ceres is the largest dwarf planet in the asteroid belt between Mars and Jupiter. It is unique because it is the only dwarf planet located in the inner Solar System.',
            imageUrl: '/images/ceres.png',
        },
        {
            name: 'Eris',
            description: 'Eris is a dwarf planet in the Kuiper Belt. It is larger than Pluto and is considered one of the most massive bodies in the Solar System.',
            imageUrl: '/images/eris.png',
        },
        {
            name: 'Haumea',
            description: 'Haumea is known for its elongated shape and rapid rotation. It has rings and several moons, making it fascinating for astronomers.',
            imageUrl: '/images/haumea.png',
        },
        {
            name: 'Makemake',
            description: 'Makemake is another dwarf planet in the Kuiper Belt, known for being one of the brightest objects in that region of space.',
            imageUrl: '/images/makemake.png',
        },
        {
            name: 'Pluto',
            description: 'Pluto was considered the ninth planet in the Solar System until 2006, when it was reclassified as a dwarf planet. It has a thin atmosphere and several moons.',
            imageUrl: '/images/pluto.png',
        },
    ];

    return (
        <>
            <Header />
            <div className="dwarf-planets-container">
                <h1 className="title">Dwarf Planets</h1>
                <div className="dwarf-planets-grid">
                    {dwarfPlanets.map((planet) => (
                        <div key={planet.name} className="dwarf-planet-card">
                            <img src={planet.imageUrl} alt={planet.name} className="planet-image" />
                            <h2 className="planet-name">{planet.name}</h2>
                            <p className="planet-description">{planet.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DwarfPlanets;
