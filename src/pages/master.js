 /*
 * @Title:母版页
 * @Author: 
 * @Date: 
 */
import React, { Component } from 'react';
import {
  NetInfo,
  AsyncStorage,
} from 'react-native';
import RouterConfig from "../utils/router";
import { createAppContainer } from 'react-navigation'
const AppContainer = createAppContainer(RouterConfig)

class Master extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }

  componentDidMount() {
  }

  componentWillUnmount (){
  }



    
 
  render() {
      // console.warn(1)
      return (
            <AppContainer
                ref={navigatorRef => {
                    // console.warn('navigatorRef',navigatorRef)
                    // NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            >
            </AppContainer>

      );
  }
}

export default Master