import "./Sidebar.css";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (  
        <nav className="sidebar">
            <div className="links">
                <NavLink exact to="/" activeClassName="active" >Home</NavLink>
                <NavLink to="/chat" activeClassName="active" >chat room</NavLink>
                <NavLink to="/switch" activeClassName="active" >switch</NavLink>
                <NavLink to="/statistics" activeClassName="active" >statistics</NavLink>
                <NavLink to="/about" activeClassName="active">about</NavLink>
            </div>
        </nav>
    );
}
 
export default Sidebar;
