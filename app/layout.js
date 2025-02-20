import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import AppHeader from "@/components/AppHeader/AppHeader";
import Footer from "@/components/Footer/Footer";
import SpeedDials from "@/components/SpeedDials/SpeedDials";
import Chatbot from "@/components/Chatbot/Chatbot";

const inter = Poppins({ subsets: ["latin"] ,weight: ['100','300','400','500','700','900']});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.className}
      >
         <Providers>

          <div className="w-full overflow-x-hidden">
         <AppHeader/>

         <div>
          <Chatbot/>
         </div>

         <div className="fixed bottom-8 left-8 z-50">
          <SpeedDials />
        </div>

         {children}
         <Footer/>

         </div>
         </Providers>
        
      </body>
    </html>
  );
}
