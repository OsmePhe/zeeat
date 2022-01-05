import PropTypes from 'prop-types'
import './SignIn.css'
import Headers from './Headers'
import Footers from './Footers'
import axios from "axios";
import { Redirect,Link } from 'react-router-dom';
import React, { Component } from 'react'


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: "visiteur",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
    if(document.getElementById("check_remenber").checked){
      document.getElementById("check_remenber").checked = true;
    }else{
      document.getElementById("check_remenber").checked = false;
    }

  }
  checkPassword(password,confirmPwd) {
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!password.match(decimal)) { 
        alert("Password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
        return;
      }
      if(password !== confirmPwd){
        alert("Password doesn't match");
        return
      }
      return true;
  }
  togglePassword(event) {
    if(event.target.className === "fa fa-fw fa-eye field-icon toggle-password"){
      var pwd = document.getElementById("login-password");
      if (pwd.type === "password") {
        pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    }else{
      var pwd = document.getElementById("signin-password");
      if (pwd.type === "password") {
        pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    }

  };
  handleLogin(event) {
    const { email, password } = this.state;
    axios.post("http://localhost:3000/login",{
            email: email,
            password: password
        },
        { withCredentials: true }
      )
      .then(response => {
        if(!response.data.err){
          if (response.data) {
            this.setState({dataClient: response.data});
            this.setState({redirect: true});
            console.log(response);
          }
        }else{
          document.getElementById("error_container_log").className = "errorContainerLog";
          document.getElementById("error_container_log").innerHTML = response.data.err;
          document.getElementById("error_container_log").scrollIntoView();
        }

      })
      .catch(error => {
        console.log("login error", error);
      });
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
        <h1 className="section-title">Connexion</h1>
        <div className="forms">
            <form onSubmit={this.handleLogin} method="POST" className="forms_login">
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
              <div className="containerSignManual">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>
                <div className="" id="error_container_log"></div>
                <label htmlFor="emai"><b>Adresse email</b></label>
                <input onChange={this.handleChange} type="text" placeholder="par ex oogoubi@exemple.fr" className="input_log_signup" name="email" required/>
                <label htmlFor="password"><b>Mot de passe</b></label>
                <input onChange={this.handleChange} id="signin-password" type="password" placeholder="" className="input_log_signup" name="password" required/>
                <span toggle="#password-field" name="signin-password-view" className="fa fa-fw fa-eye field-icon toggle-confirm-password view_pwd_log" onClick={this.togglePassword}></span>
                <div className="container_btn_log">
                <span className="psw"><a href="#">Mot de passe oublié?</a></span>
                </div>
                <button className="btn_log" type="submit">Login</button>
                <label>
                  <input onChange={this.handleCheck} id="check_remenber" type="checkbox" name="remember"/> Se souvenir de moi
                </label>
              </div>
            </form>
        </div>
        <div id="link_signup">Vous découvrez  ZeEat?<Link to="/signup">Créez un compte</Link></div>
      </section>
      <Footers profil={profil}/>
      </div>
      )
    }
  }
  
export default SignIn