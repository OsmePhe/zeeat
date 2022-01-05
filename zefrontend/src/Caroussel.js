import logo from './logo.svg';
import React, { Component } from 'react'
import Slider from "react-slick";
import ItemProjectEntrepreneur from './ItemProjectEntrepreneur'
import './App.css';


class Caroussel extends Component {
    render() {
      {
        var data = this.props.data, url = this.props.url;
        var newsTemplate;
        var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
      if (data.length > 0) {
          newsTemplate = data.map(function(item, index) {
            return (
              <div key={index}>
                  <ItemProjectEntrepreneur data={item} url={url} />
              </div>
            )
          })
      }else{
          newsTemplate = <p>Please add some cards</p>
      }
          return (
              <div className='news'>
                  <Slider {...settings}>{newsTemplate}</Slider>
                  <strong className={'news__count ' + (data.length > 0 ? '':'none') }>
                      Total: {data.length}
                  </strong>
              </div>
          );
      }
    }
  }

export default Caroussel;
