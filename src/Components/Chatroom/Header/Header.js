import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Header = ({userId, realTimeListener, switchChatRoom}) => {
    const [current, setCurrent] = useState('general');

    const handleClick = (e) => {
        setCurrent(e.target.innerText.toLowerCase());
        switchChatRoom(e.target.innerText.toLowerCase());
        realTimeListener(e.target.innerText.toLowerCase());
    };

    return (  
        <div className="header">
            <button 
            onClick={handleClick}            
            className={`general ${current ==='general' ? "active" : "inactive"}`}>General</button>
            <button 
            onClick={handleClick}
            className={`music ${current ==='music' ? "active" : "inactive"}`}>Music</button>
            <button 
            onClick={handleClick}
            className={`music ${current ==='game' ? "active" : "inactive"}`}>Game</button>
            <Link to="/profile">{userId}</Link>
        </div>
    );
}
 
export default Header;
