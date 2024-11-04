import { useContext } from 'react';
import { verifyLoggedinContext } from '../../contexts/Context';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export const LoginChecker = () => {
    const navigate = useNavigate();


    const [verifyLoggedIn, setVerifyLoggedIn] = useContext(verifyLoggedinContext);
    if (verifyLoggedIn === null) {
        return <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: 'bold', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>;
    }

    if (verifyLoggedIn === 'verified') {
        return navigate(  '/dashboard');
    }
    return navigate('/login');


};


