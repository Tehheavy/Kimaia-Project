
import React, { useState, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter  
} from 'react-router-dom'
import Login from './pages/Login'
import Youtube from './pages/Youtube'
import Stats from './pages/Stats'
import Auth from './Auth'
import Signup from './pages/Signup'

console.log( Auth.isAuthenticated())
const AuthenticatedRoute = ({component:Component,...rest})=>(
  <Route {...rest} render ={(props)=>(
    Auth.isAuthenticated()===true
    ?<Component {...props}/>
    :<Redirect to='/login'></Redirect>
  )}/>
)

const UnAuthenticatedRoute = ({component:Component,...rest})=>(
  <Route {...rest} render ={(props)=>(
    Auth.isAuthenticated()===false
    ?<Component {...props}/>
    :<Redirect to='/'></Redirect>
  )}/>
)
const ProtectedRoute = ({component:Component,...rest})=>(
  <Route {...rest} render ={(props)=>(
    Auth.isAuthenticated()===true
    ?<Component {...props}/>
    :<Redirect to='/'></Redirect>
  )}/>
)

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/login'>Login page</Link></li>
          <li><Link to='/stats'>Protected Page</Link></li>
        </ul> 
          <Route exact path='/signup' component={Signup}></Route>
          <UnAuthenticatedRoute exact path='/login' component={Login}></UnAuthenticatedRoute>
          <AuthenticatedRoute exact path='/' component={Youtube}/>
          <ProtectedRoute exact path='/stats' component={Stats}/>
      </div>
    </Router>
  );
}

export default App;
