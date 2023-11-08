"use client";
import { AuthContextProvider, UserAuth } from './authPage';

export default function LoggInnKnapp() {

    const { user, GoogleSignIn, LogOut }: any = UserAuth()

    const handleSignIn = async () => {
        try {
            await GoogleSignIn()
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

    return(

        // <div className="logginn">
        //     <button onClick={handleSignIn}>Logg inn</button>
        // </div>


        { !user ? (
            <div className="logginn">
                <button onClick={handleSignIn}>Logg inn</button>
            </div>
        ) 
        : 
        (
            <div className="logginn">
                <button onClick={handleSignOut}>Logg ut</button>
            </div>
        )}
    )
}









