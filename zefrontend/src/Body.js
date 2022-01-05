import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api"
import LocationSearchInput from './PlaceAutocomplete';
import MyComponent from './ComponentMap';
import './Body.css'
import { FcOk,FcAddressBook,FcAutomotive } from "react-icons/fc";


const Body = ({profil,handleOnClick}) => (
    <div onClick={handleOnClick}>
      {profil === "visiteur" ? 
      <div className="cntBody">
        <div className="cntSearchBody">
        <div className="wrapSearch">
        <div className="divSearch">
          <LocationSearchInput/>
        </div>
        </div>
        </div>
        <div className="hr_sep">
          <h3 className="steps_subheadline">Soutenez l'économie locale avec,</h3>
          <h3 className="steps_mainheadline"> ZeEat</h3>
        </div> 
        <div className="content_how">
          <section className="steps_inner">

            <span className="steps_btn steps_btn_backward"></span>
            <span className="steps_btn steps_btn_forward"></span>

            <h3 className="steps_subheadline">Comment ça marche ?</h3>
            <h4 className="steps_mainheadline">C'est très simple !</h4>
            <div className="listbox_boxes">
              <div className="step_wrapper">
                <span className="step_icon"><FcAddressBook/></span>
                <span className="step_headline">Adresse</span>
                <p className="p_how">Entrez le nom de votre rue ou laissez_nous déterminer votre position.</p>
              </div>
              <span className="step_seperator"></span>
              <div className="step_wrapper">
                <span className="step_icon"><FcOk/></span>
                <span className="step_headline">Sélection</span>
                <p className="p_how">Quelles sont vos envies du moment ? Parcourez les menus et les avis clients pour faire votre choix.</p>
              </div>
              <span className="step_seperator"></span>
              <div className="step_wrapper">
                <span className="step_icon"><FcAutomotive/></span>
                <span className="step_headline">Paiement et livraison</span>
                <p className="p_how">Réglez en espèces ou en ligne avec votre Carte de crédit, PayPal, Bitcoin. Bon appétit !</p>
                        <div id="promovideo" className=""></div>
              </div>
              {/*<span className="step_seperator"></span>*/}
            </div>
            <div className="steps_slider_dots_wrap">
              <span className="steps_slider_dots"></span>
              <span className="steps_slider_dots"></span>
              <span className="steps_slider_dots steps_slider_dot_active"></span>
            </div>
          </section>
        </div>
        <div className="prox_city">
          <h1 className="h1_collab_city">Villes et collaborateurs voisins</h1>
          <div className="map_city">
              <MyComponent/>
          </div>
        </div>
        </div>
      
        :
        <div>En cours</div>
      }
    </div>
  )




export default Body