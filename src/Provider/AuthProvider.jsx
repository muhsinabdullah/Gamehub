import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const registerWithEmailAndPassword = (email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)

    }

    const authData ={
        registerWithEmailAndPassword
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;