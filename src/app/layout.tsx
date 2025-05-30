import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Order of Knights of Saint John Paul II',
  description: 'Official website of the Order of Knights of Saint John Paul II',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 