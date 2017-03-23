import  React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import UserInfoForm from '../containers/UserInfoForm';
import AllUserDetail from '../containers/AllUserDetail';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">User Detail Form</h1>
          <UserInfoForm />
          <AllUserDetail />
        </div>
      </MuiThemeProvider>
    )
  }
};