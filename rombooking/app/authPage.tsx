"use client";
import 'firebaseui/dist/firebaseui.css'
import React, { useEffect, useState, useContext, createContext } from "react";
import { auth } from './firebase';
import { signOut, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, GithubAuthProvider } from 'firebase/auth';


const AuthContext: any = createContext(null)

export const AuthContextProvider = ({children}: any) => {

    const [user, setUser] = useState(null)

    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const GithubSignIn = () => {
        const provider = new GithubAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const LogOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user])

    return(
        <AuthContext.Provider value={{user, GoogleSignIn, GithubSignIn, LogOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}