import { NavBar } from "./components/nav/nav";

export default function Home() {
  return (
  <>
    <main className="h-screen flex justify-center">
       <div className="flex justify-center items-center flex-wrap p-10 border w-10/12"> 
         <h1 className="text-4xl font-bold w-full text-center">Welcome To Octagroove</h1>
         <p className="leading-5 "> Octagroove is a web app designed to maximize your Spotify experince!View your top eight tracks and artists. See and save your Spotify weekly playlists. Create your own playlists in our dashboard. Click on the button below to log in to you Spotify to get started!  </p>
         <h2 className="w-full text-center font-bold text-2xl"> Login to Spotify</h2>
       </div>
    </main>
  </>
  );
}
