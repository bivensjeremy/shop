import "./globals.css";
import NextUI_Provider from "./Providers/NextUI_Provider";
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
		<html lang="en" className="boutiqueCustomTheme scroll-smooth min-h-screen">
			<CartProvider>
				<body className={montserrat_font.className}>
					<NextUI_Provider>
						<Header />
							{children}
						<Footer />
					</NextUI_Provider>
				</body>
			</CartProvider>
		</html>
	);
}
