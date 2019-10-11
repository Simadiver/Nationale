import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Inscription from '../Pages/Inscription';
import Contact from '../Pages/Contact';
import Partenaires from '../Pages/Partenaires';
import Evenements from '../Pages/Evenements';
import Hebergements from '../Pages/Hebergements';
import ListeDeDepart from '../Pages/ListedeDepart';
import Resultats from '../Pages/Resultats';
import Galery from '../Pages/Galery';


const BASE_PATH = "/";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={BASE_PATH}>
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/hebergements" exact component={Hebergements} />
          <Route path="/listeDeDepart" exact component={ListeDeDepart} />
          <Route path="/Resultats" exact component={Resultats} />
          <Route path="/partenaires" exact component={Partenaires} />
          <Route path="/evenements" exact component={Evenements} />
          <Route path="/gallery" exact component={Galery} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;