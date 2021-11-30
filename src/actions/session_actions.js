import * as SessionUtil from '../utils/session_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

// thunks

export const createNewUser = formUser => dispatch => {
  return SessionUtil.postUser(formUser)
  .then(
    newUser => {
      dispatch(receiveCurrentUser(newUser.data))
    },
    err => {
      return Promise.reject(err)
    }
  )
}

export const login = formUser => dispatch => {
  return SessionUtil.postSession(formUser)
  .then(curUser => {
      dispatch(receiveCurrentUser(curUser.data))
      return curUser
    }
  )
}

export const logout = () => dispatch => {
  console.log('about to log out')
  return SessionUtil.deleteSession()
  .then(
    logoutMsg => {
      dispatch(logoutCurrentUser())
    },
    err => {
      console.log('error with api delete')
      console.log(err)
    }
  )
}

export const fetchCurrentUser = () => dispatch => {
  return SessionUtil.getCurrentUser()
  .then(
    currentUser => {
      if (currentUser.data !== '') {
        dispatch(receiveCurrentUser(currentUser.data))
      }
      return currentUser
    },
    err => {
      console.log('error fetching current user')
    }
  )
}

export const deleteUser = userId => dispatch => {
  return dispatch(logout())
  .then(() => {
    SessionUtil.deleteUser(userId)
  })
  .catch(err => {
    console.log('err deleting user')
  })
}