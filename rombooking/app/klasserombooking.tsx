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

    console.log(user)

    const ReadDataFromCloudFirestore = async () => {
        try {
            const userDoc = doc(db, props.klasserom, props.tid)
            await getDoc(userDoc).then((doc) => {
                if (doc.exists()) {
                    setDocData(doc.data())
                    setErBooket(doc.data().erBooket)
                    setBooketAv(doc.data().booketAv)
                }
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        ReadDataFromCloudFirestore()
    },[])
 
    const klasseromBooket = async () => {
        ReadDataFromCloudFirestore()
        const colRef = collection(db, props.klasserom)
        const docRef = doc(colRef, props.tid)

        await setDoc(docRef, {
            booketAv: user.displayName,
            erBooket: true,
            tid: props.tid,
            klasserom: props.klasserom
        })
    }

    const klasseromUnBooket = async () => {
        ReadDataFromCloudFirestore()
        const colRef = collection(db, props.klasserom)
        const docRef = doc(colRef, props.tid)

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
                            {(user.displayName == booketAv) ? (
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
                            <button onClick={() => [setErBooket(true), setBooketAv(user.displayName), klasseromBooket()]} className="bookklasserom">Book Klasserom</button>
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