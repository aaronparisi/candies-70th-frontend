import { connect } from 'react-redux'
import { logoutCurrentUser } from '../../actions/session_actions'
import NavBar from './NavBar'

const mapStateToProps = (state, ownProps) => {

  return {
    path: ownProps.loc,
    user: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutCurrentUser: () => dispatch(logoutCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)