import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import Archivedetails from './pages/Archivedetails' 
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/archive'>
          <Archive />
        </Route>
        <Route path='/archives/:id'>
          <Archivedetails />
        </Route> 
      </Switch>
    </Router>
  )
}

export default App
