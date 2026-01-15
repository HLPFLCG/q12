import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://q12agency.com"),
  title: {
    default: "Q12 Agency | Premium UGC & Social Media Marketing Agency",
    template: "%s | Q12 Agency",
  },
  description:
    "Q12 Agency is a premium creative studio specializing in UGC content creation, social media management, and marketing strategies that drive real results for ambitious brands.",
  keywords: [
    "UGC agency",
    "user generated content",
    "social media marketing",
    "content creation",
    "digital marketing agency",
    "social media management",
    "brand marketing",
    "influencer marketing",
    "TikTok marketing",
    "Instagram marketing",
    "content strategy",
    "creative agency",
  ],
  authors: [{ name: "Johnny Saffra", url: "https://linkedin.com/in/johnnysaffra" }],
  creator: "Q12 Agency",
  publisher: "Q12 Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://q12agency.com",
    siteName: "Q12 Agency",
    title: "Q12 Agency | Premium UGC & Social Media Marketing Agency",
    description:
      "Premium creative studio specializing in UGC content creation and social media marketing that drives real results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Q12 Agency - Premium Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q12 Agency | Premium UGC & Social Media Marketing Agency",
    description:
      "Premium creative studio specializing in UGC content creation and social media marketing.",
    images: ["/og-image.png"],
    creator: "@johnnysaffra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://q12agency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
