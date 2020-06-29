import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  powerChange,
  checkPower,
  openChange,
  volumeChange,
  // changeDevices,
} from '../../redux/actions/actions'

import './Remote.scss'

function Remote() {
  const dispatch = useDispatch()
  const devices = useSelector((state) => state.Reducer.devices)
  const [btns, setBtn] = useState(false)
  const [test, settest] = useState([])

  const buttonHandler = (id, key) => {
    const arr = [...devices].map((dev) => {
      return dev.id === id
        ? { ...dev, [key]: !dev[key] }
        : { ...dev, [key]: dev[key] }
    })
    settest(arr)
  }
  const handleClickPower = (dev) => {
    dispatch(powerChange(dev.id, !btns[dev.id].statePower))
    buttonHandler(dev.id, 'power')
  }
  const handleClickOpen = (dev) => {
    dispatch(openChange(dev.id, !btns[dev.id].stateIsOpen))
    buttonHandler(dev.id, 'isopen')
  }
  const handleClickVolume = (dev) => {
    dispatch(volumeChange(dev.id, !btns[dev.id].stateVolume))
    buttonHandler(dev.id, 'volume')
  }

  useEffect(() => {
    if (test.length > 0) {
      dispatch(checkPower(test))
    }
  }, [dispatch, test])

  useEffect(() => {
    if (devices.length > 0) {
      axios
        .post('http://localhost:3001/getbuttons', {
          devices,
        })
        .then((res) => setBtn(res.data.data))
    }
    // return () => {
    //   if (devices.length === 0) {
    //     dispatch(changeDevices([]))
    //   }
    // }
  }, [devices])

  return (
    <div className="remote remote__wrapper">
      {devices.map((dev) => {
        return (
          <div key={dev.id}>
            <span>{dev.name}</span>
            <div className="remote__buttons">
            
              {btns && btns[dev.id].power ? (
                <input
                  className={
                    btns[dev.id].statePower
                      ? ' remote__button activebutton'
                      : 'remote__button disableButton'
                  }
                  onClick={() => handleClickPower(dev)}
                  type="button"
                  value="Power"
                />
              ) : null}

              {btns && btns[dev.id].isopen ? (
                <input
                  onClick={() => handleClickOpen(dev)}
                  className={
                    btns[dev.id].stateIsOpen
                      ? ' remote__button activebutton'
                      : 'remote__button disableButton'
                  }
                  type="button"
                  value="Open"
                />
              ) : null}

              {btns && btns[dev.id].volume ? (
                <input
                  className={
                    btns[dev.id].stateVolume
                      ? ' remote__button activebutton'
                      : 'remote__button disableButton'
                  }
                  onClick={() => handleClickVolume(dev)}
                  type="button"
                  value="Volume"
                />
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Remote
