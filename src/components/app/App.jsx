import '../../stylesheets/app.css';
import React from 'react'
import { Route } from 'react-router-dom'

import NavBarContainer from '../navbar/NavBarContainer'
import MainVideo from '../MainVideo/MainVideo'
import InfoSection from '../InfoSection/InfoSection';
// import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'

function App() {
  return (
    <div className="main-content">
      <NavBarContainer />
      <Route path="/" component={MainVideo} />
      <Route path="/" component={InfoSection} />
    </div>
  );
}

export default App;
