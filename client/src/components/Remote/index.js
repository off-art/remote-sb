import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  // buttonChanger,
  changeDevices,
  powerChange,
  checkPower,
} from '../../redux/actions/actions'

import './Remote.scss'

function Remote() {
  const dispatch = useDispatch()
  // const buttons = useSelector((state) => state.Reducer.buttons)
  const devices = useSelector((state) => state.Reducer.devices)
  const reduser = useSelector((state) => state.Reducer)

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
  const [test, settest] = useState([])

  const buttonHandler = (id) => {
    const arr = [...devices]
    const test = arr.map((dev) => {
      return dev.id === id
        ? { ...dev, power: !dev.power }
        : { ...dev, power: dev.power }
    })
    settest(test)

    console.log('-->' , test)
    // dispatch(checkPower(test))
  }
  useEffect(() => {
    if(test.length > 0) {
      dispatch(checkPower(test))
    }
  }, [test])

  const hendleClick = (dev) => {
    dispatch(powerChange(dev.id, !btns[dev.id].statePower))
    setBtn({
      ...btns,
      [dev.id]: {
        ...btns[dev.id],
        statePower: !btns[dev.id].statePower,
      },
    })
    buttonHandler(dev.id)
  }

  useEffect(() => {
    if (devices.length > 0) {
      axios
        .post('http://localhost:3001/getbuttons', {
          devices,
        })
        .then((res) => setBtn(res.data.data))
    }
  //   return () => {
  //     if (reduser) {
  //       dispatch(changeDevices([]))
  //     }
  //   }
   }, [devices, dispatch, reduser])

  return (
    <div className="remote remote__wrapper">
      {/* {console.log(btns)} */}
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
                  onClick={() => hendleClick(dev)}
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
                        stateIsOpen: !btns[dev.id].stateIsOpen,
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
                <input
                  className={
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
                        stateVolume: !btns[dev.id].stateVolume,
                      },
                    })
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
