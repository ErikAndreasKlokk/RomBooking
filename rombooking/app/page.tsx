import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="maxwidth">
      <header>
        <div>
          <Link href="">
            <Image 
              src="/IM logo.png" 
              alt='Logo' 
              width={70} 
              height={70}>
            </Image>
          </Link>
        </div>
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </div>
)}