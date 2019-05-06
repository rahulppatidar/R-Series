import React, { Component } from 'react'
import {connect} from 'react-redux';
import ReactMediaVisualizer from 'react-media-visualizer'
import './audioPlayer.css';
import {playerActions} from '../../_actions/playerActions';
class AppAudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      theme: 'soundcloud'
    }
    this.receiveStateUpdates = this.receiveStateUpdates.bind(this)
  }  

  render() {
    const {playlist} = this.props;
    console.log('playlist',playlist);
    console.log("Current Index",this.props.currentIndex);
    return (
      <React.Fragment>     
        <ReactMediaVisualizer
          playlist={this.props.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.props.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.props.currentIndex} />
      </React.Fragment>
    )
  }

  receiveStateUpdates(payload) {
    console.log("receiveStateUpdates",payload);
    if(payload.currentSongIndex){
      const currentSongSrc=this.props.playlist[payload.currentSongIndex];
      this.props.dispatch(playerActions.play(payload.currentSongIndex,currentSongSrc))
    }    
    this.setState(payload);
  }

  
}

function mapStateToProps(state){
    const {
      loading,
      playing,
      pause,
      playingTo,
      currentIndex,
      currentSrc } = state.playerReducer;

    return{
      loading,
      playing,
      pause,
      playingTo,
      currentIndex,
      currentSrc

    }
}

export default  connect(mapStateToProps)(AppAudioPlayer);