import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/component/navbar";
import FooterComponent from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Wordpress Headless",
    template: "%s | Sanjib Mondal",
  },
  description:
    "Wordpress Headless Developement on React.js, Next.js by Sanjib Mondal",
  keywords: ["React", "Next.js", "Wordpress Headless", "Sanjib Mondal"],
  icons: {
    icon: "../../public/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <NavbarComponent/>
        <div className="container mx-auto px-4 md:container md:mx-auto"> 
        {children}
       
        </div>
         <FooterComponent/>
      </body>
    </html>
  );
}
