import '../../stylesheets/app.css';
import React from 'react'
import { Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import NavBarContainer from '../navbar/NavBarContainer'
import MainVideo from '../MainVideo/MainVideo'
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowTo/HowTo'
// import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'

function App() {
  return (
    <ParallaxProvider>
      <div className="main-content">
        <NavBarContainer />
        <Route exact path="/" component={MainVideo} />
        <Route exact path="/" component={InfoSection} />
        <Route exact path="/" component={HowToSection} />
        {/* <Route path="/" component={QuestionForm} /> */}
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
    </ParallaxProvider>
  );
}

export default App;
