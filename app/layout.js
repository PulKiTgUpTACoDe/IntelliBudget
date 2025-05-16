import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets: ["latin"] });

export const metadata = {
  title: "IntelliBudget",
  description: "IntelliBudget: Smart budgeting, simplified. Take control of your finances with AI-powered insights and effortless tracking.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* Header */}
        <Header />
        <main className="min-h-screen">{children}</main>

        <Toaster richColors />
        {/* Footer */}
        <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with Mandeep Gupta</p>
            </div>
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
