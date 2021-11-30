import { connect } from 'react-redux'
import { receiveCurrentUser } from '../../actions/session_actions'
import Login from './Login'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)