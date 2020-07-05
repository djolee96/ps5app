import React from 'react';
import './scss/main.css';
// pages
import ConsolePage from './page/ConsolePage';
import ControllerPage from './page/ControllerPage';
import GamesPage from './page/GamesPage';
import Main from './page/Main';
import TvPage from './page/TvPage';
import AccountPage from './page/AccountPage';
import RegisterPage from './page/RegisterPage';
import SignInPage from './page/SignInPage';

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Switch } from 'react-router-dom';

//private routes
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

// redux part 
import { Provider } from 'react-redux';
import store from './store'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Navbar />
          <Switch>
            <PrivateRoute component={Main} path="/" exact />
            <PrivateRoute component={AccountPage} path="/account" exact />
            <PrivateRoute component={ConsolePage} path="/console" exact />
            <PrivateRoute component={ControllerPage} path="/controller" exact />
            <PrivateRoute component={GamesPage} path="/games" exact />
            <PrivateRoute component={TvPage} path="/tv" exact />
            <PublicRoute restricted={true} component={SignInPage} path="/sign-in" exact />
            <PublicRoute restricted={true} component={RegisterPage} path="/register" exact />
          </Switch>
          <Footer />



        </div>
      </Provider>
    );
  }
}

export default App;
