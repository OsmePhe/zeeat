import React, { Component } from 'react'
import Headers from './Headers'
import HeadersLog from './HeadersLog'
import Body from './Body'
import Footers from './Footers'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profil: "visiteur",
      address: "",
      dataClient: undefined
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if(this.props.history.location.state){
      this.setState({
        dataClient: this.props.history.location.state.infos
      })
      document.getElementById("error_container_sign").className = "";
      document.getElementById("error_container_sign").innerHTML = "";
    }
  }

  render() {
    const {profil,dataClient} = this.state
    return (
      <div className="App">
      {this.props.history.location.state ? this.props.history.location.state.infos &&
      <HeadersLog profil={"logged"}  dataClient={this.props.history.location.state.infos} handleOnClick={this.handleOnClick} where={"home"}/>:
      <Headers profil={profil}  dataClient={dataClient} handleOnClick={this.handleOnClick} where={"home"}/>
      }
        <Body profil={profil} handleOnClick={this.handleOnClick}/>
        <Footers profil={profil} handleOnClick={this.handleOnClick}/>
      </div>
    )
  }
}

export default home;
