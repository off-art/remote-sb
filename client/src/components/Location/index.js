import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Remote from '../Remote'
import Device from '../../components/Device'

import './Location.scss'

export default function Location() {
  const devices = useSelector((state) => state.Reducer.devices)
  const location = useSelector((state) => state.Reducer.location)

  return (
    <>
      <Link to="/">
        <input className="remote__button button" type="button" value="Home" />
      </Link>

      <h1 style={{ textTransform: 'uppercase', fontSize: '50px' }}>
        {location}
      </h1>
      <div
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
                const { id, pic, name, power, open, volume } = dev
                return (
                  <Device
                    power={power}
                    pic={pic}
                    name={name}
                    key={id}
                    id={id}
                    open={open}
                    volume={volume}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
