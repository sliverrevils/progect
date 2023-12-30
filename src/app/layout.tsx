'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/html/header/Header'
import Footer from '@/components/html/footer/Footer'
import Main from '@/components/html/main/Main'
import Aside from '@/components/html/aside/Aside'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Redux from '@/components/storeProvider/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Progect',
//   description: 'Progect app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="ru">
      <body className={inter.className}>
        <Redux>
        <Header />
        <Main>
          <Aside />
          {children}
        </Main>
        <Footer />
        </Redux>
      </body>
    </html> 
  )
}
