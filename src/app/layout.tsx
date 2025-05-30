import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import { PostHogProvider } from "./_providers/posthog-provider";
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "R2Drive",
  description: "R2 Drive Storage",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>

      <html lang="en" className={`${geist.variable}`}>
        <body>
          {/* <PostHogProvider> */}
          {children}
          {/* <SpeedInsights /> */}
          {/* <Analytics /> */}
          {/* </PostHogProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
