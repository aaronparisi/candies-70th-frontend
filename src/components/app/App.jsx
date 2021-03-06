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
import PortalContainer from '../Portal/PortalContainer'
import LoginContainer from '../Login/LoginContainer';
// import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'

function App() {

  return (
    <React.Fragment >
      <Route exact path="/(inspo|parking|directions|portal)?/rsvp" component={RSVPFormContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/([r][s][v][p])?" component={MainVideo} />
      {/* <ParallaxLayer 
        offset={0}
        speed={0.5}
        >
        <Balloons />
      </ParallaxLayer> */}
      <Route exact path="/([r][s][v][p])?" component={InfoSection} />
      <Route exact path="/([r][s][v][p])?" component={HowToSection} />
      
      <Route exact path="/inspo/([r][s][v][p])?" component={InspoContainer} />
      <Route exact path="/directions/([r][s][v][p])?" component={Directions} />
      <Route exact path="/portal/([r][s][v][p])?" component={PortalContainer} />

      <Route path="/([r][s][v][p])?" component={QuestionForm} />
      <NavBarContainer />
    </React.Fragment>
    
  );
}

export default App;