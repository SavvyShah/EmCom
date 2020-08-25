import {
  REGISTRATION_REQUESTED,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS
} from '../actions/registrationActions'

const initialState = {
  completed: false,
  requested: false,
  error: {}
}

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_REQUESTED:
      return { ...state, requested: true }
    case REGISTRATION_ERROR:
      return { ...state, error: action.error }
    case REGISTRATION_SUCCESS:
      return { completed: true, requested: true, error: {} }
    default:
      return { ...state }
  }
}

export default registrationReducer
