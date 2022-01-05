import PropTypes from 'prop-types'
import './SignIn.css'
import Headers from './Headers'
import Footers from './Footers'
import axios from "axios";
import { Redirect,Link } from 'react-router-dom';
import React, { Component } from 'react'


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: "visiteur",
      nom: "",
      prenom : "",
      email: "",
      password: "",
      dataClient: [],
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  handleChange(event) {
    document.getElementById("error_container_log").className = "";
    document.getElementById("error_container_log").innerHTML = "";
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleCheck(){
    if(document.getElementById("check_receive").checked){
      document.getElementById("check_receive").checked = true;
    }else{
      document.getElementById("check_receive").checked = false;
    }

  }
  checkPassword(password,confirmPwd) {
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!password.match(decimal)) {
        document.getElementById("error_container_log").className = "errorContainerLog";
        document.getElementById("error_container_log").innerHTML = "Password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        return;
      }
      if(password !== confirmPwd){
        document.getElementById("error_container_log").className = "errorContainerLog";
        document.getElementById("error_container_log").innerHTML = "Password doesn't match";
        return;
      }
      return true;
  }
  togglePassword(event) {
    if(event.target.className === "fa fa-fw fa-eye field-icon toggle-password"){
      var pwd = document.getElementById("SignUp-password");
      if (pwd.type === "password") {
        pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    }else{
      var pwd = document.getElementById("SignUp-password");
      if (pwd.type === "password") {
        pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    }

  };
  handleSignUp(event) {
    const { nom, prenom, email, password, confirmPwd, numero } = this.state;
    if(this.checkPassword(password,confirmPwd)){
      axios.post("http://localhost:3000/register",{
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
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
    }else{
      console.log("error password");
    }
    event.preventDefault();
  }

    render() {
      const {profil, redirect } = this.state
      if (redirect) {
        return <Redirect to={{
          pathname: '/home',
          state: { infos: this.state.dataClient }
      }}/>;
      }
      return (
        <div>
        <section className="forms-section" id="containerLogSign">
        <Headers profil={profil} where={"siup"}/>
        <h1 className="section-title">Inscription</h1>
        <div className="forms">
            <form onSubmit={this.handleSignUp} method="POST" className="forms_login">
              <div className="col">
                <a href="#" className="fb btn">
                  <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <a href="#" className="twitter btn">
                  <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
                <a href="#" className="google btn"><i className="fa fa-google fa-fw">
                  </i> Login with Google+
                </a>
              </div>

              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="container">
                <div className="hide-md-lg">
                  <p>Or sign up manually:</p>
                </div>
                <div className="" id="error_container_log"></div>
                <label htmlFor="nom"><b>Nom</b></label>
                <input onChange={this.handleChange} type="text" className="input_log_signup" name="nom" required/>
                <label htmlFor="prenom"><b>Prenom</b></label>
                <input onChange={this.handleChange} type="text" className="input_log_signup" name="prenom" required/>
                <label htmlFor="emai"><b>Adresse email</b></label>
                <input onChange={this.handleChange} type="text" placeholder="par ex oogoubi@exemple.fr" className="input_log_signup" name="email" required/>
                <label htmlFor="password"><b>Mot de passe</b></label>
                <input onChange={this.handleChange} id="SignUp-password" type="password" className="input_log_signup" name="password" required/>
                <span toggle="#password-field" name="SignUp-password-view" className="fa fa-fw fa-eye field-icon toggle-confirm-password view_pwd_signup" onClick={this.togglePassword}></span>
                <div>
                  <label htmlFor="confirmPwd"><b>Confirmation mot de passe</b></label>
                  <input onChange={this.handleChange} id="SignUp-password_confirm" type="password" className="input_log_signup" name="confirmPwd" required/>
                </div>
                <label id="label_number_signup" htmlFor="numero"><b>Numero</b></label>
                <input onChange={this.handleChange} type="tel" className="input_log_signup" name="numero" placeholder="00 00 00 00" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" required/>
                <button className="btn_log" type="submit">S'inscrire</button>
                <label>
                  <input onChange={this.handleCheck} id="check_receive" type="checkbox" name="receive"/>Recevez nos offres, les programmes de fidélité et d'autres informations.
                </label>
              </div>
            </form>
        </div>
        <div id="link_signup"><Link to="/signin">J'ai déjà un compte</Link></div>
      </section>
      <Footers profil={profil}/>
      </div>
      )
    }
  }
  
export default SignUp