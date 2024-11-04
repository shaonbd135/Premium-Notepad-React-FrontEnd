import { createContext } from 'react';
import { verifyLoggedin } from './../config/api/globalApi';


export const userContext = createContext();
export const loggedInContext = createContext();
export const verifyLoggedinContext = createContext();

