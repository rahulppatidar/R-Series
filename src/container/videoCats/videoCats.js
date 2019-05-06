import React, { Component } from 'react';
import { connect } from 'react-redux';
import {videoActions} from '../../_actions/videoActions';
import VideoCatsGrid from './videoCatGrid/videoCatGrid';
class VideoCats extends Component {

  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(videoActions.getVideoCat());
    dispatch(videoActions.getVideoTypes());
    dispatch(videoActions.getVideoAlbums());
  }
  render() {
    const {videoCats, videoTypes, videoAlbums, catType} = this.props;

    return (
      <div className="video-cats">
        {videoCats && catType==='category' && <VideoCatsGrid catType={'category'} cats={videoCats}/> }
        {videoTypes && catType==='type' && <VideoCatsGrid catType={'type'} cats={videoTypes}/>}
        {videoAlbums && catType==='album' && <VideoCatsGrid catType={'album'} cats={videoAlbums}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { videoCats, videoAlbums, videoTypes } = state.videoReducer;
  return {
      videoCats,
      videoAlbums,
      videoTypes
  };
}


export default connect(mapStateToProps)(VideoCats);
