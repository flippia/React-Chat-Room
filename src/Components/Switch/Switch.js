import "./Switch.css";
import Signup from "./Signup";
import Login from "./Login";
import useLogout from "./useLogout";
import { useState, useEffect } from "react";
import { projectAuth } from "../../firebase/config";

const Switch = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [user, setUser] = useState(projectAuth.currentUser);
    const [userId, setUserId] = useState('');
    const { error, Logout } = useLogout();

    const handleClick = async () => {
        await Logout();
        window.location.reload();
    };
    
    useEffect(() => {
        if(projectAuth.currentUser){setUserId(projectAuth.currentUser.displayName)};
    });

    const getUser = () => {
        projectAuth.onAuthStateChanged(_user => {
            if(_user){
                setUser(_user);
                setUserId(_user.displayName);
            };            
        })
    }

    return (
        <div className="switch">
            <div className="user">
                <h1>Current User: {projectAuth.currentUser ? userId : ''}</h1>
                <button className="logout" onClick={handleClick}>Log out</button>
            </div>            
            {!showLogin && <Signup />}
            {showLogin && <Login getUser={getUser}/>}
            {!showLogin && <p>Already registered? <span onClick={() => setShowLogin(true)}>Log in</span> instead.</p>}
            {showLogin && <p>No account? <span onClick={() => setShowLogin(false)}>Sign up</span> instead.</p>}
        </div>
    );
}
 
export default Switch;
