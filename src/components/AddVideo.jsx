import React, { useState } from 'react'
import Vedio from './Vedio';
// import './App.css';

const video_State = {
    channel: 'Alex Tech Prenuar',
    title: '',
    views: '',
    time: '1 year Ago',
    verified: true,
  }

export default function AddVideo({addVideos}) {

    const [videos_List, setVideos_List] = useState(video_State)

    function handleSubmit(e){
        e.preventDefault();

        // Now we are getting videos data from parent
        addVideos(videos_List)
        // console.log(videos_List)

        setVideos_List(video_State)
    }
    function handleChange(e){
        // e.stopPropagation();
        e.preventDefault();
        // this is DOM 
        console.log(e.target.name, e.target.value)
        setVideos_List({...videos_List, 
            [e.target.name] : e.target.value,
            })
            // console.log(videos_List)
    }
    return (
        <form>

            {/* jo input per hota hai wo onChange() method hota hai */}
            <input type="text" 
            name="title" 
            placeholder='title' 
            value={videos_List.title}
            onChange={handleChange}/>

            <input type="text" 
            name="views" 
            placeholder='views' 
            value={videos_List.views}
            onChange={handleChange}/>
           
           {/* this is only from testing purpose */}

            {/* {videos_List.title}
            {videos_List.views} */}

            {/* jo button per hota hai wo onSubmit() method hota hai */}
            <button className='Play_btn' onClick={handleSubmit}
                // onClick={(handleSubmit) => {
                // //     setVideos_List([
                // //         ...videos_List, {
                // //         id: videos_List.length + 1,
                // //         title: 'Zack Snyder part 2 full Movie hindi dubbed',
                // //         channel: 'Alex Tech Prenuar',
                // //         views: '100M',
                // //         time: '1 year Ago',
                // //         verified: true,
                // //     }]);

                // }}
                >Add Vedio </button>

        </form>
    )
}
