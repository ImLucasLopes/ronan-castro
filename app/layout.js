import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '800'], // Light, Regular, Medium, SemiBold, ExtraBold
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', // Garante que a fonte seja carregada de forma otimizada
})

export const metadata = {
  title: 'Ronan Castro Produções',
  description:
    'Transforme suas ideias musicais em produções de alto nível com Ronan Castro.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
