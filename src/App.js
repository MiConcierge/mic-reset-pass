import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Header from './components/Header'
import Email from './components/Email'

const App = () => (
  <Router>
    <div>
      <main>
        <Route path='/' component={Email} />
      </main>
    </div>
  </Router>
)

export default App
