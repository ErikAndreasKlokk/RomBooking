"use client";
import { use, useEffect, useState } from "react";
import { UserAuth } from './authPage';
import firebase from "firebase/compat/app";
import 'firebase/firestore'
import { stringify } from "querystring";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from './firebase'

type props = {
    tid: string;
    klasserom: string;
    dato: string;
}

export default function KlasseromBooking(props: props) {
    const {user}: any = UserAuth()
    const [erBooket, setErBooket] = useState(false)
    const [booketAv, setBooketAv] = useState("")
    const [docData, setDocData] = useState({})
    const [githubNotSignedIn, setGithubNotSignedIn] = useState(user?.reloadUserInfo.screenName)

    const ReadDataFromCloudFirestore = async () => {
        try {
            const userDoc = doc(db, props.klasserom, props.tid, "datoer", props.dato)
            await getDoc(userDoc).then((doc) => {
                if (doc.exists()) {
                    setDocData(doc.data())
                    setErBooket(doc.data().erBooket)
                    setBooketAv(doc.data().booketAv)
                    console.log(githubNotSignedIn)
                }
                else {
                    klasseromUnBooket()
                }
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        ReadDataFromCloudFirestore()
        if (user?.reloadUserInfo.screenName == undefined) {
            setGithubNotSignedIn(user?.displayName)
        }
    },[props.dato])
 
    const klasseromBooket = async () => {
        ReadDataFromCloudFirestore()
        const colRef = collection(db, props.klasserom)
        const docRef = doc(colRef, props.tid, "datoer", props.dato)

        await setDoc(docRef, {
            booketAv: githubNotSignedIn,
            erBooket: true,
            tid: props.tid,
            klasserom: props.klasserom
        })
    }

    const klasseromUnBooket = async () => {
        ReadDataFromCloudFirestore()
        const colRef = collection(db, props.klasserom)
        const docRef = doc(colRef, props.tid, "datoer", props.dato)

        await setDoc(docRef, {
            booketAv: "",
            erBooket: false,
            tid: props.tid,
            klasserom: props.klasserom
        })
    }

    return(
        <div className="klasseromtilgjengelighet" style={{backgroundColor: erBooket ? "#cc2936" : "#16a085"}}>
            <div className="klasseromtilgjengelighetdiv1">
                <div className="tilgjengelighetklokkeslett">{props.tid}</div>
                {erBooket ? (

                    <div>
                        {user ? (
                            <div>
                            {(githubNotSignedIn == booketAv) ? (
                                <button onClick={() => [setErBooket(false), setBooketAv(""), klasseromUnBooket()]} className="bookklasserom">UnBook Klasserom</button>
                            ) : (
                                <div className="booketav"><span>Booket av:</span> {booketAv}</div>
                            )}
                        </div>
                        ) : (
                            <div className="booketav"><span>Booket av:</span> {booketAv}</div>
                        )}
                    </div>
                ) : (
                    <div>
                        {user ? (
                            <button onClick={() => [setErBooket(true), setBooketAv(githubNotSignedIn), klasseromBooket()]} className="bookklasserom">Book Klasserom</button>
                        ) : (
                            <div className="logginnforåbooke">
                                <p>Logg inn for å booke</p>
                            </div>
                        )
                        }
                    </div>
                )}
            </div>
        </div>
    )
}