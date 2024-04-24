import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from "./components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gilded Goblin",
  description: "The Gamer's Marketplace",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer />
      </body>
    </html>

  );
}


