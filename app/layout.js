import { Inter } from "next/font/google";

import "./globals.css";

// Toastifiy Import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secrecy Pay",
  description: "Secrecy Pay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ToastContainer />
          {children}
        </>
      </body>
    </html>
  );
}
