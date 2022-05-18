import React, { Component } from 'react';
import Main from './Navigation'
import Login from './Pages/Login'

import { Dimensions, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;
StatusBarManager.getHeight((statusBarHeight)=>{
  global.statusBarHeight = statusBarHeight.height;
})

const window = Dimensions.get('window');


export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

  render() {
    return(<Login />)

    return(<Main />)

    }
}
