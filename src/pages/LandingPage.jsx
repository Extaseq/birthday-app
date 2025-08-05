import { useState } from 'react';
import './LandingPage.css';
import Balloon from '../components/Balloon';
import Picture from '../assets/Picture.jpg';

function LandingPage() {
  const [message, setMessage] = useState('');
  
  // Sample birthday card designs for the gallery
  const cardGallery = [
    { id: 1, src: 'https://placehold.co/300x240/FFC0CB/white?text=Happy+Birthday!', alt: 'Pink birthday card with balloons' },
    { id: 2, src: 'https://placehold.co/300x240/FFB6C1/white?text=Celebration+Time!', alt: 'Birthday card with confetti' },
    { id: 3, src: 'https://placehold.co/300x240/FF69B4/white?text=Special+Day!', alt: 'Elegant birthday card design' },
    { id: 4, src: 'https://placehold.co/300x240/FFB6C1/white?text=Another+Year!', alt: 'Birthday card with cake' },
    { id: 5, src: 'https://placehold.co/300x240/FFC0CB/white?text=Make+a+Wish!', alt: 'Birthday card with candles' },
    { id: 6, src: 'https://placehold.co/300x240/FF69B4/white?text=Party+Time!', alt: 'Fun birthday card design' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating birthday card with message:', message);
    // In a real app, this would call an API to generate the birthday card
  };

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
            <h1 className="main-title">Create the perfect birthday gift card</h1>
            <p className="description">
              Design a personalized birthday card that's as special as they are!
              Add your heartfelt message, choose from beautiful designs, and create
              a memorable birthday surprise that will bring joy and smiles.
              Make their special day even more magical!
            </p>

            <form className="prompt-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <input 
                  type="text"
                  placeholder="Write your birthday message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="prompt-input"
                />
                <button type="submit" className="prompt-button">→</button>
              </div>
            </form>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
