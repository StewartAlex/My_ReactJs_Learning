import React from "react";

// import videos_List from "../data/thumbnail";

// props and you can use props destructuring dynamically

// function Vedio(props) {
function Vedio({ title, id, channel, views, time, verified, children}) {
  // const topic = "This is my first app "
  // const bg = "dark"
  // console.log(props)

  // const verified = false;
  // let channelJsx; 

  // if else is too long we have to other method like ternary operators------------
  // if(verified){
  //   channelJsx = <div className="channel">{channel} ✅</div>
  // }
  // else{
  //   channelJsx = <div className="channel">{channel}</div>
  // }
  return (
    <>

      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/360/180?random=${id}`}
            alt="Katherine Johnson" />
          {/* <div className={bg} style={{backgroundColor: ''}}>{props.title}- Tutorial</div> */}
          {/* <div className={bg} style={{backgroundColor:bgColor}}>{title}- Tutorial</div> */}
          {/* try to make the dynamicall components */}

          <div className="title">{title}</div>

          {/* this is called condition rendering */}

          {/* this method is like if else but it is easy to use */}

          {/* {verified ? <div className="channel">{channel} ✅</div>
          :<div className="channel">{channel}</div>} */}

          {/* condition just for tick */}
          <div className="channel">{channel} {verified ? '✅' : null} </div>

          <div className="views">
            {views} views <span>-</span> {time}
          </div>
          <div> {children}</div>
        </div>
      </div>
    </>
  );
}
export default Vedio;