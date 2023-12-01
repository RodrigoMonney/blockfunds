import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import MainSection from '@/components/sections/MainSection'

export const metadata: Metadata = {
  title: 'Block Funds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='bg-primary-black'>
        <Header />
        {children}
      </body>
    </html>
  )
}
