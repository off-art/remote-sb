import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ButtonCreate(props) {

  const [button, setButton] = useState({
    power: false,
    volume: false,
    isopen: false,
  })
  const { power, isopen, volume } = button

  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    axios
      .post('http://localhost:3001/buttonstatus', {
        id: props.match.params.id,
      })
      .then((response) => setButton(response.data.data))
  }, [props.match.params.id])

  useEffect(() => {
    if (isChange) {
      axios.post('http://localhost:3001/setbuttons', {
        isChange,
        id: props.match.params.id,
      })
    }
  }, [isChange, props.match.params.id])

  return (
    <div>
      <div className="wrap_chackBox">
        <input
          onChange={() => {
            setButton({ ...button, power: !power })
            setIsChange({
              power: !button.power,
              type: 'power',
            })
          }}
          checked={power}
          type="checkbox"
          id="power"
        />
        <label htmlFor="power">Power</label>

        <input
          onChange={() => {
            setButton({ ...button, isopen: !isopen })
            setIsChange({
              isopen: !button.isopen,
              type: 'isopen',
            })
          }}
          checked={isopen}
          type="checkbox"
          id="isOpen"
        />
        <label htmlFor="isOpen">Open</label>

        <input
          onChange={() => {
            setButton({ ...button, volume: !volume })
            setIsChange({
              volume: !button.volume,
              type: 'volume',
            })
          }}
          checked={volume}
          type="checkbox"
          id="volume"
        />
        <label htmlFor="volume">Volume</label>
      </div>
    </div>
  )
}
