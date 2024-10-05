// app/layout.js or app/_app.js (if using a custom App component)

import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveNavbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Engineering product',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Include Navbar at the top */}
        <ResponsiveNavbar />

        {/* Main content */}
        <main
          style={{
            minHeight: '100vh',
          }}
        >
          {children}
        </main>

        {/* Include Footer at the bottom */}
        <Footer />
      </body>
    </html>
  )
}
