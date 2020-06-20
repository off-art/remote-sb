import React from 'react'
import Location from '../../components/Location'
import Tv from '../../components/Tv'
import Kettle from '../../components/Kettle'
import Light from '../../components/Light'

import './home.scss'

export default function Home() {
  return (
    <Location
      Light={Light}
      Tv={Tv}
      Kettle={Kettle}
      location={'Home'}
      background={'#f4f4f4'}
    />
  )
}
