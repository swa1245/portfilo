import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { PageTransition } from "@/components/ui/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Swaraj Patil - Computer Science Student",
  description: "Personal portfolio of Swaraj Patil, a Computer Science student at Kolhapur Institute of Technology",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}