function registrationRequested() {
  return {
    type: REGISTRATION_REQUESTED,
  }
}

function registrationSuccess() {
  return {
    type: REGISTRATION_SUCCESS,
  }
}

function registrationError(error) {
  return {
    type: REGISTRATION_ERROR,
    error,
  }
}

export function registerUser({ email, password }) {
  return (dispatch) => {
    dispatch(registrationRequested()).catch(function (error) {
      // Handle Errors here.
      //var errorCode = error.code
      //var errorMessage = error.message
      dispatch(registrationError(error))
      // ...
    })
  }
}

export const REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
