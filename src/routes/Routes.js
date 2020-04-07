import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Login } from './../pages/Login';
import { Register } from './../pages/Register';
import { Home } from './../pages/Home';

import { AuthContext } from './../context/AuthState';

export const Routes = () => {
  const { user } = useContext(AuthContext);

  const ProtectedAuth = ({ component: Component, ...rest}) => (
      <Route {...rest}
      render={props => Object.keys(user).length > 0 ? ( <Component {...props} />)
            : ( <Redirect to={{pathname:'/', state: {from: props.location}}} />)}
      /> );

  const Auth = ({ component: Component, ...rest}) => (
      <Route {...rest}
      render={props => Object.keys(user).length === 0 ? ( <Component {...props} />)
            : ( <Redirect to={{pathname:'/home', state: {from: props.location}}} />)}
      /> );

  return (<Router>
    <Switch>
    <Auth exact path="/" component={Login} />
    <Auth path="/register" component={Register} />
    <ProtectedAuth path="/home" component={Home} />
    </Switch>
  </Router>)
}
