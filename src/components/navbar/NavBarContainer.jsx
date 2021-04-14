import { connect } from 'react-redux'
import NavBar from './NavBar'

const mapStateToProps = (state, ownProps) => {

  return {
    path: ownProps.loc,
    user: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)