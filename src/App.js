import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Email from './components/Email'
//import About from './components/About'
//import Post from './components/Pass'

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route path='/email' component={Email} />
      </main>
    </div>
  </Router>
)

export default App

/*import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
