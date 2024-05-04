

export default function Home() {
  return (
   <main className="mt-32 h-96 flex justify-center">
      <div className="flex justify-center items-center flex-wrap p-10 border w-10/12"> 
        <h1 className="text-4xl font-bold w-full text-center">Welcome To Octogroove</h1>
        <p className="leading-5 "> Octogroove is a web app designed to maximize your Spotify experince!View your top eight tracks and artists. See and save your Spotify weekly playlists. Create your own playlists in our dashboard. Click on the button below to log in to you Spotify to get started!  </p>
        <h2 className="w-full text-center font-bold text-2xl"> Login to Spotify</h2>
        <button className="py-3 px-5 bg-green-500 rounded-2xl text-md w-24 font-bold">Login</button>
      </div>
   </main>
  );
}
