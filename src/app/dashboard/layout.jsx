"use client";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-screen grid grid-rows-layout">{children}</div>
    </>
  );
}
