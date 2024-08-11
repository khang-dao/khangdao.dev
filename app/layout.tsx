/* eslint-disable react-refresh/only-export-components */
import Head from "next/head";
import "./styles/globals.css";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Khang Dao',
  description: 'The official portfolio website of Khang Dao.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any"/>
      </Head>
      <body className="before:pointer-events-none before:fixed before:left-0 before:top-0 before:box-border before:h-full before:w-full before:border-[1.25rem] before:border-white before:content-[''] after:pointer-events-none after:fixed after:left-0 after:top-0 after:box-border after:h-full after:w-full after:border-[1.25rem] after:border-white after:content-['']">
        {children}
      </body>
    </html>
  );
}
