import "./Switch.css";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const Switch = () => {
    const [Id, setId] = useState(null);
    const history = useHistory();
    
    const handleSubmit = () => {
        if(!localStorage.getItem('user')){
            localStorage.setItem('user','Saber');
            history.push('/chat');
        }else{
            localStorage.setItem('user',Id);
            history.push('/chat');
        };
    };

    useEffect(() => {
        document.querySelector('form').querySelector('input').maxLength = "9";
    })

    return (
        <div className="switch">
            <h1>Current User: {localStorage.getItem('user') ? localStorage.getItem('user') : 'Saber'}</h1>
            <form onSubmit={handleSubmit}>
                <label>Input username:</label>
                <input type="text" required
                onChange={e => {setId(e.target.value)}}
                />
                <button>Submit</button>
            </form>            
        </div>
    );
}
 
export default Switch;
