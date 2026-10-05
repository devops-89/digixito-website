import AosInit from "@/components/widgets/AosInit";
import Footer from "@/components/widgets/footer";
import Modal from "@/components/widgets/Modal";
import Navbar from "@/components/widgets/navbar";
import ScrollToTop from "@/components/widgets/ScrollToTop";

import "animate.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import Script from "next/script";
import "swiper/css";
import "./globals.css";
import Header2 from "@/components/widgets/Header2";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digixito.com"),
  title: "AI Development Company for Business Growth & Automation",
  description:
    "Transform your business with custom AI solutions, enterprise AI, and intelligent automation that improve efficiency, innovation, and long-term growth",
  openGraph: {
    title: "AI Development Company for Business Growth & Automation",
    siteName: "Digixito",
    url: "https://www.digixito.com/",
    description:
      "Transform your business with custom AI solutions, enterprise AI, and intelligent automation that improve efficiency, innovation, and long-term growth",
    type: "website",
    images: [
      {
        url: "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Digixito",
    title: "AI Development Company for Business Growth & Automation",
    description:
      "Transform your business with custom AI solutions, enterprise AI, and intelligent automation that improve efficiency, innovation, and long-term growth",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  verification: {
    google: "bC2HOTREz-Ls2eSAad-s_k9BOw0CuswShB2jKg0nQxU",
  },
  alternates: {
    canonical: "/",
  },
};

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digixito",
  url: "https://www.digixito.com/",
  logo: "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
  sameAs: [
    "https://www.facebook.com/Digixitomedia",
    "https://www.instagram.com/digixito/",
    "https://www.linkedin.com/company/digixito/",
    "https://x.com/digixito",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Digixito different from other agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We’re not just a digital agency — we’re a AI digital ecosystem. Our multidisciplinary team of strategists, designers, developers, and AI engineers work together to deliver end-to-end solutions that drive measurable growth and long-term impact.",
      },
    },
    {
      "@type": "Question",
      name: "Does Digixito work with startups or only established companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with both! Whether you’re a startup building your first online presence or an enterprise optimizing digital performance, we customize our approach to match your stage, industry, and goals.",
      },
    },
    {
      "@type": "Question",
      name: "Can Digixito handle complete 360° brand solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — from naming and identity design to digital marketing, software development, and AI integration — we deliver holistic brand transformation under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Digixito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply reach out through our Contact page or email us with your project details. Our team will schedule a free consultation to discuss your goals, understand your needs, and create a customized action plan.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digixito Media Private Limited",
  image: "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
  "@id": "https://www.digixito.com/#localbusiness",
  url: "https://www.digixito.com/",
  telephone: "8800291352",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "",
    postalCode: "",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.631,
    longitude: 77.389,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/Digixitomedia",
    "https://x.com/digixito",
    "https://www.instagram.com/digixito/",
    "https://www.linkedin.com/company/digixito/",
    "https://www.youtube.com/@digixito",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-32L56P6T48"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-32L56P6T48');
            `}
          </Script>
          <Modal />
          <AosInit />
          <div>{/* <Navbar /> */}</div>
          <Header2 />

          {/* <SmokeyCursor /> */}
          {children}
          <ScrollToTop />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
