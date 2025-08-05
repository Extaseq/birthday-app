import { useState } from 'react';
import './LandingPage.css';
import Balloon from '../components/Balloon';
import Picture from '../assets/Big.jpg';
import Picture2 from '../assets/Big2.jpg';
import img01 from '../assets/01.jpg';
import img02 from '../assets/02.jpg';
import img03 from '../assets/03.jpg';
import img04 from '../assets/04.jpg';
import img05 from '../assets/05.jpg';
import img06 from '../assets/06.jpg';


function LandingPage() {
  
  // Sample birthday card designs for the gallery
  const cardGallery = [
    { id: 1, src: img01, alt: 'Pink birthday card with balloons' },
    { id: 2, src: img02, alt: 'Birthday card with confetti' },
    { id: 3, src: img03, alt: 'Elegant birthday card design' },
    { id: 4, src: img04, alt: 'Birthday card with cake' },
    { id: 5, src: img05, alt: 'Birthday card with candles' },
    { id: 6, src: img06, alt: 'Fun birthday card design' },
  ];
  
  return (
    <div className="birthday-container">
      {/* Balloons with different colors and positions - perfect for birthday theme */}
      <div className="balloons-container">
        <Balloon color="#FF5252" left="10%" size={0.8} />
        <Balloon color="#448AFF" left="20%" size={1.2} />
        <Balloon color="#66BB6A" left="35%" size={1.0} />
        <Balloon color="#FFCA28" left="50%" size={1.5} />
        <Balloon color="#AB47BC" left="65%" size={0.9} />
        <Balloon color="#26C6DA" left="80%" size={1.3} />
        <Balloon color="#FF7043" left="90%" size={1.1} />
        <Balloon color="#FFC0CB" left="5%"  size={0.7} />
      </div>

      <div className="birthday-content">
        <div className="birthday-main">
          <div className="left-panel">
            <h1 className="main-title">Happy Birthday Min Min</h1>
            <p className="description">
              Chuc mung sinh Min Min cute pho mai que hihihihihihihhhihihihihihihihih
            </p>

            <div className="gallery">
              {cardGallery.map(card => (
                <div key={card.id} className="gallery-item">
                  <img src={card.src} alt={card.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="right-panel">
            <div className="featured-card">
              <img 
                src={Picture} 
                alt="Beautiful birthday card with decorations" 
                className="featured-image"
              />
            </div>
            <div className="featured-card">
              <img 
                src={Picture2} 
                alt="Additional birthday decoration" 
                className="featured-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
