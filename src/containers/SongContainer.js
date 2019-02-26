import React from 'react';
import Request from '../helpers/request';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';
import '../styles/songContainer.css'

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
      currentSong:null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data}))
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs.feed.entry[index];
    this.setState({currentSong: selectedSong})
  }

  render(){
    if(this.state.songs.length === 0){
      return <p>Loading Data...</p>
    }

    return (
      <div className="song-container" >
      <h2>Song Container</h2>
      <SongSelector songs ={this.state.songs}
      onSongSelected={this.handleSongSelected}/>
      <SongDetail song={this.state.currentSong}/>
      </div>
    )
  }

}

export default SongContainer;
