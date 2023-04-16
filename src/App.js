// import logo from './logo.svg';
import './App.css';
// import Vedio from './components/Vedio';
// import vedios from './data/data.js';
// import Play from './components/Play.jsx';
import Counter from './components/Counter.jsx';
import videosDB from './data/data.js';
import AddVideo from './components/AddVideo';
import VideoDataRef from './components/VideoDataRef';
import { useState } from 'react';
// import Vedio from "./components/Vedio.css"
// import thumb from './components/thumb.js';

function App() {

  const [videos_List, setVideos_List] = useState(videosDB)
  // you can try this best prefarable method also shortcut
  // const videos_List = [{
  //   id:0,
  //   title: 'Zack Snyder part 2 full Movie hindi dubbed',
  //   channel: 'Alex Tech Prenuar',
  //   views: '100M',
  //   time: '1 year Ago',
  //   verified: true,
  // },
  // {
  //   id:1,
  //   title: 'Marvels 2nd Season Iron Man Power of Ghost part 9 hindi dubbed',
  //   channel: 'Stewart Tech Prenuar',
  //   views: '150M',
  //   time: '2 year Ago',
  //   verified: true,
  // },
  // {
  //   id:2,
  //   title: 'DC 1st Season Super Man Power of Ghost part 2 hindi dubbed',
  //   channel: 'Astle Tech',
  //   views: '10M',
  //   time: '3.5 year Ago',
  //   verified: true,
  // },
  // {
  //   id:3,
  //   title: 'Marvels River Man Power of Ghost part 3 hindi dubbed',
  //   channel: 'Alex Tech Prenuar',
  //   views: '90M',
  //   time: '6 Month Ago',
  //   verified: true,
  // },
  // {
  //   id:4,
  //   title: 'Netflix 3rd Season Power of Ghost Rider part 4 hindi dubbed',
  //   channel: 'Alex Tech Prenuar',
  //   views: '100M',
  //   time: '1 year Ago',
  //   verified: true,
  // },
  // ]

  // to video lene ke liye sab se pehle hume child se parent to dena hai then parent se child ko dege 
  // state lifting on upward 

  function addVideos(Vedio){

    // sabse pehle humne videos_List ko expand kia because uske saare object hamare pass aa gye hai 
    setVideos_List([...videos_List, 

      // phir Vedio ki properties ko spread karke id ko liye
      {...Vedio, id: videos_List.length+1}
    ])
  }

  return (
    <>
      {/* when you are new developer you will get fade up by onClick function thats way you have be smart and stop propagation in whole website */}

      <div className='App' onClick={() => console.log("You are in App")}>


        <h1>Videos Application</h1>

        <AddVideo addVideos={addVideos}></AddVideo>

        <button onClick={() => {
          setVideos_List([...videos_List, {
            id: videos_List.length + 1,
            title: 'Zack Snyder part 2 full Movie hindi dubbed',
            channel: 'Alex Tech Prenuar',
            views: '100M',
            time: '1 year Ago',
            verified: true,
          }]);
        }}>Add Vedio</button>
        
        {/* List is best dynamic method for rendering the list */}

        {/* // you can try this best prefarable method also shortcut */}
        {/* <Vedio {...obj}></Vedio>

    <Vedio title="This was the best Disney Picture" channel="Technical Gyan" views="100k" time="2 Years Ago"></Vedio>
    <Vedio title="How to have GF for Date on Valentine's" channel="Technical Sagar" verified={true} views="250k" time="2 Years Ago"></Vedio>
    <Vedio title="How to Hack Android & IOS version mobile" channel="Fact Techz" views="250k" time="2 Years Ago"></Vedio>
    <Vedio title="How to have GF for Date on Valentine's" channel="Technical Sagar" verified={true} views="250k" time="2 Years Ago"></Vedio> */}


      <VideoDataRef videos_List={videos_List}></VideoDataRef>
      </div>


      <Counter style={{ clear: "both" }}></Counter>

    </>

  );
}

export default App;
