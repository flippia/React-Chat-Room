import { useState } from "react";
import useLogin from './useLogin';
import { projectAuth } from "../../firebase/config";

const Login = ({getUser}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { error, Login } = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await Login(email, password);

        getUser();       
        
    }

    return (  
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Input Email:</label>
                <input type="text" required
                onChange={e => {setEmail(e.target.value)}}
                />
                <label>Input password:</label>
                <input type="text" required
                onChange={e => {setPassword(e.target.value)}}
                />
                {error && <div className="error">{error}</div>}
                <button>Log in</button>
            </form>
        </div>
    );
}
 
export default Login;