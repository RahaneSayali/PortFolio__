import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Sayali Rahane — Java Backend Engineer",
  description:
    "Java Backend Engineer specialising in microservices, distributed systems, and AWS. ~2 years building scalable backends serving 50K+ DAU.",
  keywords: ["Java Backend Engineer", "Spring Boot", "Microservices", "Kafka", "Redis", "AWS", "NestJS"],
  authors: [{ name: "Sayali Rahane" }],
  openGraph: {
    title: "Sayali Rahane — Java Backend Engineer",
    description: "Building scalable microservices and distributed systems with Java, Spring Boot, Kafka, and AWS.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
