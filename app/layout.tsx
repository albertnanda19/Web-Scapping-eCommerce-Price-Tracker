import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "AlbPriceWise",
   description:
      "Melacak harga produk dengan mudah dan hemat uang di toko online Anda.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html lang="en">
         <body>
            <main className="max-w-10xl mx-auto">
               <Navbar />
               {children}
            </main>
         </body>
      </html>
   );
}
