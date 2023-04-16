import React, { useState } from 'react'

export default function Play({ children, onPlay, onPause }) {

    
    
    // let playing = false;   the is not preferable method

    const [playing, setPlaying] = useState(false);

    function handleClick(e) {

        // {/* when you are new developer you will get fade up by onClick function thats way you have be smart and stop propagation in whole website */ }
        // // console.log(e)
        
        // is ka ye hai ke jab project bara hone lage ga to boht sari cheeze ek waqt me click hone lage gi to is wajah se aap pehle se hi stopPropagation method laga de is se under Control me cheez hojaye gi Event Objects se
        
        // this is called Event Bubbling

        e.stopPropagation();
        e.preventDefault();

        if (playing) {
            onPause()
        } else {
            onPlay()
        }
        // playing = !playing;
        setPlaying(!playing);
    }

    return (
        <button className='Play_btn' onClick={handleClick}>{children}{playing ? " >" : " ||"}</button>
    )
}
