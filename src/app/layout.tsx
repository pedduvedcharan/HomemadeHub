import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homemade Hub",
  description: "Discover homemade delights from local vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top Navigation Bar - 64px height */}
        <nav className="h-16 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-full">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">👨‍🍳</span>
                </div>
                <span className="text-xl font-extrabold text-gray-900">Homemade Hub</span>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/browse" className="text-gray-700 hover:text-blue-600 font-medium">
                  Browse Vendors
                </a>
                <a href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                  How It Works
                </a>
              </div>
              
              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <a href="/sign-in" className="text-gray-700 hover:text-blue-600 font-medium">
                  Sign In
                </a>
                <a href="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
