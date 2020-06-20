import React from 'react'

import LampSvg from '../../assets/img/ceiling-lamp.svg'

import './light.scss'

export default function Light() {
  return (
    <div>
      <img style={{ width: '128px' }} src={LampSvg} alt="LampSvg" />
    </div>
  )
}
