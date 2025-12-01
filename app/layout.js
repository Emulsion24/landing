import "./globals.css";
// 1. Import your new component


import { Inter, Space_Grotesk, Outfit, Montserrat, Sora } from "next/font/google";

// Option 1: Modern & Clean (Most Popular for Solar)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Option 2: Geometric & Futuristic
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Option 3: Professional & Tech-Forward
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Rezillion",
  description: "Solar App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable}`}>
      <body className={`${outfit.variable} antialiased`}>
        {children}
        
    
      </body>
    </html>
  );
}