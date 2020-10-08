import React, { useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginHeader from './components/Header/LoginHeader'
import Login from './components/Login/Login'

const App = () => {
  const [isLoggedin, setisLoggedin] = useState(true);
  const onLogin = () => {
      setisLoggedin(!isLoggedin);
  }
  return(
    <BrowserRouter>
    <Header/>
    <LoginHeader/>
        <Route path="/"/>
        <Route path="/login" component={Login}/>
    </BrowserRouter>

  )
}

export default App