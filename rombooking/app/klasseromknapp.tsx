"use client";
import { useEffect, useState } from "react";
import { UserAuth } from './authPage';
import KlasseromBooking from "./klasserombooking";
import { time } from "console";
import { Datepicker } from "flowbite-react";
  
type props = {
    klasserom: string;
  }

export default function KlasseromButton(props: props) {
    const [showKlasserom, setShowKlasserom] = useState(false)
    const [valgtDato, setValgtdato] = useState("")

    function showValgtdato(value: string) {
        setValgtdato(value)
        console.log(valgtDato)
    }

    const date = new Date()
    const dd = date.getDate()
    const mm = date.getMonth() + 1
    const yy = date.getFullYear()
    const fullDate = dd + "." + mm + "." + yy

    return (
        <div>
            <button className="klasserombutton" onClick={() => setShowKlasserom(true)}>{props.klasserom}</button>
            {showKlasserom ? (
                <div className="klasserominfoboks">
                    <div className="klasserominfobakgrunn"></div>
                    <div className="klasserominfo">
                        <div className="klasserominfoheader">
                            <span></span>
                            <p>{props.klasserom}</p>
                            <button className="exitklasserombutton" onClick={() => setShowKlasserom(false)}>X</button>
                        </div>
                        <div className="klasserominfomain">
                            <div className="datoklasserom">
                                <Datepicker id="datepickerId" /* onChange={(e: any) => [showValgtdato(e.target.value)]} */ onSelect={(e: any) => console.log(e.target.value)} language="NO" weekStart={2} minDate={date} showClearButton={false} showTodayButton={false} />
                            </div>
                            <KlasseromBooking dato="" tid="08:15 - 09:00" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="09:00 - 09:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="10:00 - 10:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="10:45 - 11:30" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="12:15 - 13:00" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="13:00 - 13:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="14:00 - 14:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato="" tid="14:45 - 15:30" klasserom={props.klasserom}/>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
  }