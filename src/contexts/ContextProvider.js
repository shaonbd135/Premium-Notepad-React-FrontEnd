import React from 'react';
import { userContext, loggedInContext, verifyLoggedinContext } from './Context';
import useAppState from '../hooks/global-state/useAppState';

const ContextProvider = ({ children }) => {

    const { user, setUser, loggedIn, setLoggedIn, verifyLoggedIn, setVerifyLoggedIn } = useAppState();
    return (
        <loggedInContext.Provider value={[loggedIn, setLoggedIn]}>
            <userContext.Provider value={[user, setUser]}>
                <verifyLoggedinContext.Provider value={[verifyLoggedIn, setVerifyLoggedIn]}>
                    {children}
                </verifyLoggedinContext.Provider>
            </userContext.Provider>
        </loggedInContext.Provider>

    );
};

export default ContextProvider;