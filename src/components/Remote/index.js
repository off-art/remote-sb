import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Remote.scss'
import { buttonChanger, changeDevices } from '../../redux/actions/actions'
function Remote() {
  const dispatch = useDispatch()
  const buttons = useSelector((state) => state.Reducer.buttons)
  const devices = useSelector((state) => state.Reducer.devices)

  const buttonHandler = (index) => {
    const arr = [...buttons]
    const arrDev = devices.map((dev) =>
      dev.id === arr[index].controlId ? arr[index].action(dev) : dev,
    )
    arr[index].isWorks = !arr[index].isWorks
    dispatch(buttonChanger(arr))
    dispatch(changeDevices(arrDev))
  }

  return (
    <div className="remote remote__wrapper">
      {buttons &&
        buttons.map((btn, index) => {
          const { name, isWorks, count } = btn
          return (
            <div
              style={isWorks ? { backgroundColor: 'red' } : null}
              key={index}
              onClick={() => buttonHandler(index)}
            >
              <input
                className="remote__button"
                type="button"
                value={name}
                count={count}
              />
            </div>
          )
        })}
    </div>
  )
}
export default Remote
