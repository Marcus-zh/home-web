import type { Metadata } from 'next'
import "./globals.css";
import style9 from "style9";

const styles = style9.create({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "var(--bg-color)",
  },
})

export const metadata: Metadata = {
  title: 'Marcus\'s Home Page',
  description: 'A home page for Marcus',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Zh-cn">
      <body className={styles("body")} >{children}</body>
    </html>
  )
}
