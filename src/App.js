import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Header from './components/Header'
import Email from './components/Email'
import Confirm from './components/Confirmation'

const App = () => (
  <Router>
    <div>
      <main>
        <Route exact path='/' component={Email} />
        <Route exact path='/confirm' component={Confirm} />
      </main>
    </div>
  </Router>
)

export default App
