import React, { Component } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import './App.css';
import './Etablissement.css';
import LocationSearchInput from './PlaceAutocomplete';
import ItemEtablissement from './ItemEtablissement';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Etablissement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse: this.props.history.location.state.adresse,
      dataEtablissement: this.props.history.location.state.infos,
      objFrais: this.props.history.location.state.frais
    }
    this.convertRad = this.convertRad.bind(this);
    this.distance = this.distance.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log("Test...")
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  convertRad(input){
    return (Math.PI * input)/180;
  };
  distance(lat_b_degre, lon_b_degre){
    const R = 6378000 //Rayon de la terre en mètre
    var d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b_degre) * Math.sin(this.convertRad(this.state.latitude)) + Math.cos(lon_b_degre - this.state.longitude) * Math.cos(lat_b_degre) * Math.cos(this.convertRad(this.state.latitude))))
    if(d<3000){
      console.log("Les frais seront de ...fcfa")
    }else{
      console.log("Too far")
    }
    return d;
  };
  render() {
    const {dataEtablissement,objFrais,adresse} = this.state
    return (
      <div className="div_restaurant">
        <Headers profil={"visiteur"} dataClient={undefined} handleOnClick={this.handleOnClick} where={""}/>
        <div className="cntSearchBody">
        <div className="wrapSearch">
        <div className="divSearch">
          <LocationSearchInput notFirstSearch={this.state.adresse}/>
        </div>
        </div>
        </div> 
        <ItemEtablissement dataEtablissement={dataEtablissement} objFrais={objFrais} adresse={adresse}/> 
        <Footers profil={"visiteur"}/>
      </div>
    )
  }
}

export default Etablissement;
