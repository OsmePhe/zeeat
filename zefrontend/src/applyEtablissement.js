import React, { Component } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import emailjs from 'emailjs-com';
import './App.css';
import { FcOk,FcAddressBook,FcAutomotive } from "react-icons/fc";
import './applyEtablissement.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class applyEtablissement extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    }
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

  sendApply(e) {
    e.preventDefault();
    //var form = document.getElementById("id_forms_apply_restaurant");
    emailjs.sendForm("gmail", "template_wxnhe08", e.target, "user_0sRop0juSpQDi0h3WGNlB")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  render() {
    const {} = this.state
    return (
      <div className="div_restaurant">
        <Headers profil={"visiteur"} dataClient={undefined} handleOnClick={this.handleOnClick} where={""}/>
        <form onSubmit={this.sendApply} method="POST"  className="forms_apply_restaurant" id="id_forms_apply_restaurant">
          <div className="div_forms_apply_restaurant">
          <div>
          <h1 className="label_h1_apply_restaurant"><b>Demande de partenariat ZeEat</b></h1>
            <hr/>
            <div className="details_apply_restaurant">
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Nom de l'établissement" className="input_apply_restaurant" name="nom_etablissement" id="nom_etablissement" required/>
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Adresse de l'établissement" className="input_apply_restaurant" name="adresse_etablissement" id="adresse_etablissement" required/>
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Ville" className="input_apply_restaurant" name="ville" id="ville" required/>
              </div>
              <div className="apply_restaurant_input">
              <select defaultValue={"DEFAULT"} onChange={this.handleChange}  type="text" placeholder="Proposez-vous la livraison actuellement ?" className="input_apply_restaurant" name="livraison_actuelle" id="livraison_actuelle" required>
                  <option value="DEFAULT">Proposez-vous la livraison actuellement ?</option>
                  <option value="Non, pas encore">Non, pas encore</option>
                  <option value="Oui, avec mes propres livreurs">Oui, avec mes propres livreurs</option>
                  <option value="Oui, avec un partenaire de livraison">Oui, avec un partenaire de livraison</option>
                </select>
                {/*<input onChange={this.handleChange} type="text" placeholder="Proposez-vous la livraison actuellement ?" className="input_apply_restaurant" name="livraison_actuelle" id="livraison_actuelle" required/>*/}
              </div>
              <div className="apply_restaurant_input">
                <select defaultValue={"DEFAULT"} onChange={this.handleChange} type="text" placeholder="Catégorie de l'établissement" className="input_apply_restaurant" name="categorie" id="categorie" required>
                  <option value="" value="DEFAULT">Catégorie de l'activité</option>
                  <option value="Bistrot / Café / Boulangerie">Bistrot / Café / Boulangerie</option>
                  <option value="Hôtel">Hôtel</option>
                  <option value="Livraison/Vente à emporter">Livraison/Vente à emporter</option>
                  <option value="Magasin / Épicerie">Magasin / Épicerie</option>
                  <option value="Œuvre de bienfaisance">Œuvre de bienfaisance</option>
                  <option value="Pub / Bar">Pub / Bar</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Restaurant-traiteur / Snack">Restaurant-traiteur / Snack</option>
                  <option value="Stand de nourriture / Food truck (camion-cantine) / Restaurant « pop-up »">Stand de nourriture / Food truck (camion-cantine) / Restaurant « pop-up »</option>
                  <option value="Vente carte-cadeau">Vente carte-cadeau</option>
                </select>
                {/*<input onChange={this.handleChange} type="text" placeholder="Catégorie de l'établissement" className="input_apply_restaurant" name="categorie" id="categorie" required/>*/}
              </div>
              <div className="apply_restaurant_input">
                <select  defaultValue={"DEFAULT"} onChange={this.handleChange} type="text" placeholder="Type de cuisine" className="input_apply_restaurant" name="type_cuisine" id="type_cuisine" required>
                  <option value="Type de cuisine" value="DEFAULT">Type de cuisine</option>
                  <option value="Afghan">Afghan</option>
                  <option value="Africain">Africain</option>
                  <option value="Allemand">Allemand</option>
                  <option value="Américain">Américain</option>
                  <option value="Antillais">Antillais</option>
                  <option value="Argentin">Argentin</option>
                  <option value="Asiatique">Asiatique</option>
                  <option value="Autrichien">Autrichien</option>
                  <option value="Bangladais">Bangladais</option>
                  <option value="Belge">Belge</option>
                  <option value="Boissons">Boissons</option>
                  <option value="Boulangerie">Boulangerie</option>
                  <option value="Brésilien">Brésilien</option>
                  <option value="Britannique">Britannique</option>
                  <option value="Brunch">Brunch</option>
                  <option value="Café">Café</option>
                  <option value="Cambodgien">Cambodgien</option>
                  <option value="Canadien">Canadien</option>
                  <option value="Cantonais">Cantonais</option>
                  <option value="Chinois">Chinois</option>
                  <option value="Coréen">Coréen</option>
                  <option value="Cubain">Cubain</option>
                  <option value="368412">Healthy Food</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Égyptien">Égyptien</option>
                  <option value="Émirati">Émirati</option>
                  <option value="Épicerie">Épicerie</option>
                  <option value="Espagnol">Espagnol</option>
                  <option value="Éthiopien">Éthiopien</option>
                  <option value="Français">Français</option>
                  <option value="Fusion asiatique">Fusion asiatique</option>
                  <option value="Grec">Grec</option>
                  <option value="Hawaïen">Hawaïen</option>
                  <option value="Indien">Indien</option>
                  <option value="Italien">Italien</option>
                  <option value="Jamaïcain">Jamaïcain</option>
                  <option value="Japonais">Japonais</option>
                  <option value="Latinoaméricain">Latinoaméricain</option>
                  <option value="Libanais">Libanais</option>
                  <option value="Malaisien">Malaisien</option>
                  <option value="Marocain">Marocain</option>
                  <option value="Méditerranéen">Méditerranéen</option>
                  <option value="Mexicain">Mexicain</option>
                  <option value="Népalais">Népalais</option>
                  <option value="Nigérian">Nigérian</option>
                  <option value="Occidental">Occidental</option>
                  <option value="Oriental">Oriental</option>
                  <option value="Pakistanais">Pakistanais</option>
                  <option value="Péruvien">Péruvien</option>
                  <option value="Petit déjeuner">Petit déjeuner</option>
                  <option value="Philippin">Philippin</option>
                  <option value="Polonais">Polonais</option>
                  <option value="Portugais">Portugais</option>
                  <option value="Roumain">Roumain</option>
                  <option value="Russe">Russe</option>
                  <option value="Sichuan">Sichuan</option>
                  <option value="Singapourien">Singapourien</option>
                  <option value="Taïwanais">Taïwanais</option>
                  <option value="Thaï">Thaï</option>
                  <option value="Turc">Turc</option>
                  <option value="Vénézuélien">Vénézuélien</option>
                  <option value="Vietnamien">Vietnamien</option>
                  <option value="Autre">Autre</option>
                </select>
                
                {/*<input onChange={this.handleChange} type="text" placeholder="Type de cuisine" className="input_apply_restaurant" name="type_cuisine" id="type_cuisine" required/>*/}
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Nom du propriétaire" className="input_apply_restaurant" name="nom_proprietaire" id="nom_proprietaire" required/>
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Prénom du propriétaire" className="input_apply_restaurant" name="prenom_proprietaire" id="prenom_proprietaire" required/>
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Adresse e-mail de contact" className="input_apply_restaurant" name="email_proprietaire" id="email_proprietaire" required/>
              </div>
              <div className="apply_restaurant_input">
                <input onChange={this.handleChange} type="text" placeholder="Numéro de téléphone de contact" className="input_apply_restaurant" name="numero_proprietaire" id="numero_proprietaire" required/>
              </div>
            </div>
            <div className="politiqueZeeat">En cliquant sur Envoyer, vous acceptez les <a href="#">Conditions générales</a> de ZeEat et </div>
            <div className="politiqueZeeat">confirmez que vous avez lu <a href="#">la Politique de confidentialité</a>.</div>
            <div className="divSaveEdit">
              <div className="">
                    <input id="sendApply" className="btn btn-info" type="submit" />
              </div>
            </div>
          </div>
          </div>
        </form>
        <div className="div_forms_apply_restaurant">
            <h1 className="label_h1_apply_restaurant h1_why_partner"><b>Devenez établissement partenaire</b></h1>
            <div className="why_why_partner">
              <div className="vcl_why_partner">
                <h1 className="label_h1_why_partner">Augmentez votre visibilité</h1>
                <div>Attirez une nouvelle clientèle, toucher encore plus de clients et augmentez votre chance d'accroître vos ventes</div>
              </div>
              <div className="vcl_why_partner">
                <h1 className="label_h1_why_partner">Gardez le contact avec vos clients</h1>
                <div> Habituez vos clients grâce à des données exploitables, répondez aux avis laissés sur votre établissement ou proposez un programme de fidélité.</div>
              </div>
              <div className="vcl_why_partner">
                <h1 className="label_h1_why_partner">Profitez de notre service de livraison</h1>
                <div>Rejoignez ZeEat et faites livrer vos commandes par vos coursiers ou ceux de notre plateforme.</div>
              </div>
            </div>
        </div>
        <div className="div_forms_apply_restaurant">
          <section className="steps_inner_1">
            <span className="steps_btn steps_btn_backward"></span>
            <span className="steps_btn steps_btn_forward"></span>
            <h1 className="label_h1_apply_restaurant h1_why_partner"><b>Comment ça marche pour les établissements partenaires?</b></h1>
            <div className="listbox_boxes">
              <div className="step_wrapper_1">
                <span className="step_icon"><FcAddressBook/></span>
                <span className="step_headline">Les clients passent commande</span>
                <p className="p_how">Le client trouve votre établissement et passe commande sur ZeEat.</p>
              </div>
              <div className="step_wrapper_1">
                <span className="step_icon"><FcOk/></span>
                <span className="step_headline">Vous préparez la commande</span>
                <p className="p_how">Votre établissement accepte et prépare la commande.</p>
              </div>
              <div className="step_wrapper_1">
                <span className="step_icon"><FcAutomotive/></span>
                <span className="step_headline">Les coursiers-partenaires arrivent</span>
                <p className="p_how">Les coursiers utilisant la plateforme ZeEat prennent en charge la commande dans votre établissement, puis la livrent au client.</p>
                        <div id="promovideo" className=""></div>
              </div>
            </div>
            <div className="steps_slider_dots_wrap">
              <span className="steps_slider_dots"></span>
              <span className="steps_slider_dots"></span>
              <span className="steps_slider_dots steps_slider_dot_active"></span>
            </div>
          </section>
        </div>
        <Footers profil={"visiteur"}/>
      </div>
    )
  }
}

export default applyEtablissement;
