'use client'
import { useState, useEffect} from "react"
import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";


function Recents(){

    const {data} = useSWR('/api/data/recents', fetcher)

    if(data) {
        console.log(data)
        function Artists(item) {
            const artistsNames = item.track.artists.map((artist)=>(artist.name))
            const artistList = artistsNames.join(', ')
            return artistList
        }

        return (
            <div id="recents" className=" overflow-y-scroll h-96 mt-4 rounded-3xl border border-[#ffffff25] bg-[#00000060] py-2">
                <ul className="capitalize leading-none flex flex-wrap justify-center items-center gap-1">
                    {data.items.map((item)=>(
                        <li key={item.track.id} className=" text-xs my-1">
                            <div className="h-24 w-24 overflow-hidden relative"> 
                                <img src={item.track.album.images[1].url} className="h-24 w-24 rounded-2xl border border-[#00000040]" /> 
                                <div className="absolute hover:top-0 top-20 left-0 rounded-2xl w-24 h-24 bg-[#00000040] backdrop-blur-sm border border-[#ffffff35] flex flex-col justify-center items-center translate-y-0 duration-500 p-0.5 cursor-pointer z-50">
                                    <a href={item.track.uri} target="_blank" className=" font-bold leading-none hover:underline mb-0.5">{item.track.name}</a>
                                    <a className="text-xs font-extralight leading-none">{Artists(item)}</a>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}


export default function ExploreCard() {

    const [toggle, setToggle] = useState('recents');

    const recentActive = toggle === 'recents'
    const reccomendAvtive = toggle == 'reccomend'
    
    return (
        <div id="exploreCard" className="rounded-3xl shadow-md backdrop-blur-md font-Inter text-center px-2 bg-[#00000035] z-10">
            <div>
                <h5 className="text-3xl font-bold py-2">Explore</h5>
            </div>
            <div className="inline-flex gap-1 "> 
                <button onClick={()=> setToggle('recents')} id="recents" className={recentActive? 'font-bold underline' : 'hover:font-extralight duration-200'}>Recents</button>
                <button onClick={()=> setToggle('reccomend')} id="reccomend" className={reccomendAvtive? 'font-semibold underline' : 'hover:font-extralight duration-200'}>Reccomended</button>
            </div>
             { toggle === "recents" && <Recents />}
        </div>
    )
}