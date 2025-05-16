import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IntelliBudget",
  description:
    "IntelliBudget: Smart budgeting, simplified. Take control of your finances with AI-powered insights and effortless tracking.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>

          <Toaster richColors />
          {/* Footer */}
          <footer className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 border-t border-gray-200 dark:from-gray-700 dark:to-gray-900 dark:border-gray-700">
            <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">Made with ❤️ by Mandeep Gupta</p>
              <p className="text-xs mt-2">
                &copy; {new Date().getFullYear()} IntelliBudget. All rights
                reserved.
              </p>
              <p className="text-xs mt-1">
                Licensed under the{" "}
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  MIT License
                </a>
                .
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
