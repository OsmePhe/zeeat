import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'
import { FaRegGrinHearts,FaComments,FaPercentage,FaRegAddressCard,FaBicycle} from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";

const HeadersLog = ({profil,dataClient,handleOnClick,where}) => (
    
    <header className="App-header" onClick={handleOnClick}>
        <nav id="navHeader">
        {profil === "logged" && where === "home"? 
        <div>
            <nav role="navigation" id="navMenuBurger">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                        <hr/>
                        <a><li><VscAccount/><div className="label_burger">Votre Compte</div></li></a>
                        <li id="style_account">
                            <Link to={{
                            pathname: "/account",
                            state: { infos: dataClient}
                            }}>{dataClient[0].prenom + " " + dataClient[0].nom.toUpperCase()}
                            </Link>
                        </li>
                        <a href="#"><li><FaRegAddressCard/><div className="label_burger">Ajoutez votre restaurant</div></li></a>
                        <a href="#"><li><FaBicycle/><div className="label_burger">Devenez coursier-partenaire</div></li></a>
                        <a href="#"><li><FaPercentage/><div className="label_burger">Carte de fidélité</div></li></a>
                        <a href="#"><li><FaRegGrinHearts/><div className="label_burger">Favoris</div></li></a>
                        <a href="#"><li><FaComments/><div className="label_burger">FAQ</div></li></a>
                        <a href="#"><li><FiLogOut/><div className="label_burger">Déconnexxtion</div></li></a>
                        </ul>
                    </div>
                </nav>
            <ul className="title">
                <li><Link to="/">ZeEat</Link></li>
            </ul> 
            <ul className="menu">
                {dataClient ? <div className="errorContainerSign" id="error_container_sign">Connexion réussie</div> : <div></div>}
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
                        <a href="#"><li><FaRegAddressCard/><div className="label_burger">Ajoutez votre restaurant</div></li></a>
                        <a href="#"><li><FaBicycle/><div className="label_burger">Devenez coursier-partenaire</div></li></a>
                        <a href="#"><li><FaPercentage/><div className="label_burger">Carte de fidélité</div></li></a>
                        <a href="#"><li><FaRegGrinHearts/><div className="label_burger">Favoris</div></li></a>
                        <a href="#"><li><FaComments/><div className="label_burger">FAQ</div></li></a>
                        </ul>
                    </div>
                </nav>
            <ul className="title">
                <li><Link to="/">ZeEat</Link></li>
            </ul> 
            </div>
            }
        </nav>
    </header>
  )




export default HeadersLog