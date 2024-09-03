import Head from 'next/head';
import { Component } from "@/components/component/component";
import './globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-5">
        
        <Component/>
      </main>
    </div>
  );
}