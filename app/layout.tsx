import { Menu } from './components/Menu'
import './globals.css'
import { Sora, Barrio } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

const barrio = Barrio({ subsets: ['latin'], weight: '400', variable: '--font-barrio' })

export const metadata = {
  title: 'Mãos em Movimento',
  description: 'Sistema de Registor de Serviços de Terapia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${barrio.variable} font-sora`}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
