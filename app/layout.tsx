import "./globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-purple-950 text-white">
        <Navbar />
        <main className="px-6 md:px-24">{children}</main>
      </body>
    </html>
  );
}

