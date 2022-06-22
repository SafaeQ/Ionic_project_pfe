import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Import Components */
import Home from './pages/Home';
import Menu from './components/Menu'
import LoginAsso from './components/Auth-Association/LoginAsso';
import LoginDonor from './components/Auth-Donor/LoginDonor';
import SignupDonor from './components/Auth-Donor/SignupDonor';
import SignupAssoc from './components/Auth-Association/SignupAssoc';
import DetailsProject from './components/projects/DetailsProject';
import AddProject from './components/projects/AddProject';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Board from './pages/Bord';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>

        <IonRouterOutlet id='menu'>
          <Route exact path="/home">
            <Home />
          </Route>
          
          <Route exact path="/projects/:id">
            <DetailsProject />
          </Route>
          
          <Route exact path="/create-project">
            <AddProject />
          </Route>

          <Route exact path="/login">
            <LoginAsso />
          </Route>
          
          <Route exact path="/signup">
            <SignupAssoc />
          </Route>
          
          <Route exact path="/signup-donor">
            <SignupDonor />
          </Route>

          <Route exact path="/login-donor">
            <LoginDonor />
          </Route>
          
          <Route exact path="/about">
            <AboutUs />
          </Route>
          
          <Route exact path="/services">
            <Services />
          </Route>
          
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          
          <Route exact path="/bord">
            <Board />
          </Route>
          
          <Route exact path="/">
            <Redirect to="/bord" />
          </Route>
        </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
