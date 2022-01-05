import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Caroussel from './Caroussel'
import './Body.css'
import './ProjectBody.css'
var cards = [
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", 
  "title":"Burgundy Flemming", 
  "subtitle":"Advertising"},
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
 {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", 
  "title":"Nigel Nigel", 
  "subtitle":"Sound & Vision"},
 {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"}
];

const ProjectBody = ({profil, project, onClick}) => (
    <div className="projectBodyContainer">
      {profil === "visiteur" ? 
        <div className={`project ${project.title} ${project.person}`} >
          <Caroussel data={project} url={`http://localhost/ZeEat/zefrontend/img/`}/>
        </div>
        :
        <div>En cours</div>
      }
    </div>
  )


export default ProjectBody
