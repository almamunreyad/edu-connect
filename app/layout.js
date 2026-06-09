import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EduConnect - Your Education Partner",
  description: "EduConnect is a platform for education and learning",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, poppins.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
