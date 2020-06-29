import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Links() {
  const locations = useSelector((state) => state.Reducer.locations)
  
  return (
    <div>
      <h1 className="App__title">Location Selection</h1>
      <div className="App__wrapper">
        <div className="App__list">
          <ul>
            {locations.map((loc) => {
              const { name, img, id } = loc
              
              return (
                <li key={id}>
                  <Link to={name}>
                    <img
                      style={{ height: '256px' }}
                      src={`http://localhost:3001/${img}`}
                      alt={name}
                    />
                  </Link>
                  <span>{name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
