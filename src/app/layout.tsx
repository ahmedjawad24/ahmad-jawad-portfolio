import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ahmad Jawad | Applied AI & Machine Learning Engineer",
  description:
    "Ahmad Jawad builds practical, smart, and reliable AI applications that solve real-world problems. Computer vision, AI assistants, fraud detection, and web software.",
  metadataBase: new URL("https://ahmedjawad24.github.io"),
  openGraph: {
    title: "Ahmad Jawad | Applied AI & Machine Learning Engineer",
    description:
      "Building practical AI applications, computer vision tools, and smart assistants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="classic-emerald">
      <body className="antialiased font-sans min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
