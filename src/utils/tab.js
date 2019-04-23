/*
* @Title:底部Tab
* @Author: 
* @Date: 
*/
import React, { Component } from 'react';
import { StackNavigator, createBottomTabNavigator,createAppContainer, TabBarBottom } from 'react-navigation';
import { Image, DeviceEventEmitter, Platform,View } from 'react-native';
import Recruitment from '../pages/App.1';
import Mine from '../pages/App.1';
import ShoppingMall from '../pages/App.1';
import Home from '../pages/App.1';
import Community from '../pages/App.2'
import { toDipsWidth } from '../common/PixelRatioUtils';
let Type = ''
let count = 0

class TabBarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topicCount: 0
    }
  }


  render() {
    // console.log(`--------------------------------`)
    return (
      <View style={{ width: toDipsWidth(35), height: toDipsWidth(25), justifyContent: 'center', alignItems: 'center' }}>
        <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
          style={{ width: 21, height: 21 }}
          resizeMode='stretch'
        />
        {
          this.props.isShowCount && this.props.badge > 0 ? <View
            style={{
              backgroundColor: '#E84D07', paddingLeft: toDipsWidth(5), paddingRight: toDipsWidth(5),
              height: toDipsWidth(14), borderRadius: toDipsWidth(7),
              paddingBottom: Platform.OS == 'ios' ? toDipsWidth(0) : toDipsWidth(2),
              position: 'absolute', right: 1, top: 1, zIndex: 1, display: 'flex',
              justifyContent: 'center', alignItems: 'center'
            }}>
            <Text style={{ fontSize: toDipsWidth(10), color: 'white' }}>{this.props.badge > 99 ? '99+' : this.props.badge}</Text>
          </View> : null
        }
      </View>
    )
  }
}




const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: '智慧工号',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={true}
            focused={focused}
            normalImage={''}
            selectedImage={''}
          />
        )
      }),
    },
    Statement: {
      screen: Recruitment,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel : '招聘',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <TabBarItem
              tintColor={tintColor}
              focused={focused}
              normalImage={''}
              selectedImage={''}
            />
          )
        }
      }),
    },
    ShoppingMall: {
      screen: ShoppingMall,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: '商城',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={''}
            selectedImage={''}
          />
        )
      }),
    },
    Community: {
      key: 'tabCommunity',
      screen: Community,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: '社区',
        tabBarIcon: ({ focused, tintColor }) => {
          console.warn('navigation',navigation)
          let params = navigation.state.params || {}
          console.warn(params)
          return (<TabBarItem
            badge = {params.badge}
            tintColor={true}
            focused={focused}
            isShowCount={true}
            normalImage={''}
            selectedImage={''}
          />)
        }
      }),
    },
    Mine: {
      screen: Mine,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={''}
            selectedImage={''}
          />
        )
      }),
    }
  },

  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName: 'Home', // 设置默认的页面组件
    backBehavior: 'initialRoute', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      // iOS属性
      // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
      activeTintColor: '#E84D07', // label和icon的前景色 活跃状态下（选中）。
      // inactiveTintColor: '#8E8E93', // label和icon的前景色 不活跃状态下(未选中)。
      // activeBackgroundColor: 'blue', //label和icon的背景色 活跃状态下（选中） 。
      // inactiveBackgroundColor: 'green', // label和icon的背景色 不活跃状态下（未选中）。
      showLabel: true, // 是否显示label，默认开启。
      style: { marginBottom: 0, backgroundColor: '#fff', height: 50 }, // tabbar的样式。
      // labelStyle:{}, //label的样式。
      // 安卓属性

      // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
      inactiveTintColor: '#666', // label和icon的前景色 不活跃状态下(未选中)。
      showIcon: true, // 是否显示图标，默认关闭。
      // showLabel:true, //是否显示label，默认开启。
      // style:{}, // tabbar的样式。
      labelStyle: { fontSize: 11, marginTop: 0 }, // label的样式。
      upperCaseLabel: false, // 是否使标签大写，默认为true。
      // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
      // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
      // scrollEnabled:false, // 是否启用可滚动选项卡。
      tabStyle: { marginBottom: 3, marginTop: 3 }, // tab的样式。
      // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
      // labelStyle:{}, // label的样式。
      iconStyle: { marginBottom: 0 }, // 图标的样式。
    }
  }
);

export default createAppContainer(Tab);
