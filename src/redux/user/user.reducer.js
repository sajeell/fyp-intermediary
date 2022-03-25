import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  currentUser: null,
  userDetail: null,
  token: null,
  userType: null,
  error: {},
  response: {},
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case ActionsType.SET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      }
    case ActionsType.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case ActionsType.SET_USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      }
    case ActionsType.API_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case ActionsType.API_SUCCESS:
      return {
        ...state,
        response: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
