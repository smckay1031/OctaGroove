import { Inter } from "next/font/google";
import { Monoton } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/nav/nav";
import Footer from "./components/footer/footer"


const inter = Inter({ 
  subsets: ["latin"], 
  display: 'swap', 
  variable: '--font-inter',
 });

 const mono = Monoton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
 })


export const metadata = {
  title: "OctaGroove Music App",
  description: "The Improved Spotify Dashboard",
  keywords: "Top Tracks, Top Artists, Top Eight, Top 8, Spotify Application, Spotify App, Spotify Dashboard, see your top artists, see your top tracks, see recent tracks, get reccomendations, Spotify, view streaming tracks, view playing track",
  verification: {
    google:'39WZfLvIjkr_Vt4QM8jMtJGrv2ijzSNFMdOTC2iQUkI',
  }
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen max-w-full overflow-x-hidden">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
