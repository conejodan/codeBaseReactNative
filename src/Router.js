import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="app">
            <Scene key="auth" initial>
              <Scene key="login" component={LoginForm} title="login"  hideNavBar/>
            </Scene>
            <Scene key="inside">
              <Scene key="dashboard" component={Dashboard} title="dashboard" hideNavBar/>
            </Scene>
        </Scene>
      </Router>
    );
  };
  
  export default RouterComponent;