import { BTN_CHANGE, CHANGE_LOCATION, CHANGE_DEVICES } from './actionsType'

export function buttonChanger(arr) {
  return {
    type: BTN_CHANGE,
    payload: arr,
  }
}

export function changeLocations(location) {
  return {
    type: CHANGE_LOCATION,
    payload: location,
  }
}

export function changeDevices(arr) {
  return {
    type: CHANGE_DEVICES,
    payload: arr,
  }
}
