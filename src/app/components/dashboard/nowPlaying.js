'use client'

import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";
import Loading from "../UI/loading";

export function CurrentlyPlaying() {

    const {data, error, isLoading} = useSWR('/api/data/currently_playing', fetcher, {refreshInterval: 10000, refreshWhenHidden: false});

    if(error){return (<div id="currentlyPlaying" > <p className="font-Inter font-bold lg:flex hidden "> Not Streaming </p></div>)};
    if(isLoading){return (<div id="currentlyPlaying" className=" "> <Loading /></div>)};
    if(data){
        if(data.item) { 
            const artistsNames = data.item.artists.map((artist)=>(artist.name))
            const artistList = artistsNames.join(', ')

        return (
        <div id="currentlyPlaying, hideMobile" className=" overflow-y-clip">
            <img className="h-72 w-80 rounded-md" src={data.item.album.images[0].url} />
                <div className="inline-flex items-center justify-between w-full mt-4 px-1">
                    <div className="lg:max-w-64">
                        <a href={data.item.uri} target="_blank" className=" leading-none text-base font-bold overflow-y-clip hover:underline">{data.item.name}</a>
                        <p className="w-full leading-none font-extralight text-sm mt-2">{artistList}</p>
                    </div>
                </div>
            </div>
        )
    }  
    else {
        return (<div id="currentlyPlaying" > <p> Data Error </p></div>);
        }
    }   

}   

