import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FelpsDev Portfolio',
  description: 'FelpsDev Front-end Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
