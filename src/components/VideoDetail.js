import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
      return <div>..Loading</div>
  }

  const videoSrc = video.id.videoId;
  return(
      <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${videoSrc}`}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
      </div>
  )
}

export default VideoDetail;