import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './authPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rom Booking',
  description: 'Et sted du kan booke rom for IM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
