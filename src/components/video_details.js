import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <h2>Loading...</h2>
  }

  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;

  const title = video.snippet.title;
  const description = video.snippet.description;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <h4>{title}</h4>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
