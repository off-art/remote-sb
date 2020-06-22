import React from 'react'
import Remote from '../../assets/img/remote-control.svg'
import './Device.scss'
import { Link } from 'react-router-dom'

export default function Device({ power, pic, name, id }) {
  return (
    <div className={power ? 'activeDevice' : 'deactivedevice'}>
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
  )
}
