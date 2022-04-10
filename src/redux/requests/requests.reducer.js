import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  requests: [],
}

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      }

    default:
      return state
  }
}

export default requestReducer
