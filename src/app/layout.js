import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "EDUAI",
  description: "EDUAI Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
