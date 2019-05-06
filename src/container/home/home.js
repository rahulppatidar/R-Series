import React, { Component } from 'react';
import { connect } from 'react-redux';
import {audioActions} from '../../_actions/audioActions';
import RPSlider from '../../components/slider/slider';


class Home extends Component {

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
    const {cats, types, albums} = this.props;
    console.log("Render Audio Cats", cats);
    console.log("Render Audio types", types);
    console.log("Render Audio albums", albums);
    return (
      <div className="home">
        {cats && <RPSlider title={'Category'} cats={cats} catType={'category'} mediaType={'audio'} />}
        {types && <RPSlider title={'Type'} cats={types} catType={'type'} mediaType={'audio'} />}
        {albums && <RPSlider title={'Album'} cats={albums} catType={'album'} mediaType={'audio'} />}
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


export default connect(mapStateToProps)(Home);
