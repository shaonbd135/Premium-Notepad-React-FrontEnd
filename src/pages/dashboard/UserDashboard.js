import React, { useContext } from 'react';
import { loggedInContext, userContext, verifyLoggedinContext } from '../../contexts/Context';
import Cookies from 'js-cookie';

const UserDashboard = () => {
    const [user, setUser] = useContext(userContext);
    const [loggedIn, setLoggedIn] = useContext(loggedInContext);
    const [verifyLoggedIn, setVerifyLoggedIn] = useContext(verifyLoggedinContext);
    return (
        <div className='text-center' >
            <h1>Welcome {user.name}</h1>

            <button className='btn btn-primary' onClick={() => {
                Cookies.remove('token');
                setUser(null);
                setLoggedIn(false);
                setVerifyLoggedIn('unverified');
            }}>Logout</button>
        </div>
    );
};

export default UserDashboard;