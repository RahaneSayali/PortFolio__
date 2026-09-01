import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Sayali Rahane | Backend Software Developer",
  description:
    "Backend software developer building reliable, scalable APIs, distributed systems and production-ready applications with Java, Spring Boot, Node.js, PostgreSQL and Azure.",
  keywords: [
    "Backend Developer", "Java Developer", "Spring Boot", "Node.js",
    "System Design", "Microservices", "PostgreSQL", "Redis", "Kafka", "Azure",
  ],
  authors: [{ name: "Sayali Rahane" }],
  openGraph: {
    title: "Sayali Rahane | Backend Software Developer",
    description: "Building reliable backend systems for products that need to scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayali Rahane | Backend Software Developer",
    description: "Building reliable backend systems for products that need to scale.",
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
