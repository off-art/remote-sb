import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  // buttonChanger,
  changeDevices,
  powerChange,
} from '../../redux/actions/actions'

import './Remote.scss'

function Remote() {
  const dispatch = useDispatch()
  // const buttons = useSelector((state) => state.Reducer.buttons)
  const devices = useSelector((state) => state.Reducer.devices)

  const [btns, setBtn] = useState(false)

  // const buttonHandler = (index) => {
  //   const arr = [...buttons]
  //   const arrDev = devices.map((dev) =>
  //     dev.id === arr[index].controlId ? arr[index].action(dev) : dev,
  //   )
  //   arr[index].isWorks = !arr[index].isWorks
  //   dispatch(buttonChanger(arr))
  //   dispatch(changeDevices(arrDev))
  // }

  useEffect(() => {
    if (devices.length > 0) {
      axios
        .post('http://localhost:3001/getbuttons', {
          devices,
        })
        .then((res) => setBtn(res.data.data))
    }
    return () => {
      if (devices.length > 0) {
        dispatch(changeDevices([]))
      }
    }
  }, [devices, dispatch])

  return (
    <div className="remote remote__wrapper">
      {devices.map((dev) => {
        return (
          <div key={dev.id}>
          <span>{dev.name}</span>
          <div className='remote__buttons'  >
            

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
                }}
                type="button"
                value="Power"
              />
            ) : null}
            {btns && btns[dev.id].isopen ? (
              <input
                onClick={() => {
                  dispatch(powerChange(dev.id, !btns[dev.id].stateIsOpen))
                  let test = dev.id
                  setBtn({
                    ...btns,
                    [test]: {
                      ...btns[test],
                      stateIsOpen: !btns[dev.id].stateIsOpen
                    },
                  })
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
              <input className={
                  btns[dev.id].stateVolume
                    ? ' remote__button activebutton'
                    : 'remote__button disableButton'
                } 
                onClick={() => {
                  dispatch(powerChange(dev.id, !btns[dev.id].stateVolume))
                  let test = dev.id
                  setBtn({
                    ...btns,
                    [test]: {
                      ...btns[test],
                      stateVolume: !btns[dev.id].stateVolume
                    },
                  })
                }}
                type="button" value="Volume"/>
            ) : null}
          </div>
          </div>
        )
      })}
    </div>
  )
}
export default Remote
