import React, { useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NoLogin from './components/Header/NoLogin'

const App = () => {
  return(
    <BrowserRouter>
    <Header/>
    <NoLogin/>
      <Switch>
        <Route path="/"/>
      </Switch>
    </BrowserRouter>

  )
}

export default App