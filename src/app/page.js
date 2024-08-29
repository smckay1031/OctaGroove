

import {AuroraHero} from "./components/home/hero"
import Card from "./components/home/card1"
import Image from "next/image";
import ScreenShot from "../../public/images/Screenshot 2024-08-27 132902.png"


export default function Home() {



  const cards = [
    {
      id: "1",
      header: 'Top Artists',
      body: " See your top eight artists from on Spotify. Change the duration of the results with the last week, last month, or last year."
    }, 
    {
      id:"2",
      header: 'Top Tracks',
      body: " See your top eight tracks from on Spotify. Change the duration of the results with the last week, last month, or last year."
     },
     {
      id:"3",
      header: 'More',
      body: "View your most recent tracks, get reccomendations based on your current listening, and see your current playlists."
     }

  ]

  return (
  <>
    <main className="relative">
      <hero id="hero" className="w-full h-screen">
        <AuroraHero />
      </hero>
      <section className="flex flex-col justify-center items-center py-60 w-full relative z-20">
        <h2 className="lg:text-6xl text-5xl pb-32 font-bold px-10 text-center">Get Your Top 8</h2>
        <div className="flex flex-wrap justify-center gap-4"> 
        {cards.map((card) =>(
          <Card  key={card.id} prop={card} />
        ))
      }
      </div>
      </section>
      <article className="flex flex-col items-center justify-center py-64 lg:px-64 px-10 " >
        <h3 className="lg:text-6xl text-5xl pb-8 font-bold px-8">About</h3>
        <div className="flex flex-wrap items-center justify-center w-full">
          <p className=" w-1/2 flex-grow pt-20 px-5"> <span className="font-bold text-lg">OctaGroove</span> is an online dashboard designed to be used with your Spotify app to enhance your listening experience. You will have an <span className="font-bold text-lg">enhanced UI experience</span> that allows you to view your top eight items. <span className="font-bold text-lg">Your data is never stored on our servers and is never shared with anyone.</span> Simply sign in to your Spotify account to get started.<br /> <span className="font-bold text-lg"> Please insure cookies are accepted for this app to work properly.</span></p>
          <Image
          src={ScreenShot}
          alt="dashboard"
          width={350}
          className=" rounded-2xl pt-24"
          />
        </div>
      </article>
    </main>
  </>
  );
}
