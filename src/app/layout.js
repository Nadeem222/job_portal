import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import CommonLayout from "@/components/common-layout";
import Loading from "./loading";
import { ClerkProvider } from "@clerk/nextjs";


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Suspense fallback={<Loading />}>
            <CommonLayout children={children} />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
