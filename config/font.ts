import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: [
    {
      path: "../styles/fonts/CoinbaseDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/CoinbaseDisplay-Medium.woff2",
      weight: "500 800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-coinbase-display",
});

export const fontSans = localFont({
  src: [
    {
      path: "../styles/fonts/CoinbaseSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/CoinbaseSans-Medium.woff2",
      weight: "500 800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-coinbase-sans",
});

export const fontMono = localFont({
  src: [
    {
      path: "../styles/fonts/CoinbaseMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/CoinbaseMono-Medium.woff2",
      weight: "500 800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-coinbase-mono",
});
