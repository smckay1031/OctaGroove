'use client'

import { useState, useEffect, use } from "react";
import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";

export function CurrentlyPlaying() {

    const {data, error, isLoading} = useSWR('/api/data/currently_playing', fetcher, {refreshInterval: 5000});

    if(error){return (<div id="currentlyPlaying" > <p> Not Streaming </p></div>)};
    if(isLoading){return (<div id="currentlyPlaying"><p> Loading...</p></div>)};
    if(data){
        return (<div id="currentlyPlaying" className=" flex flex-col items-center justify-center">
            <img className="h-72 w-72 rounded-md" src={data.item.album.images[0].url} />
            <p className="w-full px-5 font-bold h-min pt-2">{data.item.name}</p>
            <p className="w-full px-5 leading-none">{data.item.artists[0].name}</p>
            </div>

        )
    }
    return (<div id="currentlyPlaying" > <p> Not Streaming </p></div>);

    }   

