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
    <html lang="en" className='scroll-smooth'>
      <CartProvider>
        <body className={`${montserrat_font.className}`}>
          <Navbar />
            {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  )
}
