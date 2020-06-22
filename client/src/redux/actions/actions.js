import {
  BTN_CHANGE,
  CHANGE_LOCATION,
  CHANGE_DEVICES,
  CHANGE_LOCATIONS,
} from './actionsType'
import axios from 'axios'

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
export function getDevices(id) {
  return (dispatch) => {
    axios
      .post('http://localhost:3001/getdevices', {
        id,
      })
      .then((responce) => dispatch(changeDevices(responce.data.data)))
  }
}
export function changeLocation(locations) {
  return {
    type: CHANGE_LOCATIONS,
    payload: locations,
  }
}

export function getLocation() {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/')
      .then((responce) => dispatch(changeLocation(responce.data.data)))
  }
}

export function powerChange(id, state) {
  return () => {
    axios.post('http://localhost:3001/pushbutton', {
      id,
      state,
    })
  }
}
