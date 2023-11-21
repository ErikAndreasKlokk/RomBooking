"use client";
import { useEffect, useState } from "react";
import { UserAuth } from './authPage';
import KlasseromBooking from "./klasserombooking";
import { time } from "console";
  
type props = {
    klasserom: string;
  }

export default function KlasseromButton(props: props) {
    const [showKlasserom, setShowKlasserom] = useState(false)

    const pilHøyre = ">"
    const pilVenstre = "<"
    const date = new Date()
    const dd = date.getDate()
    const mm = date.getMonth() + 1
    const yy = date.getFullYear()
    const fullDate = dd + "." + mm + "." + yy

    return (
        <div>
            <button onClick={() => setShowKlasserom(true)}>{props.klasserom}</button>
            {showKlasserom ? (
                <div className="klasserominfoboks">
                    <div className="klasserominfobakgrunn"></div>
                    <div className="klasserominfo">
                        <div className="klasserominfoheader">
                            <span></span>
                            <p>{props.klasserom}</p>
                            <button onClick={() => setShowKlasserom(false)}>X</button>
                        </div>
                        <div className="klasserominfomain">
                            <div className="datoklasserom">
                                <button>{pilVenstre}</button>
                                <p>{fullDate}</p>
                                <button>{pilHøyre}</button>
                            </div>
                            <KlasseromBooking tid="08:15 - 09:00" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="09:00 - 09:45" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="10:00 - 10:45" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="10:45 - 11:30" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="12:15 - 13:00" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="13:00 - 13:45" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="14:00 - 14:45" klasserom={props.klasserom}/>
                            <KlasseromBooking tid="14:45 - 15:30" klasserom={props.klasserom}/>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
  }