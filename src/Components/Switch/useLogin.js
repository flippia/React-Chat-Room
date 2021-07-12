import { projectAuth } from '../../firebase/config';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const useLogin = () => {
    const [ error, setError ] = useState(null);
    const history = useHistory();

    const Login = async(email, password) => {
        
        setError(null);

        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            setError(null);
            console.log(res);
            history.push('./chat');
            return res;
        } catch(err){
            console.log(err);
            setError('Incorrect login credentials');
        };
    };

    return {error, Login }
};

export default useLogin;