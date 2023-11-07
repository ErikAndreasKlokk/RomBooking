import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useState } from 'react';
import { createClient } from "@libsql/client";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzovEYZue_vuryyj_SD1dDfpZEDQ-B5o",
  authDomain: "rombooking-6e184.firebaseapp.com",
  projectId: "rombooking-6e184",
  storageBucket: "rombooking-6e184.appspot.com",
  messagingSenderId: "524540107538",
  appId: "1:524540107538:web:9170524922897420bd31cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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