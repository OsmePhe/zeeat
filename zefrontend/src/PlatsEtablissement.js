import React, { Component } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import './PlatsEtablissement.css';
import axios from "axios";
import LocationSearchInput from './PlaceAutocomplete';
import ModalPlatsEtablissement from './ModalPlatsEtablissement';
import { Redirect,Link } from 'react-router-dom';

class PlatsEtablissement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse: this.props.history.location.state.adresse,
      dataEtablissement: this.props.history.location.state.infos,
      dataPlats: [],
      selectedPlat: "",
      commande: [],
      qtcommande: [],
      modalShow: false,
      modalShowRecap: false,
      objFrais: this.props.history.location.state.frais
    }
    this.addCommandeModal = this.addCommandeModal.bind(this);
    this.validCommand = this.validCommand.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.openModalPlat = this.openModalPlat.bind(this);
    this.openModalRecap = this.openModalRecap.bind(this);
    this.closeModalPlat = this.closeModalPlat.bind(this);
    this.closeModalPlatRecap = this.closeModalPlatRecap.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
    
  }

  handleOnClick() {
    console.log("Test...")
  }
  openModalPlat(event) {
    this.setState({selectedPlat: this.state.dataPlats[event.target.getAttribute("data-key")]});
    console.log(this.state.dataPlats[event.target.getAttribute("data-key")]);
    this.setState({modalShow: true});
  }
  openModalRecap(event) {
    this.setState({modalShowRecap: true});
  }
  closeModalPlat() {
    document.getElementById("myModal").style.display = "none";
    this.setState({selectedPlat: ""});
    this.setState({modalShow: false});
  }
  closeModalPlatRecap() {
    document.getElementById("myModal").style.display = "none";
    this.setState({selectedPlat: ""});
    this.setState({modalShowRecap: false});
  }
  incrementValue(e) {
    e.preventDefault();
    document.getElementsByClassName("quantity-field")[0].value = parseInt(document.getElementsByClassName("quantity-field")[0].value)+1;
  }
  decrementValue(e) {
    e.preventDefault();
    if(document.getElementsByClassName("quantity-field")[0].value >=1){
      document.getElementsByClassName("quantity-field")[0].value = parseInt(document.getElementsByClassName("quantity-field")[0].value)-1;
    }
  }
  addCommandeModal(e){
    e.preventDefault();
    var tampon = [], tamponQtcommande = [], tamponCommande = this.state.qtcommande;
    for(var i=0;i<document.querySelectorAll('input[type="radio"]:checked').length;i++){
      tampon.push(document.querySelectorAll('input[type="radio"]:checked')[i].value);
    }
    if(tampon.length!==0){
      this.state.commande.push(tampon);
      this.state.qtcommande.push(document.getElementsByClassName("quantity-field")[0].value);
    }
    if(this.state.commande.length!==0){
      this.closeModalPlat();
      document.getElementById("error_container_modal").className = "errorContainerModal";
      document.getElementById("error_container_modal").innerHTML = "";
    }else{
      document.getElementById("error_container_modal").className = "errorContainerModal";
      document.getElementById("error_container_modal").innerHTML = "Cochez les champs obligatoires";
    }
  }
  validCommand(e){
    console.log("Validation");
    this.setState({redirect: true});
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  getPlats(){
    axios.get("http://localhost:3000/platsEtablissement/"+this.state.dataEtablissement.nom_etablissement,{
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
  }
  componentDidMount(){
    this.getPlats();
  }
  render() {
    const {dataEtablissement,objFrais,dataPlats,modalShow,modalShowRecap,selectedPlat,redirect} = this.state
      if (redirect) {
        return <Redirect to={{
          pathname: '/RecapitulatifCommande',
          state: { recap: this.state }
      }}/>;
      }
    var openModalPlat = this.openModalPlat
    return (
      <div className="div_restaurant">
        <Headers profil={"visiteur"} dataClient={undefined} handleOnClick={this.handleOnClick} where={""}/>
        <div className="cntSearchBody" id="cntSearchBodyPlats">
        <div className="wrapSearch">
        <div className="divSearch">
          <LocationSearchInput notFirstSearch={this.state.adresse}/>
        </div>
        </div>
        <div className="well text-center" onClick={this.openModalRecap}>
          <h4>{this.state.commande.length}<i className="fa fa-shopping-basket" aria-hidden="true"></i> </h4>
        </div>
        </div>
        <div className="imgPrincipalPlat">
          <div className="infoEtablissement">
            <h1 className="nomEtablissement">{dataEtablissement.nom_etablissement}</h1>
            <h3 className="specEtablissement">{dataEtablissement.type_cuisine}</h3>
            <h3 className="adrssEtablissement">{dataEtablissement.adresse_etablissement}</h3>
          </div>
        </div>
        <div className="rowPlats">
          {dataPlats.map(function(item, index) {
          return(
              <div className={`column ${index}`} key={index} data-key={index} onClick={openModalPlat}>
              <div className={`card ${index}`}>
              <img className={`picPlat${index}`} data-key={index} src={`http://localhost/zeeat/zefrontend/img/`+item.images_plats+`.png`} alt={item.plats_etablissement} />
              <p data-key={index}>{item.plats_etablissement}</p>
              <p data-key={index}>{item.plats_compositions}</p>
              <p data-key={index}>{item.plats_prix} FCFA</p>
              </div>
            </div>
              )
            })
          }
        </div>
        {modalShow && <ModalPlatsEtablissement dataEtablissement={this.state} selectedPlat={selectedPlat} closeModalPlat={this.closeModalPlat} closeModalPlatRecap={""} incrementValue={this.incrementValue} decrementValue={this.decrementValue} addCommandeModal={this.addCommandeModal} flagPlat={"1"}/>}
        <div className="divValidCommand">
        <button id="btn-valid-command" type="button" className="btn btn-primary" onClick={this.validCommand}>
            Valider ma commande
          </button>
        </div>
        <Footers profil={"visiteur"}/>
        {modalShowRecap && <ModalPlatsEtablissement  dataEtablissement={this.state} selectedPlat={selectedPlat} closeModalPlat={""} closeModalPlatRecap={this.closeModalPlatRecap} incrementValue={""} decrementValue={""} addCommandeModal={""} flagPlat={"0"}/>}
      </div>
    )
  }
}

export default PlatsEtablissement;
