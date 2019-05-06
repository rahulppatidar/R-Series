import React, { Component } from 'react';
import { connect } from 'react-redux';
import {audioActions} from '../../_actions/audioActions';
import AudioCatsGrid from './catgrid/catgrid';
class AudioCats extends Component {

  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(audioActions.getAudioCat())
      .then(
        res => {
          console.log("Audio Cats:",res);
        }
      );
      dispatch(audioActions.getAudioTypes());
      dispatch(audioActions.getAudioAlbums());
  }
  render() {
    const {cats, types, albums, catType} = this.props;
    console.log("Render Audio Cats", cats);
    console.log("Render Audio types", types);
    console.log("Render Audio albums", albums);
    return (
      <div className="audio-cats">
        {cats && catType==='category' && <AudioCatsGrid catType={'category'} cats={cats}/> }
        {types && catType==='type' && <AudioCatsGrid catType={'type'} cats={types}/>}
        {albums && catType==='album' && <AudioCatsGrid catType={'album'} cats={albums}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cats, albums, types } = state.audioReducer;
  return {
      cats,
      albums,
      types
  };
}


export default connect(mapStateToProps)(AudioCats);
