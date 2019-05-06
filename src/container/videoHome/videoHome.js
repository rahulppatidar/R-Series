import React, { Component } from 'react';
import { connect } from 'react-redux';
import {videoActions} from '../../_actions/videoActions';
import RPSlider from '../../components/slider/slider';


class VideoHome extends Component {

  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(videoActions.getVideoCat())
      .then(
        res => {
          console.log("Audio Cats:",res);
        }
      );
      dispatch(videoActions.getVideoTypes());
      dispatch(videoActions.getVideoAlbums());
  }
  render() {
    const {videoCats, videoAlbums, videoTypes} = this.props;
    console.log("Render Audio Cats", videoCats);
    console.log("Render Audio types", videoTypes);
    console.log("Render Audio albums", videoAlbums);
    return (
      <div className="video-home">
        {videoCats && <RPSlider title={'Category'} cats={videoCats} catType={'category'} mediaType={'video'} />}
        {videoTypes && <RPSlider title={'Type'} cats={videoTypes} catType={'type'} mediaType={'video'}/>}
        {videoAlbums && <RPSlider title={'Album'} cats={videoAlbums} catType={'album'} mediaType={'video'}/>}
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


export default connect(mapStateToProps)(VideoHome);
