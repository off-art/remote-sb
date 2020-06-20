import React from 'react'
import Location from '../../components/Location'
import Light from '../../components/Light'
import Gate from '../../components/Gate'
import Washer from '../../components/Washer'
import Tv from '../../components/Tv'

import './garage.scss'

export default function Garage() {
  return (
    <Location
      Tv={Tv}
      Gate={Gate}
      Light={Light}
      Washer={Washer}
      location={'Garage'}
      background={'#eff6ff'}
    />
  )
}
