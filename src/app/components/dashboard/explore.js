'use client'
import { useState } from "react"
import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";
import Loading from "../UI/loading"
import Trends from "../../components/dashboard/trends"

function Recents(){

    const {data, isLoading, isValidating} = useSWR('/api/data/recents', fetcher, {
        focusThrottleInterval: 120000,
        revalidateIfStale:false,
        revalidateOnFocus: false,
        refreshInterval: 100000,
    })
    if(isLoading || isValidating ){
        return (
            <div className="h-80 flex items-center justify-center font-Inter text-2xl"> <p className="animate-pulse duration-500 font-semibold">Loading </p><Loading /></div>
        )
    }
    if(data) {
        function Artists(item) {
            const artistsNames = item.track.artists.map((artist)=>(artist.name))
            const artistList = artistsNames.join(', ')
            return artistList
        }

        return (
            <div id="recents" className="overflow-y-scroll h-80 py-2 px-1 rounded-2xl">
                <ul className="capitalize leading-none flex flex-wrap justify-center items-center gap-1">
                    {data.items.map((item, index)=>(
                        <li key={index} className=" text-xs mt-1">
                            <div className="h-24 w-24 overflow-hidden relative hover:scale-110 duration-500"> 
                                <img src={item.track.album.images[1].url} className="h-24 w-24 rounded-2xl border border-[#00000040]" /> 
                                <div className="absolute top-0 scale-50 opacity-0 left-0 rounded-2xl w-24 h-24 bg-[#00000040] backdrop-blur-sm border border-[#ffffff35] flex flex-col justify-center items-center translate-y-0 duration-500 p-0.5 cursor-pointer z-50 hover:opacity-100 hover:scale-100">
                                    <a href={item.track.uri} target="_blank" className=" font-bold leading-none hover:underline pb-0.5 max-h-12 overflow-hidden">{item.track.name}</a>
                                    <a className="text-xs font-extralight leading-none overflow-hidden pb-0.5">{Artists(item)}</a>
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

function Reccomend() {
    const {data, isLoading, isValidating} = useSWR('/api/data/reccomend', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        focusThrottleInterval: 1000000,
    })
    if(isLoading || isValidating) {
        return(<div className="h-80 flex justify-center items-center font-Inter text-2xl"><p className=" animate-pulse duration-500 font-semibold">Loading </p> <Loading /> </div>)
    }

    if(data) {

        function Artists(item) {
            const artistsNames = item.artists.map((artist)=>(artist.name))
            const artistList = artistsNames.join(', ')
            return artistList
        }

        return (
            <div id="recents" className=" overflow-y-scroll h-80 py-2 px-1">
                <ul className="capitalize leading-none flex flex-wrap justify-center items-center gap-1">
                    {data.tracks.map((item)=>(
                        <li key={item.id} className=" text-xs mt-1">
                            <div className="h-24 w-24 overflow-hidden relative hover:scale-110 duration-500"> 
                                <img src={item.album.images[1].url} className="h-24 w-24 rounded-2xl border border-[#00000040]" /> 
                                <div className="absolute top-0 scale-50 opacity-0 left-0 rounded-2xl w-24 h-24 bg-[#00000040] backdrop-blur-sm border border-[#ffffff35] flex flex-col justify-center items-center translate-y-0 duration-500 p-0.5 cursor-pointer z-50 hover:opacity-100 hover:scale-100">
                                    <a href={item.uri} target="_blank" className=" font-bold leading-none hover:underline pb-0.5 max-h-12 overflow-hidden">{item.name}</a>
                                    <a className="text-xs font-extralight leading-none overflow-hidden pb-0.5">{Artists(item)}</a>
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
    const trendsActive = toggle == 'trends'
    
    return (
        <div id="exploreCard" className="rounded-2xl font-Inter text-center">
                <div className="">
                <h5 className="text-3xl font-bold">Explore</h5>
                </div>
                <div className="inline-flex gap-1 pb-4"> 
                    <button onClick={()=> setToggle('recents')} id="recents" className={recentActive? 'font-bold underline' : 'hover:font-extralight duration-200'}>Recents</button>
                    <button onClick={()=> setToggle('reccomend')} id="reccomend" className={reccomendAvtive? 'font-semibold underline' : 'hover:font-extralight duration-200'}>Reccomended</button>
                    <button onClick={()=> setToggle('trends')} id="recents" className={trendsActive? 'font-bold underline' : 'hover:font-extralight duration-200'}>Trends</button>

            </div >
                <div className="rounded-2xl border border-[#ffffff25] bg-[#00000080] py-6 flex items-center justify-center">
                        { toggle === "recents" && <Recents />}
                        { toggle ==="reccomend" && <Reccomend />}
                        { toggle === "trends" && <Trends />}
                </div>
            </div>
    )
}