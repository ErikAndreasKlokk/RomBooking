import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useState } from 'react';

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
    <div className="logginnpopupdiv">
      <div className="logginnpopup">
        <div className="logginnheader">
          <p>Login</p>
          <p>Vær så snill å logg inn for å fortsette.</p>
        </div>
        <div className="logginninputs">
          <p>Email</p>
          <input type="text" placeholder="noe@noe.noe"/>
          <p>Password</p>
          <input type="text" placeholder="passord123"/>
        </div>
        <div className="logginnbutton">
          <button>Logg inn</button>
        </div>
        <div className="logginnfooter">
          <p>Hvis du ikke har konto, signer her.</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
    <LoggInnPopup></LoggInnPopup>
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