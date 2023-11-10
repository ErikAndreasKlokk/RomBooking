"use client";

import { useEffect, useState } from "react";
import { db } from "./firebase"
import { UserAuth } from './authPage';

type props = {
    erBooket?: boolean;
    booketav?: any;
    tid: string;
}

export default function KlasseromBooking(props: props) {
    const {user}: any = UserAuth()
    const [erBooket, setErBooket] = useState(props.erBooket)
    const [booketAv, setBooketAv] = useState(props.booketav)

    return(
        <div className="klasseromtilgjengelighet" style={{backgroundColor: erBooket ? "#cc2936" : "#16a085"}}>
            <div className="klasseromtilgjengelighetdiv1">
                <div className="tilgjengelighetklokkeslett">{props.tid}</div>
            {erBooket ? (
                <div>
                    {(user.displayName == booketAv) ? (
                        <button onClick={() => [setErBooket(false), setBooketAv("")]} className="bookklasserom">UnBook Klasserom</button>
                    ) : (
                        <div className="booketav"><span>Booket av:</span> {booketAv}</div>
                    )}
                </div>
                ) : (
                    <div>
                        {user ? (
                            <button onClick={() => [setErBooket(true), setBooketAv(user.displayName)]} className="bookklasserom">Book Klasserom</button>
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