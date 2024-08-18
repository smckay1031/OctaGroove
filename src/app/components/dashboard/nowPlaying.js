'use client'

import { useState, useEffect } from "react";


async function getPlaying() {

    const response = await fetch("/api/data/currently_playing")
    const track = await response.json();
    console.log(track)
    return track;
}



export async function CurrentlyPlaying() {

    const [track, setTrack] = useState(null)

    useEffect(()=> {
        const i = setInterval(()=> {
            fetch("/api/data/currently_playing")
            .then((res)=> res.json())
            .then((data)=> setTrack(data))
            console.log(track)
        }, 6000);
        return clearInterval(i);
    }, [track])

    return (
        <div className="w-28 h-28">
            <h5>Now Playing</h5>
            <button onClick={getPlaying}> fetch</button>
            
        </div>
    )
}