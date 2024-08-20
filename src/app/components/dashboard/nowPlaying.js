'use client'

import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";

export function CurrentlyPlaying() {

    const {data, error, isLoading} = useSWR('/api/data/currently_playing', fetcher, {refreshInterval: 5000});

    if(error){return (<div id="currentlyPlaying" > <p> Not Streaming </p></div>)};
    if(isLoading){return (<div id="currentlyPlaying"><p> Loading...</p></div>)};
    if(data){
        if(data.item) {
            const artistsNames = data.item.artists.map((artist)=>(artist.name))
            const artistList = artistsNames.join(', ')

        return (
        <div id="currentlyPlaying" className=" flex flex-col items-center justify-center">
            <img className="h-72 w-80 rounded-md" src={data.item.album.images[0].url} />
                <div className="inline-flex items-center justify-between w-full mt-1 px-1">
                    <div className="max-w-64">
                        <a href={data.item.external_urls.spotify} target="_blank" className="w-full font-bold h-min py-1 leading-none hover:underline duration-200">{data.item.name}</a>
                        <p className="w-full leading-none font-light">{artistList}</p>
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

