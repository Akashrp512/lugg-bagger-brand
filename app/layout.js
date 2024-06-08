import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUGG BAGUER LLP",
  description: "Your one-stop destination for Corporate Gifts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
