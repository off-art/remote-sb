import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Room } from './pages'
import { Links } from './components'

import './App.scss'

function App() {
  const route = (
    <Switch>
      <Route exact path="/" component={Links} />
      <Route exact path="/:room" component={Room} />
    </Switch>
  )

  return <div className="App">{route}</div>
}

export default App
