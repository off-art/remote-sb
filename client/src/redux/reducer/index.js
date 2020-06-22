import {
  BTN_CHANGE,
  CHANGE_LOCATION,
  CHANGE_DEVICES,
  CHANGE_LOCATIONS,
  CHECK_POWER,
} from '../actions/actionsType'

const initialState = {
  buttons: false,
  location: [],
  devices: [],
  locations: [],
}

const state = (state = initialState, action) => {
  switch (action.type) {
    case BTN_CHANGE:
      return {
        ...state,
        buttons: action.payload,
      }
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      }
    case CHANGE_DEVICES:
      return {
        ...state,
        devices: action.payload,
      }
    case CHANGE_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      }
    case CHECK_POWER:
      return {
        ...state,
        devices: action.payload,
      }
    default:
      break
  }
  return state
}
export default state
