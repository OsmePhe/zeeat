import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class ItemEtablissement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse: this.props.adresse,
      dataEtablissement: this.props.dataEtablissement,
      objFrais: this.props.objFrais
    }
    this.handleChange = this.handleChange.bind(this);
    //this.getPlats = this.getPlats.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  /*getPlats(event){
    axios.get("http://localhost:3000/platsEtablissement/"+this.state.dataEtablissement[event.target.getAttribute("data-key")].nom_etablissement,{
      //nom_etablissement: this.state.dataEtablissement[event.target.getAttribute("data-key")].nom_etablissement,
    },
    )
    .then(response => {
      if(!response.data.err){
      if (response.data) {
        this.setState({dataPlats: response.data});
      }
    }
  })
  .catch(error => {
    console.log("login error", error);
  });
  }*/

  render() {
    const {dataEtablissement,objFrais,adresse} = this.state
    const getPlats = this.getPlats
    return (
      <div className="cntEtablissement">
      <h1>A proximité</h1>
      <div id="proxEtbt" >
        {dataEtablissement.map(function(item, index) {
          return(
          <div className={`etablissement${index}`} key={index} data-key={index}>
            <Link to={{pathname: "/PlatsEtablissement", state: { infos: dataEtablissement[index], frais: objFrais, adresse: adresse, plats : {} }}}>
              <img className="picEtablissement" data-key={index} src={`http://localhost/zeeat/zefrontend/img/`+item.images+`.jpg`} alt={item.nom_etablissement} />
              <h3 className="h3itemEtablissement">{item.nom_etablissement}</h3>
              <h5 className="h5itemEtablissement">Frais de livraison : {objFrais[index]}</h5>
            </Link>
          </div>
          )
         }) 
        }
      </div>
      <h1>Offre du jour</h1>
      <div id="offreJour" >
        {dataEtablissement.map(function(item, index) {
          return(
          <div className={`etablissement${index}`} key={index}>
            <Link to={{pathname: "/PlatsEtablissement", state: { infos: dataEtablissement[index], frais: objFrais, adresse: adresse }}}>
              <img className="picEtablissement" src={`http://localhost/zeeat/zefrontend/img/`+item.images+`.jpg`} alt={item.nom_etablissement} />
              <h3 className="h3itemEtablissement">{item.nom_etablissement}</h3>
              <h5 className="h5itemEtablissement">Frais de livraison : {objFrais[index]}</h5>
            </Link>
          </div>
          )
         }) 
        }
      </div>
      <h1>Nouveau sur Zeeat</h1>
      <div id="nouvelEtbt" >
        {dataEtablissement.map(function(item, index) {
          return(
          <div className={`etablissement${index}`} key={index}>
            <Link to={{pathname: "/PlatsEtablissement", state: { infos: dataEtablissement[index], frais: objFrais, adresse: adresse }}}>
              <img className="picEtablissement" src={`http://localhost/zeeat/zefrontend/img/`+item.images+`.jpg`} alt={item.nom_etablissement} />
              <h3 className="h3itemEtablissement">{item.nom_etablissement}</h3>
              <h5 className="h5itemEtablissement">Frais de livraison : {objFrais[index]}</h5>
            </Link>
          </div>
          )
         }) 
        }
      </div>
      </div>
    )
  }
}

export default ItemEtablissement;