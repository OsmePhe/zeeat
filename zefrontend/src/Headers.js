import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'
import { FaRegGrinHearts,FaComments,FaPercentage,FaRegAddressCard,FaBicycle} from "react-icons/fa";

const Headers = ({profil,dataClient,handleOnClick,where}) => (
    
    <header className="App-header" onClick={handleOnClick}>
        <nav id="navHeader">
        {profil === "visiteur" && where === "home"? 
        <div>
            <nav role="navigation" id="navMenuBurger">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                        <hr/>
                        <li className="li_add_resto"><FaRegAddressCard/><div className="label_burger"><Link to="/applyEtablissement">Ajoutez votre restaurant</Link></div></li>
                        <a href="#"><li><FaBicycle/><div className="label_burger">Devenez coursier-partenaire</div></li></a>
                        <a href="#"><li><FaPercentage/><div className="label_burger">Carte de fidélité</div></li></a>
                        <a href="#"><li><FaRegGrinHearts/><div className="label_burger">Favoris</div></li></a>
                        <a href="#"><li><FaComments/><div className="label_burger">FAQ</div></li></a>
                        </ul>
                    </div>
                </nav>
            <ul className="title">
                <li><Link to="/">ZeEat</Link></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <Link to="/SignIn" id="link_connect" className="btnSignIn">Se connecter</Link>
            </ul> 
            <ul className="menu">
                {dataClient ? <div className="errorContainerSign" id="error_container_sign">L'inscription est terminée. Connectez vous pour passer votre première commande</div> : <div></div>}
                <h1 className="header_title">Vos repas préférés,</h1>
                <h1 className="header_title">chez vous.</h1>
                <h2 className="header_subtitle"> Faites vous plaisir!</h2>
            </ul>
        </div>:
            <div>
            <nav role="navigation" id="navMenuBurger">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                        <hr/>
                        <li className="li_add_resto"><FaRegAddressCard/><div className="label_burger"><Link to="/applyEtablissement">Ajoutez votre restaurant</Link></div></li>
                        <a href="#"><li><FaBicycle/><div className="label_burger">Devenez coursier-partenaire</div></li></a>
                        <a href="#"><li><FaPercentage/><div className="label_burger">Carte de fidélité</div></li></a>
                        <a href="#"><li><FaRegGrinHearts/><div className="label_burger">Favoris</div></li></a>
                        <a href="#"><li><FaComments/><div className="label_burger">FAQ</div></li></a>
                        </ul>
                    </div>
                </nav>
                <ul className="title">
                    <li><Link to="/">ZeEat</Link></li>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                    <Link to="/SignIn" id="link_connect" className="btnSignIn">Se connecter</Link>
                </ul> 
            </div>
            }
        </nav>
    </header>
  )




export default Headers