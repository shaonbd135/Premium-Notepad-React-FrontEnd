import { useState } from 'react';

const useAppState = () => {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [verifyLoggedIn, setVerifyLoggedIn] = useState(null);
    return {
        user, setUser,
        loggedIn, setLoggedIn,
        verifyLoggedIn, setVerifyLoggedIn

    }
};

export default useAppState;