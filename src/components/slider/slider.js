import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './slider.css';
import {apiBaseUrl} from '../../_helper/appConfig';
import { Card, CardImg } from 'reactstrap';

export default class RPSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3            
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const {mediaType} = this.props;
    const toLink= mediaType === 'video' ? 'video' : 'audio';
    const toMoreLink= mediaType ==='video' ? 'video-cats' : 'audio-cats';
    return (
      <div className='slide-container'>
        <div className="slider-header">
          <h2 className="slide-title">{this.props.title}</h2>
          <span className="view-all-link-contianer">
            <Link to={`${process.env.PUBLIC_URL}/${toMoreLink}/${this.props.catType}`}>More</Link>
          </span>
        </div>        
        <Slider ref={c => (this.slider = c)} {...settings}>
          {  this.props.cats.slice(0,10).map( cat => (
            <div key={cat.id}>
            <article className="slider-card  normal">
              <Link to={`${process.env.PUBLIC_URL}/${toLink}/${this.props.catType}/${cat.id}`} >
                <div className="thumbnail-container">
                  <Card>
                    <CardImg top width="100%" src={apiBaseUrl+'/'+cat.image} alt={cat.title} />                
                  </Card>
                </div>
              </Link>
            </article>      

          </div>          
          ))         
          }
        </Slider>                 
            
        </div>
    );
  }
}