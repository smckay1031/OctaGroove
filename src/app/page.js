"use client"

import {AuroraHero} from "./components/home/hero"

export default function Home() {

  return (
  <>
    <main className="h-screen flex justify-center font-Inter">
      <hero id="hero" className="w-full h-screen absolute top-0">
        <AuroraHero />
        <h1> Welcome to Octagroove</h1>
      </hero>
    </main>
  </>
  );
}
