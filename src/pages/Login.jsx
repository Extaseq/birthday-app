import { useState } from 'react';
import './Login.css';
import Balloon from '../components/Balloon';
import memeImage from '../assets/the-rock-sus.gif';
import { useNavigate } from "react-router-dom";

function Login() {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [showMeme, setShowMeme] = useState(false);
  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 12)) {
      setMonth(value);
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 31)) {
      setDay(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (month === '8' && day === '6') {
        navigate('/landing')
    } else {
      setShowMeme(true);
      setTimeout(() => {
        setShowMeme(false);
        setMonth('');
        setDay('');
      }, 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="balloons-container">
        <Balloon color="#FF5252" left="10%" size={0.8} />
        <Balloon color="#448AFF" left="20%" size={1.2} />
        <Balloon color="#66BB6A" left="35%" size={1.0} />
        <Balloon color="#FFCA28" left="50%" size={1.5} />
        <Balloon color="#AB47BC" left="65%" size={0.9} />
        <Balloon color="#26C6DA" left="80%" size={1.3} />
        <Balloon color="#FF7043" left="90%" size={1.1} />
        <Balloon color="#FFC0CB" left="5%"  size={0.7} />
        <Balloon color="#87CEEB" left="25%" size={1.0} />
        <Balloon color="#9370DB" left="40%" size={1.4} />
        <Balloon color="#98FB98" left="55%" size={0.8} />
        <Balloon color="#FFA07A" left="70%" size={1.2} />
        <Balloon color="#00CED1" left="85%" size={1.0} />
        <Balloon color="#FF69B4" left="95%" size={0.9} />
      </div>
      
      <div className="glass-panel">
        <h1 className="title">Enter Your Birthday</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="month">Month</label>
              <input
                type="number"
                id="month"
                min="1"
                max="12"
                value={month}
                onChange={handleMonthChange}
                placeholder="MM"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="day">Day</label>
              <input
                type="number"
                id="day"
                min="1"
                max="31"
                value={day}
                onChange={handleDayChange}
                placeholder="DD"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Enter
          </button>
        </form>
      </div>

      {showMeme && (<img src={memeImage} alt="Meme" className="meme-popup" />)}
    </div>
  );
}

export default Login;