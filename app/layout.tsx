import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <head />
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="pt-24 z-0">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
