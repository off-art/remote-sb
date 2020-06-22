import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getLocation } from './redux/actions/actions'
import { Room } from './pages'
import { Links, ButtonCreate } from './components'

import './App.scss'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocation())
  },[dispatch])
  
  const route = (
    <Switch>
      <Route exact path="/" component={Links} />
      <Route exact path="/:room" component={Room} />
      <Route exact path="/create/btn/:id" component={ButtonCreate} />
    </Switch>
  )

  return <div className="App">{route}</div>
}

export default App
