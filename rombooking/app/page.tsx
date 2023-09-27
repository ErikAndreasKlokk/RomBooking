import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';



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
          <button>Blå base</button>
          <button>Esport</button>
          <button>Lilla base</button>
          <button>Oransj base</button>
          <button>Grønn base</button>
          <button>Amfiet</button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </main>
      <footer>

      </footer>
    </div>
)}