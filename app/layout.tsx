import "./globals.css";

export const metadata = {
  title: "Kolaborasi",
  description: "Architecture & Contractor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}