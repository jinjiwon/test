import './App.css';
import React from 'react';

// npm install react-youtube
import YouTube from 'react-youtube';

function YoutubeIframeAPI({videoId}) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts}/>
}

function App() {

  const videoId = 'aWXy974QLCk';

  return (
    <div className="App">
      <YoutubeIframeAPI videoId={videoId}/>
    </div>
  );
}

export default App;