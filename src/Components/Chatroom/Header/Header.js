import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Header = ({user, realTimeListener, switchChatRoom}) => {
    const [current, setCurrent] = useState('general');

    return (  
        <div className="header">
            <button 
            onClick={(e) => {
                setCurrent(e.target.innerText.toLowerCase());
                switchChatRoom(e.target.innerText.toLowerCase());
                realTimeListener(e.target.innerText.toLowerCase());
            }}            
            className={`general ${current ==='general' ? "active" : "inactive"}`}>General</button>
            <button 
            onClick={(e) => {
                setCurrent(e.target.innerText.toLowerCase());
                switchChatRoom(e.target.innerText.toLowerCase());
                realTimeListener(e.target.innerText.toLowerCase());
            }}
            className={`music ${current ==='music' ? "active" : "inactive"}`}>Music</button>
            <button 
            onClick={(e) => {
                setCurrent(e.target.innerText.toLowerCase());
                switchChatRoom(e.target.innerText.toLowerCase());
                realTimeListener(e.target.innerText.toLowerCase());
            }}
            className={`music ${current ==='game' ? "active" : "inactive"}`}>Game</button>
            <Link to="/switch">{user}</Link>
        </div>
    );
}
 
export default Header;
