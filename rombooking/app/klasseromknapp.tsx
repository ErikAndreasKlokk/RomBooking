"use client";
import { useEffect, useState } from "react";
import { UserAuth } from './authPage';
import KlasseromBooking from "./klasserombooking";
import { time } from "console";
import { Datepicker } from "flowbite-react";
import { type } from "os";
  
type props = {
    klasserom: string;
  }

export default function KlasseromButton(props: props) {
    const [showKlasserom, setShowKlasserom] = useState(false)
    const [dato, setDato] = useState(String)

    function setTodaysDate() {
        const dagensDato = new Date()
        const stringDagensDato = dagensDato.toDateString()
        setDato(stringDagensDato)
    }

    function showValgtdato(value: Date) {
        setDato(value.toDateString())
    }

    useEffect(() => {
        setTodaysDate()
    },[showKlasserom])

    const date = new Date()

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
                                <Datepicker className=" flex justify-center z-40" id="datepickerId" onSelectedDateChanged={showValgtdato} language="NO" weekStart={2} minDate={date} showClearButton={false} showTodayButton={false} />
                            </div>
                            <KlasseromBooking dato={dato} tid="08:15 - 09:00" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="09:00 - 09:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="10:00 - 10:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="10:45 - 11:30" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="12:15 - 13:00" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="13:00 - 13:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="14:00 - 14:45" klasserom={props.klasserom}/>
                            <KlasseromBooking dato={dato} tid="14:45 - 15:30" klasserom={props.klasserom}/>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
  }