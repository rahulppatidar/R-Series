import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {audioActions} from '../../_actions/audioActions';
import {apiBaseUrl} from '../../_helper/appConfig';
import './singleAudio.css';
import {playerActions} from '../../_actions/playerActions';
 
import AppAudioPlayer from '../../components/player/audioPlayer';
const createMarkup = (data) => {
  return {__html: data};
}

class SingleAudio extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playlist: null,
      playlistIsPlaying: false,
      currentSongIndex: 0
    }
    this.onLoad=this.onLoad.bind(this);    
       
  }

  componentDidMount(){
    const {catType, catId } = this.props;   
    this.props.getAudio(catType,catId)     
  }

  onLoad(){
    setTimeout(()=>{
      const {audios} = this.props;
      let playlist = audios.map( audio => apiBaseUrl+'/'+audio.audio_link ); 
      let playlistIsPlaying=true;
      let currentSongIndex=0; 
      this.setState({playlist,playlistIsPlaying,currentSongIndex});
      const currentSrc=apiBaseUrl+'/'+audios[0].audio_link;
      this.props.playThis(currentSongIndex,currentSrc);
    },1000);
    
  }

  playThis(songIndex,audio){    
    let currentSongIndex=songIndex;    
    this.setState({currentSongIndex});
    const currentSrc=apiBaseUrl+'/'+audio.audio_link;
    this.props.playThis(songIndex,currentSrc);
  }

  render() {
    const {audios, audio_banner} = this.props;
    console.log('Audios',audios);
    console.log('audio_banner',audio_banner);
    console.log('currentSrc',this.props.currentSrc);
    return (
      <div className="single-audio-page" onLoad={this.onLoad}>
      <Container>
         { audio_banner && <Row className="audio-banner">
           <Col md={{size:4}}>
            <div className="audio-banner-image">
              <img className="shadow w-100" src={apiBaseUrl+'/'+audio_banner.image} alt={audio_banner.title} />
            </div>
           </Col>
           <Col md={{size:8}}>
              <div className="audio-banner-meta">
                <h4 className="audio-banner-title">{audio_banner.title}</h4>
                <p className="audio-banner-detail" dangerouslySetInnerHTML={createMarkup(audio_banner.details)}></p>
              </div>            
           </Col>
         </Row> }

         <Row>
           <Col>
            <div className="audio-playlist">
              {audios.map((audio,index)=>(             
              <Row className={'single-audio '+ ( (this.props.currentSrc == apiBaseUrl+'/'+audio.audio_link) && 'playingIt') } key={audio.id} onClick={this.playThis.bind(this,index,audio)}
              >
                <Col sm={{size:2}} className="single-audio-image"><img src={apiBaseUrl+'/'+audio.profile_image} alt={audio.title} /></Col>
                <Col sm={{size:5}} className="single-audio-title rp-truncate-single">{audio.title}</Col>                
                <Col sm={{size:5}} className="single-audio-detial rp-truncate-single" dangerouslySetInnerHTML={createMarkup(audio.details)}></Col>                              
              </Row>             
              ))}
            </div>
           </Col>
         </Row>

         </Container>
         {this.props.playing && <AppAudioPlayer 
           playlist={this.state.playlist}           
           playlistIsPlaying={this.state.playlistIsPlaying}           
           currentSongIndex={this.state.currentSongIndex}
        />}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { audios, audio_banner } = state.audioReducer;
  const {
    loading,
    playing,
    pause,
    playingTo,
    currentIndex,
    currentSrc } = state.playerReducer;
  return {
      audios,
      audio_banner,
      playing,
      playingTo,
      currentSrc
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAudio:(catType,catId)=>{
      dispatch(audioActions.getAudioPostId(catType,catId))
    },
    playThis:(currentSongIndex,currentSrc)=>{
      dispatch(playerActions.play(currentSongIndex,currentSrc))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAudio);

