import '../../stylesheets/app.css';
import React from 'react'
import { Route } from 'react-router-dom'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'

import NavBarContainer from '../navbar/NavBarContainer'
import MainVideo from '../MainVideo/MainVideo'
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowTo/HowTo'
import QuestionForm from '../QuestionForm/QuestionForm'
import Balloons from '../Balloons/Balloons';
// import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'

function App() {
  return (
    <div className="main-content">
      <NavBarContainer />
      <Route exact path="/" component={MainVideo} />
      {/* <ParallaxLayer 
        offset={0}
        speed={0.5}
      >
        <Balloons />
      </ParallaxLayer> */}
      <Route exact path="/" component={InfoSection} />
      <Route exact path="/" component={HowToSection} />
      <Route path="/" component={QuestionForm} />
    </div>
  );
}

export default App;
