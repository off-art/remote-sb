import React from 'react'
import Remote from '../Remote'
import './Location.scss'

export default function Location({
  location,
  background,
  Tv,
  Light,
  Gate,
  Washer,
  Kettle,
}) {
  return (
    <div
      style={{ backgroundColor: background }}
      className="location location__window"
    >
      <div className="location__remote">
        <h1>Remote control Panel</h1>
        <hr />
        <Remote />
      </div>
      <div className="location__plan">
        <h1>{`Plan ${location}`}</h1>
        <hr />
        <div className="location__elements">
          {Tv && <Tv />}
          {Light && <Light />}
          {Gate && <Gate />}
          {Washer && <Washer />}
          {Kettle && <Kettle />}
        </div>
      </div>
    </div>
  )
}
