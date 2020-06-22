import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { powerChange, checkPower } from '../../redux/actions/actions'

import './Remote.scss'

function Remote() {
  const dispatch = useDispatch()
  const devices = useSelector((state) => state.Reducer.devices)
  const reduser = useSelector((state) => state.Reducer)

  const [btns, setBtn] = useState(false)
  const [test, settest] = useState([])

  const buttonHandler = (id) => {
    settest(
      [...devices].map((dev) => {
        return dev.id === id
          ? { ...dev, power: !dev.power }
          : { ...dev, power: dev.power }
      }),
    )
  }
  useEffect(() => {
    if (test.length > 0) {
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
