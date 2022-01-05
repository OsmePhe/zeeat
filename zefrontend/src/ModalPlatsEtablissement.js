import React, { Component } from 'react'

const ModalPlatsEtablissement = ({ dataEtablissement,selectedPlat,closeModalPlat,closeModalPlatRecap,incrementValue,decrementValue,addCommandeModal,flagPlat}) => (
    <div id="myModal" className="modal">
      {flagPlat === "1"?
        <form className="modal-content" action="" method="POST">
        <span className="close" onClick={closeModalPlat}>&times;</span>
        <div className="" id="error_container_modal"></div>
        <div className="">
        <h1 className="titleModalPlat">{selectedPlat.plats_etablissement}</h1>
        <div className="subTitleModalPlat">{selectedPlat.plats_compositions}</div>
        {JSON.parse(selectedPlat.plats_options).options.map(function(item, index) {
          return(
              <div className={`catg${index}`} key={index} data-key={index}>
                <hr/>
                <div className="containerCatg">
                  <div className="catg">{item.categorie}</div>
                  {/*item.obligatoire  &&<div className="required">Obligatoire</div>*/}
                </div>
                <div className="containerChoix">
                  {item.choix.map(function(item1, index1) {
                  return(
                      <div className={`choixAccompagnement ${index}`} key={index1} data-key={index1}>
                        <input type="radio" id={`itemChoix${index}${index1}`} name={`itemChoix${index}`} value={item1} onChange={()=>{}} required={`${item.obligatoire && index1===0 ?`required` : ``}`}/>
                        <label>{item1}</label>
                      </div>
                      )
                    })
                  }
                </div>
              </div>
              )
            })
          }
        <div id="divBtnSendLivrable">
          <div className="input-group quantity_class" id="divAddPlusMinus">
            <input type="button" value="-" className="button-minus" data-field="quantity" onClick={decrementValue}/>
            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" onChange={()=>{}}/>
            <input type="button" value="+" className="button-plus" data-field="quantity" onClick={incrementValue}/>
          </div>

          <button id="btn-add-commande" type="button" className="btn btn-primary" onClick={addCommandeModal}>
            Ajouter à la commande
          </button>
          <label>1500 FCFA</label>
          </div>
        </div>
        </form> :
        <form className="modal-content" action="" method="POST">
          <span className="close" onClick={closeModalPlatRecap}>&times;</span>
          <div className="" id="error_container_modal-recap"></div>
          <div className="">
          <h1 className="titleModalPlat">Votre commande</h1>
          <h4>Préparée par {dataEtablissement.dataEtablissement.nom_etablissement}</h4>
          {dataEtablissement.commande.map(function(item, index) {
          return(
            <div>
              <h5>{selectedPlat.plats_etablissement}5 fcfa</h5>
              <ul>
                <li className={`choixplat${index}`} key={index} data-key={index}>{item} {dataEtablissement.qtcommande[index]}</li>
              </ul>
              {/*<h5 className={`choixplat${index}`} key={index} data-key={index}>{item} {dataEtablissement.qtcommande[index]} Prix :</h5>*/}
            </div>
          )
         })   
          }
          <div className="subTitleModalPlat">{}</div>
            {}
          </div>
        </form>
        }
    </div>
)




export default ModalPlatsEtablissement