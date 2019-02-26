import React from 'react';
import '../styles/songContainer.css'

const SongDetail = (props) => {
  if (!props.song){
    return <p>Waiting for selection...</p>
  }

  return (
    <div className="song-detail">
    <h3>Title: {props.song['im:name'].label}</h3>
    <h4>Artist: {props.song['im:artist'].label}</h4>
    <p><img src={props.song['im:image'][2].label}/></p>
    <p><audio controls src={props.song.link[1].attributes.href}></audio></p>

    </div>
  )
}

export default SongDetail;
