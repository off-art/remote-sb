import React from 'react'

import './Device.scss'

export default function Device({ isPower, pic, name }) {
  return (
    <div className={ isPower ? 'activeDevice' : 'deactivedevice'} >
      <img style={{ width: '128px' }} src={pic} alt={name} />
    </div>
  )
}
