import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import home from './home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Account from './Account'
import applyEtablissement from './applyEtablissement'
import PlatsEtablissement from './PlatsEtablissement'
import Etablissement from './Etablissement'
import RecapitulatifCommande from './RecapitulatifCommande'
import './App.css';

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/home" component={home}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/SignIn" component={SignIn}/>
        <Route exact path="/Account" component={Account}/>
        <Route exact path="/applyEtablissement" component={applyEtablissement}/>
        <Route exact path="/PlatsEtablissement" component={PlatsEtablissement}/>
        <Route exact path="/Etablissement" component={Etablissement}/>
        <Route exact path="/RecapitulatifCommande" component={RecapitulatifCommande}/>
        {/*<Route component={NotFound} />
        <Route path="/chatbox/user/:user" component={ChatBoxComponent}/>*/}
    </Switch>
);

export default AppRouter;