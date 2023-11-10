"use client";
import { useEffect, useState } from "react";
import { UserAuth } from './authPage';
import KlasseromBooking from "./klasserombooking";
  
type props = {
    klasserom: string;
  }

export default function KlasseromButton(props: props) {
    const [showKlasserom, setShowKlasserom] = useState(false)

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
                            <KlasseromBooking tid="08:15 - 09:00" klasserom={props.klasserom}></KlasseromBooking>
                            <KlasseromBooking tid="09:00 - 09:45" klasserom={props.klasserom}></KlasseromBooking>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
  }