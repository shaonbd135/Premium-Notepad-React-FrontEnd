import axios from 'axios';
import { verifyLoggedin } from '../config/api/globalApi';
import { useEffect, useContext } from 'react';
import { loggedInContext, userContext, verifyLoggedinContext } from '../contexts/Context';

const useVerifyToken = () => {
    const [loggedIn, setLoggedIn] = useContext(loggedInContext);
    const [user, setUser] = useContext(userContext);
    const [verifyLoggedIn, setVerifyLoggedIn] = useContext(verifyLoggedinContext);

    useEffect(() => {
        const verify = async () => {
            try {
                const result = await axios.get(verifyLoggedin, {
                    withCredentials: true,
                });

                if (result.data && result.data.success===true) {
                    setUser(result.data.user);
                    setLoggedIn(true);
                    setVerifyLoggedIn('verified');
                } else {
                    setLoggedIn(false);
                    setUser(null);
                    setVerifyLoggedIn('unverified');
                }
            } catch (error) {
                console.error("Verification failed:", error);
                setLoggedIn(false);
                setUser(null);
                setVerifyLoggedIn('unverified');
            }
        };

        verify();
    }, [ setLoggedIn, setUser , setVerifyLoggedIn ]);
};

export default useVerifyToken;




