import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeLocations,
  buttonChanger,
  changeDevices,
} from '../../redux/actions/actions'

import Location from '../../components/Location'
import { buttonsHome, buttonsGarage } from '../../components/Buttons'
import { devicesHome, divicesGarage } from '../../components/DevicesBd'

export default function Garage(props) {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.Reducer.location)

  useEffect(() => {
    let url = props.match.params.room
    dispatch(changeLocations(url))
    if (url === 'home') {
      dispatch(buttonChanger(buttonsHome))
      dispatch(changeDevices(devicesHome))
    }
    if (url === 'garage') {
      dispatch(buttonChanger(buttonsGarage))
      dispatch(changeDevices(divicesGarage))
    }
  }, [dispatch, props.match.params.room])

  const Garage = {
    background: '#eff6ff',
  }
  const Home = {
    background: '#f4f4f4',
  }

  return <Location data={location === 'home' ? Home : Garage} />
}
