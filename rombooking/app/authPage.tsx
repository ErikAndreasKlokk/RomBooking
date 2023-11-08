"use client";
import * as firbaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useEffect, useState, useContext, createContext, use } from "react";
import { auth } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';


const AuthContext: any = createContext(null)

export const AuthContextProvider = ({children}: any) => {

    const [user, setUser] = useState(null)

    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider()
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
        <AuthContext.Provider value={{user, GoogleSignIn, LogOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}