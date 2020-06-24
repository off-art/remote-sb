import React from 'react'
import Remote from '../../assets/img/remote-control.svg'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import './Device.scss'

export default function Device({ power, pic, name, id, open, volume }) {
  return (
    <div>
    {console.log(open)}
      <span className={cn({
        openDoor: open,
        closeDoor: !open,
      })}>Дверь открыта</span>
      <div
        className={cn({
          activeDevice: power,
          deactivedevice: !power,
          
          volume: volume,
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
    </div>
  )
}
