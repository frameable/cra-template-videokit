import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import VideoCall from './VideoCall'

import 'knopf.css'

export default function App() {
  const callId = Math.random().toString(36).substring(7);

  return (
    <Router hashType="noslash">
      <Switch>
        <Route exact path="/">
          <Link className="knopf huge wide pale traced" to={callId}>Start a call</Link>
        </Route>

        <Route path="/:callId">
          <VideoCall />
        </Route>
      </Switch>
    </Router>
  )
}
