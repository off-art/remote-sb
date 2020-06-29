import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import Remote from '../../assets/img/remote-control.svg'

import './Device.scss'

export default function Device({ power, pic, name, id, open, volume }) {
  return (
    <div>
      <span
        className={cn({
          openDoor: open,
          closeDoor: !open,
        })}
      >
        {open ? 'Дверь открыта' : 'Дверь закрыта'}
      </span>
      <div
        className={cn({
          activeDevice: power,
          deactivedevice: !power,
        })}
      >
        <img
          style={{ width: '128px' }}
          src={`http://localhost:3001/${pic}`}
          alt={name}
        />

        <Link to={`create/btn/${id}`}>
          <img
            style={{
              position: 'absolute',
              width: '64px',
              right: '-50px',
              top: '30%',
            }}
            src={Remote}
            alt="Remote"
          />
        </Link>
      </div>
      <span className={
        cn({
          openDoor: volume,
          closeDoor: !volume
        })
      }>Volume On</span>
    </div>
  )
}
