import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festrudicup",
  description: "World Cup 2026 tracker featuring 48 teams across 16 venues in USA, Canada, and Mexico. Display group standings from 12 groups of 4 teams, live fixtures with scores and dates, knockout bracket progression, and top scorers leaderboard throughout the tournament.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}