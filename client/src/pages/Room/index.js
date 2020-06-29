import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  changeLocations,
  getDevices,
} from '../../redux/actions/actions'
import Location from '../../components/Location'


export default function Room(props) {
  const dispatch = useDispatch()
  const locations = useSelector((state) => state.Reducer.locations)

  useEffect(() => {
    dispatch(changeLocations(props.match.params.room))
    if (locations.length > 0) {
      let url = props.match.params.room
      let id = locations.filter((elem) => elem.name === url)
      dispatch(getDevices(id[0].id))
    }
  }, [dispatch, locations, props.match.params.room])

  return <Location  />
}
