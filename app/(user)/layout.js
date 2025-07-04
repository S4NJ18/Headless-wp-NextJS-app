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
    default: "Headless WordPress blog",
    template: "%s | Sanjib Mondal",
  },
  description:
    "Headless WordPress Developement on React.js, Next.js by Sanjib Mondal",
  keywords: ["React", "Next.js", "Headless Wordpress", "Sanjib Mondal"],
  icons: {
    icon: "/vercel.svg",
  },
  openGraph: {
    title: "Headless WordPress blog",
    description: "Headless WordPress Developement on React.js, Next.js by Sanjib Mondal",
    url: "",
    siteName: "Headless WordPress Blog",
    images: [
      {
        url: "/Modern Headless WordPress Development Solutions.png",
        width: 1200,
        height: 630,
        alt: "Headless WordPress blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless WordPress blog",
    description: "Headless WordPress Developement on React.js, Next.js by Sanjib Mondal",
    creator: "@thapatechnical",
    images: ["/Modern Headless WordPress Development Solutions.png"],
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
