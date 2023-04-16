import React from 'react'
import '../App.css';
import Vedio from './Vedio'
// import videos_List from './data'
import Play from './Play'
// import video from '.data/data.js'
// import AddVideo from './AddVideo';
// import videosDB from './data/data.js';


// Now we have to pass the props in down word direction
export default function VideoDataRef({videos_List}) {
  return (
    <>
        {
            // Collection.map(iterator)
          // it iterate one by one value from the collection

          videos_List.map(video =>
            <Vedio
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
              verified={video.verified}
            >
              <div style={{ clear: "both" }}>
                <Play
                  onPlay={() => console.log("Play Song")}
                  onPause={() => console.log("Pause Song")}>
                  Play Now
                </Play>
                {/* <Play onClick={()=>console.log("Pause the Song")}>Pause</Play> */}
              </div>

            </Vedio>
          )
        }
  </>
  
  )
}
