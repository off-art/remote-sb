import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  powerChange,
  checkPower,
  openChange,
  // changeDevices,
} from '../../redux/actions/actions'

import './Remote.scss'

function Remote() {
  const dispatch = useDispatch()
  const devices = useSelector((state) => state.Reducer.devices)

  const [btns, setBtn] = useState(false)
  const [test, settest] = useState([])

  const buttonHandlerPower = (id) => {
    const arr = [...devices].map((dev) => {
      return dev.id === id
        ? { ...dev, power: !dev.power }
        : { ...dev, power: dev.power }
    })
    settest(arr)
  }
  const buttonHandlerOpen = (id) => {
    const arr = [...devices].map((dev) => {
      return dev.id === id
      ? { ...dev, open: !dev.open }
      : { ...dev, open: dev.open }
    })
    settest(arr)
  }
  const buttonHandlerVolume = (id) => {
    const arr = [...devices].map((dev) => {
      return dev.id === id
        ? { ...dev, volume: !dev.volume }
        : { ...dev, volume: dev.volume }
    })
    settest(arr)
  }

  useEffect(() => {
    if (test.length > 0) {
      dispatch(checkPower(test))
    }
  }, [test])

  useEffect(() => {
    if (devices.length > 0) {
      axios
        .post('http://localhost:3001/getbuttons', {
          devices,
        })
        .then((res) => setBtn(res.data.data))
    }
    // return () => {
    //   if (location.length === 0) {
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
                  onClick={() => {
                    dispatch(powerChange(dev.id, !btns[dev.id].statePower))
                    let test = dev.id
                    setBtn({
                      ...btns,
                      [test]: {
                        ...btns[test],
                        statePower: !btns[dev.id].statePower,
                      },
                    })
                    buttonHandlerPower(dev.id)
                  }}
                  type="button"
                  value="Power"
                />
              ) : null}

              
              {btns && btns[dev.id].isopen ? (
                <input
                  onClick={() => {
                    let test = dev.id
                    setBtn({
                      ...btns,
                      [test]: {
                        ...btns[test],
                        stateIsOpen: !btns[dev.id].stateIsOpen,
                      },
                    })
                    dispatch(openChange(dev.id, !btns[dev.id].stateIsOpen))
                    buttonHandlerOpen(dev.id) //визуал
                  }}
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
                  onClick={() => {
                    // dispatch(powerChange(dev.id, !btns[dev.id].stateVolume))
                    let test = dev.id
                    setBtn({
                      ...btns,
                      [test]: {
                        ...btns[test],
                        stateVolume: !btns[dev.id].stateVolume,
                      },
                    })
                    buttonHandlerVolume(dev.id)
                  }}
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
