import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Winodya Wijegunawardhana - Full-Stack Developer & Software Engineer",
  description: "Professional portfolio of Winodya Wijegunawardhana, a motivated Full-Stack Developer and Software Engineer specializing in React.js, Node.js, and modern web technologies.",
  keywords: ["Full-Stack Developer", "Software Engineer", "React.js", "Node.js", "Web Developer", "JavaScript", "MongoDB", "AWS", "Portfolio"],
  authors: [{ name: "Winodya Wijegunawardhana" }],
  creator: "Winodya Wijegunawardhana",
  openGraph: {
    title: "Winodya Wijegunawardhana - Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills",
    url: "https://winodya-portfolio.vercel.app",
    siteName: "Winodya Wijegunawardhana Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winodya Wijegunawardhana - Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
