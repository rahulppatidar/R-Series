import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';
import {searchAction} from '../../../_actions/searchActions';
import {apiBaseUrl} from '../../../_helper/appConfig';
import {Link} from 'react-router-dom';
import './searchForm.css';
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult:null
    };
    
    this.handleKeyup=this.handleKeyup.bind(this);
  }

  handleKeyup(e){
    const searchKey=e.target.value;
    console.log("Searching for",searchKey);
    if(searchKey.trim().length>2){
        const {dispatch} = this.props;
        dispatch(searchAction(searchKey))
        .then(
            res=> {
                const searchResult=this.props.searchResult;
                console.log('search res',res);
                this.setState({searchResult});
            }
        )
    }
  }

  render() {
      const {searchResult} = this.state;
      console.log('state search result',searchResult);
    return (
      <div className="search-form">
        <form>
            <div className="search-input">
            <input type="text" name="search" onKeyUp={this.handleKeyup} className="form-control"
            placeholder="Search.." />            
            {this.props.loading && <i className="fas fa-spinner"></i>}

            </div>
                        { searchResult !=null && 
                <ListGroup className="search-list-group">
                    {searchResult.album && searchResult.album.map(album=>(
                        <ListGroupItem key={album.id}>                        
                        <Link to={`${process.env.PUBLIC_URL}/${ album.mediaType==='audio'?'audio':'video'}/album/${album.id}`} >
                            <div className="search-result-item">
                            <img src={apiBaseUrl+'/'+album.image} alt={album.title} />
                            <h5 className="search-result-title rp-truncate-single">R {album.title}</h5>
                            </div> 
                        </Link>                           
                        </ListGroupItem>
                    ))}

                    {searchResult.audio && searchResult.audio.map(audio=>(
                        <ListGroupItem key={audio.id}>
                        <Link to={`${process.env.PUBLIC_URL}/audio/album/${audio.cat_id}`} >
                            <div className="search-result-item">
                            <img src={apiBaseUrl+'/'+audio.profile_image} alt={audio.title} />
                            <h5 className="search-result-title rp-truncate-single">{audio.title}</h5>
                            </div>
                        </Link>    
                        </ListGroupItem>
                    ))} 

                    {searchResult.video && searchResult.video.map(video=>(
                        <ListGroupItem key={video.id}>
                        <Link to={`${process.env.PUBLIC_URL}/video/album/${video.cat_id}`} >
                        <div className="search-result-item">
                            <img src={apiBaseUrl+'/'+video.profile_image} alt={video.title} />
                            <h5 className="search-result-title rp-truncate-single">{video.title}</h5>
                        </div>
                        </Link>
                        </ListGroupItem>
                    ))}                    
                    
                </ListGroup>
            }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {searchResult,loading} = state.searchReducer;
    return{
        searchResult,
        loading
    }
}
export default connect(mapStateToProps)(SearchForm);