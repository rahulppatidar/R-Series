import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {videoActions} from '../../_actions/videoActions';
import {apiBaseUrl} from '../../_helper/appConfig';
import './singleVideo.css';

const createMarkup = (data) => {
  return {__html: data};
}


class VideoComponent extends Component{
    render(){
      return (
        <div>
          <video 
            controls             
            controlsList="nodownload"
            src={this.props.src} width="100%" height="100%"/>
            <div className="current-vid-meta">
                <h4>{this.props.video.title}</h4>                
                <div className="vid-detail" dangerouslySetInnerHTML={createMarkup(this.props.video.details )} />
            </div>
        </div>
      );
    }
  };

  class AlbumBanner extends Component{
    render(){
        const {album} = this.props;
      return (
        <div className="ralbum-banner">
            <img className="w-100 h-100 rp-round shadow" src={apiBaseUrl+'/'+album.image} alt={album.title} />
            <div className="ralbum-detail">
                <h4>{album.title}</h4>
                <div className="rabout-album" dangerouslySetInnerHTML={createMarkup(album.details)}></div>
            </div>
        </div>
      );
    }
  };




class SingleVideo extends Component {

    constructor(props){
        super(props);      
        this.state={   
          videoSrc:null,
          currentVideo:null
        };        
    }

    componentWillMount(){
        const {catType, catId } = this.props;   
        this.props.getVideo(catType,catId)     
      }

    playThisVideo(video){
        console.log("Play",video);
        const videoSrc=apiBaseUrl+"/"+video.video_link;
        const currentVideo = video;
        this.setState({videoSrc,currentVideo});
      } 
    
    
      handleNext(){
        let currentVideo=this.state.currentVideo;
        const currentIndex=this.props.videos.indexOf(currentVideo);
        const totalVid=this.props.videos.length;
        let nextIndex=0;
        if(currentIndex<totalVid-1){
          nextIndex=currentIndex+1;
        }
        let nextVideo = this.props.videos[nextIndex];    
        const videoSrc = apiBaseUrl+"/"+nextVideo.video_link;
        currentVideo=nextVideo;
        this.setState({videoSrc,currentVideo});    
      }
    
      handlePrev(){
        let currentVideo=this.state.currentVideo;
        const currentIndex=this.props.videos.indexOf(currentVideo);
        const totalVid=this.props.videos.length;
        let nextIndex=0;
        if(currentIndex===0){
          nextIndex=totalVid-1;
        }
        let nextVideo = this.props.videos[nextIndex];    
        const videoSrc = apiBaseUrl+"/"+nextVideo.video_link;
        currentVideo=nextVideo;
        this.setState({videoSrc,currentVideo});    
      }

  render() {
    const {videos, video_banner} = this.props;
    console.log('Videos',videos);
    console.log('video_banner',video_banner);
    return (
      <div className="single-audio-page">
      <Container>
      { <Row>
            { this.state.currentVideo === null 
            ?  <Col sm={{size:12}} className="album-banner">
                  { video_banner && <AlbumBanner album={video_banner} /> }
                </Col>  
            :  this.state.videoSrc!=null && 
                <Col sm={{size:12}} className="videoComponent">
                    <VideoComponent className="shdow" src={this.state.videoSrc} video={this.state.currentVideo}/>
                    <span className="prev-vid" onClick={this.handlePrev.bind(this,)}><i className="fas fa-chevron-circle-left"></i></span>
                    <span className="next-vid" onClick={this.handleNext.bind(this,)}><i className="fas fa-chevron-circle-right"></i></span>  
                </Col>
            }                            
        </Row>
    }

         <Row>
           <Col>
            <div className="video-playlist">
            <Row>
              {videos.map(video=>(             
              <Col sm={{size:6}} md={{size:4}} lg={{size:3}} className="" key={video.id} onClick={this.playThisVideo.bind(this,video)}>
                <div className="single-video rp-play-icon rp-scale rp-round">
                <img className="single-video-image w-100 h-100 shadow rp-round" src={apiBaseUrl+'/'+video.profile_image} alt={video.title} />
                <div className="single-video-meta">
                    { this.state.currentVideo!=null && this.state.currentVideo.id===video.id 
                    ? <span className="play pause"><i className="far fa-pause-circle"></i></span>
                    : ''
                    }
                    <h4 className="single-video-title">{video.title}</h4>                    
                </div>
                </div>                                              
              </Col>             
              ))}
            </Row>
            </div>
           </Col>
         </Row>

         </Container>         
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { videos, video_banner } = state.videoReducer;
  return {
      videos,
      video_banner
  };
}

const mapDispatchToProps = dispatch => {
  return {    
    getVideo:(catType,catId)=>{
      dispatch(videoActions.getVideoPostId(catType,catId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);

