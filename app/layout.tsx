import "./styles/globals.css";
import Head from "next/head";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="en">
      <Head>
        <title>Khang Dao</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
