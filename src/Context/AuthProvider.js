import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState()

    const createUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email, password) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    const resetPassword = ({Email}) =>{
        console.log(Email);
        return sendPasswordResetEmail(auth, Email)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();

    },[])

    const authInfo = { createUser, signIn, user, logOut, updateUser, resetPassword}

    return (
       <AuthContext.Provider
       value={authInfo}>

        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;