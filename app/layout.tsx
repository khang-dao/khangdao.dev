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
      <body className="before:content-[''] before:fixed before:top-0 before:left-0 before:w-full before:h-full before:border-[1.25rem] before:border-white before:box-border before:pointer-events-none before:z-[9999] after:content-[''] after:fixed after:top-0 after:left-0 after:w-full after:h-full after:border-[1.25rem] after:border-white after:box-border after:pointer-events-none after:z-[9999]">
        {children}
      </body>
    </html>
  );
}
