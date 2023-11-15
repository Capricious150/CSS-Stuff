import Navbar from '@/components/Navbar'
import '../styles/input.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'CSS Stuff',
  description: 'A page for CSS stuff',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="pageBody">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
