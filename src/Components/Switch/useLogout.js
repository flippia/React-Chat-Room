import { projectAuth } from '../../firebase/config';
import { useState } from 'react';

const useLogout = () => {
    const [ error, setError ] = useState(null);

    const Logout = async () => {
        
        setError(null);

        try {
            await projectAuth.signOut();
            setError(null);
        } catch(err) {
            console.log(err.message);
            setError(err.message);
        }
    } 

    return { error, Logout };
}
 
export default useLogout;