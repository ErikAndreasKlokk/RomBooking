import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useState } from 'react';
import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://rombooking-erikandreasklokk.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTE3VDA5OjEzOjUzLjczODc5OTk5NVoiLCJpZCI6ImJkNmVlZmIzLTZjY2MtMTFlZS1hNTNmLWIyMjAyOGFiNjU2NSJ9.dSE_evA_MlrmdHu9T_kZu5V2GZT53ySnZOAinhKUbLJC2jSMt1wV-T9OIikvF_m-Epe5yUNx4Hj51WBTKD8aCw"
});

type props = {
  klasserom?: string;
  erBooket?: boolean;
  logginn?: boolean;
}

function KlasseromButton(props: props) {
  return (
    <button>{props.klasserom}</button>
  )
}

function LoggInnPopup() {
  return (
    <>
      <div className="logginnpopupdiv"></div>
      <div className="logginnpopup">
        <div className="logginnheader">
          <h1>Login</h1>
          <p>Vær så snill å logg inn for å fortsette.</p>
        </div>
        <div className="logginninputs">
          <p>Email</p>
          <input type="text" placeholder="noe@noe.noe"/>
          <p>Password</p>
          <input type="text" placeholder="passord123"/>
          <div className="logginnbutton">
          <button>Logg inn</button>
        </div>
        </div>
        <div className="logginnfooter">
          <p>Hvis du ikke har konto, signer her.</p>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
    {/* <LoggInnPopup></LoggInnPopup> */}
    <div className="maxwidth">
      <header>
        <div className="headerdiv">
          <Link href="">
            <Image 
              src="/IM logo.png" 
              alt='Logo' 
              width={70} 
              height={70}>
            </Image>
          </Link>
          <h1>
            Rom Booking IM
          </h1>
          <div className="logginn">
            <button>Logg inn</button>
          </div>
        </div>
        <hr />
      </header>
      <main>
        <div className="klasserom">
          <KlasseromButton klasserom='Grønn base'></KlasseromButton>
          <KlasseromButton klasserom='Blå base'></KlasseromButton>
          <KlasseromButton klasserom='Lilla base'></KlasseromButton>
          <KlasseromButton klasserom='Oransje base'></KlasseromButton>
          <KlasseromButton klasserom='Esport'></KlasseromButton>
        </div>
      </main>
      <footer>
        @Rom Booking IM | 2023
      </footer>
    </div>
    </>
)}