"use client";
import { useEffect, useState } from 'react';
import { AuthContextProvider, UserAuth } from './authPage';
import Image from 'next/image';

export default function LoggInnKnapp() {

    const { user, GoogleSignIn, GithubSignIn, LogOut}: any = UserAuth()
    const [loading, setLoading] = useState(true)

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
    const handleGithubSignIn = async () => {
        try {
            await GithubSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await LogOut()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1150))
            setLoading(false);
        }
        checkAuthentication()
    }, [user])



    return(
        <div>
            {loading ? (
                <div className="logginn">
                    <Image className="loading"
                        src={"/refresh.svg"}
                        alt='loading'
                        height={30}
                        width={30}
                        >
                    </Image>
                </div>
            ) : !user ? (
                <>
                    <div className="logginn">
                        <button onClick={handleGoogleSignIn}>Logg inn <span>&#x2764;&#xfe0f;</span></button>
                    </div>
                    <div className="logginn">
                        <button onClick={handleGithubSignIn}>Logg inn</button>
                    </div>
                </>
                ) 
                : 
                (
                    <div className="loggetinn">
                        <button onClick={handleSignOut}>
                            <Image className="loggetinnImage" src={user.photoURL} alt='Profile' width={59} height={59}></Image>
                        </button>
                    </div>
                )}
        </div>
    )
}









