import React from 'react'
import { useSelector } from 'react-redux'

import Remote from '../Remote'
import Device from '../../components/Device'

import './Location.scss'

export default function Location({ data }) {
  
  const devices = useSelector((state) => state.Reducer.devices)
  const location = useSelector((state) => state.Reducer.location)

  return (
    <div
      style={{ backgroundColor: data.background }}
      className="location location__window"
    >
      <div className="location__remote">
        <h1>Remote control Panel</h1>
        <hr />
        <Remote />
      </div>
      <div className="location__plan">
        <h1>{`Devices in the ${location}`}</h1>
        <hr />
        <div className="location__elements">
          {devices &&
            devices.map((dev) => {
              const { id, pic, name, isPower } = dev
              return <Device isPower={isPower} pic={pic} name={name} key={id} />
            })}
        </div>
      </div>
    </div>
  )
}
