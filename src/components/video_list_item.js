import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //console.log(video);
  //const video = props.video;

  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
