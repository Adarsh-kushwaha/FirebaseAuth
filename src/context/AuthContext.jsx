import React, { useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("")

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)

    }

    function googleLogin() {
        const googleAuthProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext.Provider value={{ signUp: signUp, login: login, user: user, logout: logout, resetPassword: resetPassword, googleSignIn: googleLogin }}>{children}</AuthContext.Provider>
}

export function useUserAuth() {
    return useContext(AuthContext)
}
