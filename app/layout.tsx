import React from "react";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            width: "100%",
          }}
        >
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
