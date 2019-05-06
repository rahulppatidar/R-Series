import React, { Component } from 'react';
import {apiBaseUrl} from '../../../_helper/appConfig';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import './catgrid.css';

class AudioCatsGrid extends Component {

  render() {
    const {cats, catType} = this.props;
    return (
      <div className="cat-grid">
      <Container>
          <Row>
          {cats && cats.map(cat=> (
        <Col sm={{size:6}} md={{size:4}} lg={{size:3}} key={cat.id}>
        <Link to={`${process.env.PUBLIC_URL}/audio/${catType}/${cat.id}`} >
          <div className="grid-singel-cat rp-play-icon rp-scale">
            <img className="grid-sigle-image w-100 shadow" src={apiBaseUrl+'/'+cat.image} alt={cat.title} /> 
            <div className="grid-sigle-cat-meta">
                <h4>{cat.title}</h4>
            </div>
          </div>
        </Link>                   
        </Col>
        ))} 
          </Row>
      </Container>
        
      </div>
    );
  }
}

export default AudioCatsGrid;
