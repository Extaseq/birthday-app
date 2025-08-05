import "./Balloon.css";
import BalloonIcon from "../assets/balloon.svg?react";

function Balloon({ color, left, size = 1 }) {
    return (
        <div className="balloon" style={{ left: left }}>
            <BalloonIcon 
                className="balloon-svg"
                style={{
                    width: `${50 * size}px`,
                    height: `${70 * size}px`,
                    color: color,
                    filter: "drop-shadow(0 0 3px rgba(0,0,0,0.2))"
                }}
            />
        </div>
    );
}

export default Balloon;