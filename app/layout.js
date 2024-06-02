import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { montserrat_font } from "./lib/fonts";
import { CartProvider } from "./lib/loadCart";

export const metadata = {
  	title: "Bivens Boutique",
  	description: "Profile project of a commerce store. ",
	keywords: ['Bivens Blueprint', 'Website Development', 'Web design', 'Business Networking', 'Referrals', 'Shop', 'e-commerce'],
	creator: 'Jeremy Bivens'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="boutiqueCustomTheme" className="scroll-smooth">
			<CartProvider>
				<body className={`${montserrat_font.className}`}>
					<Header />
						{children}
					<Footer />
				</body>
			</CartProvider>
		</html>
	);
}
