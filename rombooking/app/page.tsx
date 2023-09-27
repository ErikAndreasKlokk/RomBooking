import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type props = {
  klasserom: string;
  erBooket?: boolean;
}

function KlasseromButton(props: props) {
  return (
    <button>{props.klasserom}</button>
  )
}

export default function Home() {
  return (
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
          <div className="pxboks">
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
)}