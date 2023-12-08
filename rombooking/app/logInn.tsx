"use client";
import { useEffect, useState } from 'react';
import { AuthContextProvider, UserAuth } from './authPage';
import Image from 'next/image';

export default function LoggInnKnapp() {

    const { user, GoogleSignIn, GithubSignIn, LogOut}: any = UserAuth()
    const [loading, setLoading] = useState(true)
    const [loginnPopup, setloginnPopup] = useState(false)

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
                <div className="loadingDiv">
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
                    <button onClick={() => setloginnPopup(true)} className="logginnKnapp">Logg inn</button>
                    {loginnPopup ? (
                        <div className="logginnBoks">
                            <div className="klasserominfobakgrunn"></div>
                            <div className="logginnPopup">
                            <button className="exitklasserombutton logginnExit" onClick={() => setloginnPopup(false)}>X</button>
                                <div className="logginn">
                                    <button onClick={handleGoogleSignIn}>Google</button>
                                </div>
                                <div className="logginn">
                                    <button onClick={handleGithubSignIn}>Github</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                    }
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









