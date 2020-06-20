import React from 'react'

import './Remote.scss'

export default function Remote() {
  const buttons = [
    { name: 'Power TV', isWorks: false },
    { name: 'Vol+', count: 10 },
    { name: 'Vol-', count: 10 },
    { name: 'Power Gate', isWorks: false },
    { name: 'Power Kettle', isWorks: false },
    { name: 'Power Light', isWorks: false },
    { name: 'Power Tv', isWorks: false },
    { name: 'Power Washer', isWorks: false },
  ]

  return (
    <div className="remote remote__wrapper">
      {buttons &&
        buttons.map((btn) => {
          const { name, isWorks, count } = btn
          return (
            <div>
              <input
                className="remote__button"
                type="button"
                value={name}
                isWorks={isWorks}
                count={count}
              />
            </div>
          )
        })}
    </div>
  )
}
