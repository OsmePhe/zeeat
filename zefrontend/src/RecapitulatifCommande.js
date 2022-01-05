import React, { Component } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import './RecapitulatifCommande.css';
import axios from "axios";
import { Redirect,Link } from 'react-router-dom';

class RecapitulatifCommande extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.history.location.state.recap
    this.handleOnClick = this.handleOnClick.bind(this);   
  }

  handleOnClick() {
    console.log("Test...")
  }
  render() {
    const {commande} = this.state;
    const {dataEtablissement} = this.state;
    return (
      <div className="div_restaurant">
        <Headers profil={"visiteur"} dataClient={undefined} handleOnClick={this.handleOnClick} where={""}/>
        <h1>Récapitulatif de la commande</h1>
        <div>
            <div id="mainContainer" className="main-container-pos col-sm-12">
            {commande.length !== 0 && commande.map(function(item, index) {
              return(
                <Link to={{pathname: "!#"}}  className="disp-card">
                    <div id={"cmdContainer"+index} className="col-sm-12" key={index} data-key={index}>
                    <div id={"cmd"+index} >
                    <div className="card">
                      <div className="card_image"> <img src={`http://localhost/zeeat/zefrontend/img/`+dataEtablissement.images+`.jpg`} alt="Avatar" /> </div> {/**dataEtablissements[index]. */}
                      <div className="card_title title-white">
                          <h5>Etablissement : <b>{dataEtablissement.nom_etablissement}</b></h5>
                          <div>
                            {item.map(function(it,idx){
                              return(
                                <h5 key={idx} data-key={idx}>{it}</h5>
                              )
                            })}
                          </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
        </div>
        <div className="divPaieCommand">
        <button id="btn-paie-command" type="button" className="btn btn-primary" onClick={()=>{}}>
            Payer ma commande
          </button>
        </div>
        <Footers profil={"visiteur"}/>
      </div>
    )
  }
}

export default RecapitulatifCommande;