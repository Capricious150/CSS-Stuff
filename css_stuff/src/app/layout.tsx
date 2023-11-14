import Navbar from '@/components/Navbar'
import '../styles/input.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS Stuff',
  description: 'A page for CSS stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pageBody">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
