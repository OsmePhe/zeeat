import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {TiLocation} from "react-icons/ti";
import axios from "axios";
import { Redirect,Link } from 'react-router-dom';
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.notFirstSearch? this.props.notFirstSearch : "",
      latitude: null,
      longitude: null,
      results: null,
      objFrais:  []
    };
    this.getEtablissement = this.getEtablissement.bind(this);
    this.convertRad = this.convertRad.bind(this);
    this.distance = this.distance.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  }
  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    }
  }
  getEtablissement(event){
    if(this.state.address !== ""){
    axios.get("http://localhost:3000/etablissements",{
    },
    )
    .then(response => {
      if(!response.data.err){
      if (response.data) {
        var tampon = [], funcTampon = this.distance;
        response.data.map(function(item, index){
          tampon.push(funcTampon(item.lat_etablissement, item.lng_etablissement));
        })
        this.setState({objFrais: tampon});
        this.setState({dataEtablissements: response.data});
        this.setState({redirect: true});
      }
    }else{
      document.getElementById("error_container_search").className = "errorContainerLog";
      document.getElementById("error_container_search").innerHTML = response.data.err;
      }
    })
    .catch(error => {
      console.log("login error", error);
    });
  }else{
    document.getElementById("error_container_search").className = "errorContainerLog";
    document.getElementById("error_container_search").innerHTML = "Renseigner une adresse";
    return;
  }
    event.preventDefault();
  }
  getCoordinates(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    this.reverseGeocodeCoordinates();
  }
  reverseGeocodeCoordinates(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude}`+`,`+`${this.state.longitude}&sensor=false&key=AIzaSyA-I-d6bx4WwXkArfNCUifOPBPY4cyaqxs`)
    .then(response => response.json())
    .then(data => this.setState({
      address: data.results[0].formatted_address
    }))
    .then(this.distance(6.345284,2.417316))
    .catch(error => alert(error))
  }
  /*handleLocationError(error){
    switch(error.code){
      case error.PERMISSION_DENIED:
        alert("")
    }
  }*/
  handleChange = address => {
    this.setState({ address });
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        latitude: latLng.lat,
        longitude: latLng.lng
      }))
      .then(this.distance(6.345284,2.417316))
      .catch(error => console.error('Error', error));
      this.setState({
        address:address});
  };
  convertRad(input){
    return (Math.PI * input)/180;
  };
  distance(lat_b_degre, lon_b_degre){
    const R = 6378000 //Rayon de la terre en mètre
    var d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b_degre) * Math.sin(this.convertRad(this.state.latitude)) + Math.cos(lon_b_degre - this.state.longitude) * Math.cos(lat_b_degre) * Math.cos(this.convertRad(this.state.latitude))))
    if(d<5000){
      console.log("Les frais seront de ...fcfa")
    }else{
      console.log("Too far")
    }
    return d;
  };
  render() {
    const {profil, redirect } = this.state
      if (redirect) {
        return <Redirect to={{
          pathname: '/Etablissement',
          state: { infos: this.state.dataEtablissements, frais: this.state.objFrais, adresse: this.state.address }
      }}/>;
    }
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="search">
            <a className="my_location my_location_account" id="my_location" title="My location" onClick={this.getLocation}><TiLocation/></a>
          <div id="divSearchPlace">
            <input
              {...getInputProps({
                placeholder: this.state.address? this.state.address : "Adresse, par ex. 10 boulevard Paul ...",
                className: "location-search-input searchTerm",
                id: "input_searchTerm"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                suggestion.id=index;
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                      index
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <a className="search_button_place" id="submit_delivery" title="Voir restaurants" onClick={this.getEtablissement}>Continuer</a>
          <div className="" id="error_container_search"></div>
        </div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput;