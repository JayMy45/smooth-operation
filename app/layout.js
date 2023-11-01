import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smooth Operations',
  description: 'An ASEA and GoFinity distributorship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow"> {/* This div will expand and push the footer down */}
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
