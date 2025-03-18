import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/context/query-provider";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rate Arab",
  description: "Rate Arab is a platform for rating Arab countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${dm_sans.className} antialiased`}>
        <QueryProvider>
            {children}
            <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}