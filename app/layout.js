import Navbar from './components/Navbar';
import './globals.css'
import { montserrat_font } from './lib/fonts';
import Footer from './components/Footer';
import { CartProvider } from './utils/loadCart';

export const metadata = {
  title: "Bivens's Boutique",
  description: 'Custom curated clothing store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      
      <CartProvider>
        <body className={`${montserrat_font.className} flex flex-col min-h-full`}>
          <Navbar />
            <main className='grow'>
              {children}
            </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  )
}
