import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Portfolio',
  description: 'Implementación de un portfolio utilizando next, tailwindCSS y react.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
