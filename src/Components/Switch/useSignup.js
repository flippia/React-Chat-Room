import { projectAuth } from '../../firebase/config';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const useSignup = () => {
    const [ error, setError ] = useState(null);
    const history = useHistory();

    const Signup = async ( email, password, displayName ) => {
            
        setError(null);
    
        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            if(!res){
                throw new Error('Could not complete the Signup');
            }
            await res.user.updateProfile({ displayName });
            setError(null);
            console.log(res.user);
            history.push('./chat');            
            return res;
        } catch(err) {
            console.log(err.message);
            setError(err.message);
        }
    };
    
    return {error, Signup }
};

export default useSignup;