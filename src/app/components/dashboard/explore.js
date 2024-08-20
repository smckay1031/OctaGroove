'use client'
import { useState, useEffect} from "react"


export default function ExploreCard() {

    const [toggle, setToggle] = useState('recents');

    const recentActive = toggle === 'recents'
    const reccomendAvtive = toggle == 'reccomend'
    
    return (
        <div id="exploreCard" className="rounded-3xl shadow-md backdrop-blur-md font-Inter p-5 text-center">
            <div>
                <h5 className="text-3xl font-bold pb-2">Explore</h5>
            </div>
            <div className="inline-flex gap-1 "> 
                <button onClick={()=> setToggle('recents')} id="recents" className={recentActive? 'font-bold underline' : 'hover:font-extralight'}>Recents</button>
                <button onClick={()=> setToggle('reccomend')} id="reccomend" className={reccomendAvtive? 'font-semibold underline' : 'hover:font-extralight'}>Reccomended</button>
            </div>
        </div>
    )
}