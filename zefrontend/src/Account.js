import React, { Component } from 'react'
import axios from "axios";
import HeadersLog from './HeadersLog'
import Footers from './Footers'
import './App.css';
import './SignIn.css'
import './Account.css'
import LocationSearchInput from './PlaceAutocomplete';
import { Redirect,Link } from 'react-router-dom';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editPassword = this.editPassword.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  openModal() {
    document.getElementById("my_location").style.top="60px";
    document.getElementById("my_location").style.left="65px";
    document.getElementById("my_location").style.padding= "0 1rem 0 0.9rem";
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("input_searchTerm").value="";
    document.getElementById("myModal").style.display = "none";
  }
  
  handleChange(event) {
    document.getElementById("error_container_log").className = "";
    document.getElementById("error_container_log").innerHTML = "";
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  editPassword(event) {
    console.log("Edit...")
  }

  saveEdit(event) {
    console.log("Save Edit...")
  }

  handleUpdateAccount(event) {
    const { nom, prenom, email, numero } = this.state;
      axios.post("http://localhost:3000/updateAccount",{
        nom: nom,
        prenom: prenom,
        email: email,
        numero: numero
    },
    { withCredentials: true }
    )
    .then(response => {
      if(!response.data.err){
      if (response.data) {
        this.setState({dataClient: response.data});
        this.setState({redirect: true});
      }
    }else{
      document.getElementById("error_container_log").className = "errorContainerLog";
      document.getElementById("error_container_log").innerHTML = response.data.err;
      }
    })
    .catch(error => {
      console.log("login error", error);
    });
    event.preventDefault();
  }

  render() {
    const {} = this.state
    return (
      <div className="div_account">
        <HeadersLog profil={"logged"}  dataClient={""} handleOnClick={()=>{}} where={"account"}/>
        <form onSubmit={this.handleUpdateAccount} method="POST"  className="forms_account">
          <div className="div_forms_account">
          <div>
          <h1 className="label_h1_account"><b>Données personnelles</b></h1>
            <h2 className="label_h2_account"><b>Détails</b></h2>
            <hr/>
            <div className="details_account">
              <div className="details_account_input">
                <label htmlFor="prenom"><b>Prénom</b></label>
                <input onChange={this.handleChange} type="text" value={this.props.history.location.state.infos[0].prenom} className="input_account" name="prenom" required/>
              </div>
              <div className="details_account_input">
                <label htmlFor="nom"><b>Nom</b></label>
                <input onChange={this.handleChange} type="text"  value={this.props.history.location.state.infos[0].nom.toUpperCase()} className="input_account" name="nom" required/>
              </div>
            </div>
            <div className="details_account">
              <div className="details_account_input">
                <label htmlFor="emai"><b>Adresse email</b></label>
                <input onChange={this.handleChange} type="text" value={this.props.history.location.state.infos[0].email} placeholder="par ex oogoubi@exemple.fr" className="input_account" name="email" required/>
              </div>
              <div className="details_account_input">
                <label htmlFor="numero"><b>Numero</b></label>
                <input onChange={this.handleChange} type="tel" className="input_account" name="numero" value={this.props.history.location.state.infos[0].numero} placeholder="00 00 00 00" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" required/>
              </div>
            </div>
            <h2 className="label_h2_account"><b>Adresses</b></h2>
            <div className="pannel_adress">
              <div className="pannel_btn_adress">
                  <div className="div_adrs">Adresse principale</div>
                  <div className="adress_principale">
                    <label className="label_adrs">{this.props.history.location.state.infos[0].adrs_principale}</label>
                    <div className="btn_adrs">
                      <div id="openModalAdress" className={this.props.history.location.state.infos[0].adrs_principale ===""?"openModalAdress": "openModalAdressMod"} onClick={this.openModal}>{this.props.history.location.state.infos[0].adrs_principale ===""?"Ajouter adresse": "Modifier adresse"}</div>
                      {/*<div id="delModalAdress" onClick={this.delModal}>Supprimer adresse</div>*/}
                    </div>
                  </div>
                  <div className="div_adrs">Adresse secondaire</div>
                  <div className="adress_secondaire">
                  <label className="label_adrs">{this.props.history.location.state.infos[0].adrs_secondaire}</label>
                    <div className="btn_adrs">
                      <div id="openModalSecAdress" className={this.props.history.location.state.infos[0].adrs_secondaire ===""?"openModalAdress": "openModalAdressMod"} onClick={this.openModal}>{this.props.history.location.state.infos[0].adrs_secondaire ===""?"Ajouter adresse": "Modifier adresse"}</div>
                      {/*<div id="delModalAdress" onClick={this.delModal}>Supprimer adresse</div>*/}
                    </div>
                  </div>
              </div>
            </div>
            <hr/>
            <h2 className="label_h2_account"><b>Cartes de Paiement</b></h2>
            <div>
              <label>Pour ajouter une carte, passez une commande et sélectionnez « Ajouter une carte » avant de valider</label>
            </div>
            <hr/>
            <h2 className="label_h2_account"><b>Réseaux Sociaux</b></h2>
            <div>
              <label>Vous voulez ajouter une autre carte ? Passez une commande et sélectionnez « Ajouter une carte » avant de valider</label>
            </div>
            <hr/>
            <h1 className="label_h1_account"><b>Restaurants Favoris</b></h1>
            <div></div>
            <hr/>
            <h1 className="label_h1_account"><b>Messages promotionnels et nouveautés</b></h1>
            <div></div>
            <hr/>
            <h1 className="label_h1_account"><b>Changer Mot de Passe</b></h1>
            <div>
              <label>Saisir votre mot de passe actuel pour confirmer votre identité, afin de le modifier.</label>
              <br/>
              <div className="password_account_input">
                <label htmlFor="password_account"><b>Mot de passe actuel</b></label>
                <input onChange={this.handleChange} type="text" className="input_account" name="password_account" required/>
                <div className="divBtnEditPwd">
                    <div id="btnEditPwd" onClick={this.editPassword}>Modifier</div>
                </div>
              </div>
            </div>
            <div className="divSaveEdit">
              <div className="">
                    <div id="saveEdit" className="saveEdit" onClick={this.saveEdit}>Enregistrer</div>
              </div>
            </div>
          </div>
          </div>
        </form>
        <div id="myModal" className="modal" >
          <form className="modal-content" action="" method="POST">
            <span className="close" onClick={this.closeModal}>&times;</span>
              <div className="">
                <div className="inputModalAdresse">
                  <div className="label-div-modal">Adresse:</div>
                  <LocationSearchInput/>
                </div>
                {/*<div id="divBtnAddAdresse">
                <button id="btn-add-addresse" type="button" className="btn btn-primary" onClick={()=>{}}>
                  Ajouter
                </button>
                </div>*/}
              </div>
            </form>
          </div>
        <Footers profil={"visiteur"}/>
      </div>
    )
  }
}

export default Account;
