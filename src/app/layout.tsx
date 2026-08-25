import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Jawad | Applied AI & MLOps Engineer",
  description: "Ahmad Jawad builds trustworthy AI systems from prototype to production.",
  metadataBase: new URL("https://ahmedjawad24.github.io"),
  openGraph: {
    title: "Ahmad Jawad | Applied AI & MLOps Engineer",
    description: "Trustworthy AI systems, agentic products, and production-minded ML.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
