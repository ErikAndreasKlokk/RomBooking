import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useState } from 'react';
import { createClient } from "@libsql/client";
import { AuthContextProvider, UserAuth } from './authPage';
import LoggInnKnapp from './logInn';


type props = {
  klasserom: string;
  erBooket?: boolean;
  logginn?: boolean;
}

function KlasseromButton(props: props) {
  return (
    <button>{props.klasserom}</button>
  )
}

export default function Home() {
  return (
    <>
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
          <LoggInnKnapp></LoggInnKnapp>
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