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
import store from '../store/AppStore'
import { createAppContainer } from 'react-navigation'
import {observer,Provider,inject} from 'mobx-react';
const AppContainer = createAppContainer(RouterConfig)


@observer
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
        <Provider  store = {store}>
            <AppContainer
                ref={navigatorRef => {
                    // console.warn('navigatorRef',navigatorRef)
                    // NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            >
            </AppContainer>
        </Provider>
      );
  }
}

export default Master