import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nextjs Serveractions Form Mongodb App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-trebuchetMs text-[14px]">
      <body className="w-full min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
