import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footers.css'

const Footers = ({profil,handleOnClick}) => (
    
    <footer className="site-footer" onClick={handleOnClick}>
        {profil === "visiteur" ? 
        <div>
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                    <h6>About</h6>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul className="footer-links">
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Contribute</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                </div>
                <hr></hr>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="#">OFO</a>.</p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                    </ul>
                </div>
                </div>
            </div>







            </div>
            :
            <div>En cours</div>
            }
    </footer>
  )


export default Footers