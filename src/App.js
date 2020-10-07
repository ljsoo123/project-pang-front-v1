import React, { useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/"  />
      </Switch>
    </BrowserRouter>

  )
}

export default App