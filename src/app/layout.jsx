import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hira Trusted Trader",
  description: "All Time Support",


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <link rel="icon" href="https://i.ibb.co/ds1xCc3s/toolxox-com-roundcorner.png" sizes="any" />

    
      <body
        className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
