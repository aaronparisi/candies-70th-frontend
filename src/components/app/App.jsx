import '../../stylesheets/app.css';
import React from 'react'
import { Route } from 'react-router-dom'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'

import NavBarContainer from '../navbar/NavBarContainer'
import MainVideo from '../MainVideo/MainVideo'
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowTo/HowTo'
import QuestionForm from '../QuestionForm/QuestionForm'
import RSVPFormContainer from '../RSVP/RSVPFormContainer'
// import Balloons from '../Balloons/Balloons';
import InspoContainer from '../Inspo/InspoContainer';
import Directions from '../Directions/Directions';
// import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'

function App() {
  
  return (
    <React.Fragment >
      <Route exact path="/:user/(inspo|parking)?/rsvp" component={RSVPFormContainer} />
      <Route exact path="/:user/([r][s][v][p])?" component={MainVideo} />
      {/* <ParallaxLayer 
        offset={0}
        speed={0.5}
        >
        <Balloons />
      </ParallaxLayer> */}
      <Route exact path="/:user/([r][s][v][p])?" component={InfoSection} />
      <Route exact path="/:user/([r][s][v][p])?" component={HowToSection} />
      
      <Route exact path="/:user/inspo/([r][s][v][p])?" component={InspoContainer} />
      <Route exact path="/:user/directions/([r][s][v][p])?" component={Directions} />

      <Route path="/:user/([r][s][v][p])?" component={QuestionForm} />
      <NavBarContainer loc={window.location.pathname} />
      {/* i want the nav bar to render AFTER everything else so it can 
          base its color on the entirety of the page's content 
      */}
    </React.Fragment>
    
  );
}

export default App;