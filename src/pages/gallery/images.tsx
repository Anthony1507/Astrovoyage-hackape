import React from 'react';
import './images.css';  // Importa el archivo de estilos específico
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',
  '/images/image9.png',
  '/images/image10.png',
  '/images/image11.png',
  '/images/image12.png',
];

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="images-container">
        {/* Título principal */}
        <h1 className="images-title">Near-Earth Objects Gallery</h1>
        
        {/* Cuadrícula de imágenes */}
        <div className="images-grid">
          {images.map((src, index) => (
            <div className="image-item" key={index}>
              <img src={src} alt={`Near-Earth Object ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
