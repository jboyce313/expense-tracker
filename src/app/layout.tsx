import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Enter your expenses and track your budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
