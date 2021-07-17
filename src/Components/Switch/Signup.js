import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import useSignup from "./useSignup";

const Signup = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const history = useHistory();
    const { error, Signup } = useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await Signup(email, password, name);
    }

    return (  
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <label>Input username:</label>
                <input type="text" required
                onChange={e => {setName(e.target.value)}}
                />
                <label>Input Email:</label>
                <input type="text" required
                onChange={e => {setEmail(e.target.value)}}
                />
                <label>Input password:</label>
                <input type="text" required
                onChange={e => {setPassword(e.target.value)}}
                />
                {error && <div className="error">{error}</div>}
                <button>Sign up</button>
            </form>
        </div>
    );
}
 
export default Signup;
