import React, { useState } from 'react'

import GateSVG from '../../assets/img/internet-of-things.svg'

export default function Gate() {
  const [active, setActive] = useState('')
  return (
    <div className={active} onClick={() => setActive('active')}>
      <img style={{width: '48px'}} src={GateSVG} alt="gate"/>
    </div>
  )
}
