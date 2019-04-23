/*
 * @Title:路由器
 * @Author: 
 * @Date: 
 */
import React from 'react';
import {
    AsyncStorage,
    View,
    Dimensions,
    DeviceEventEmitter,
    AppState,
    Platform,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, NavigationActions } from 'react-navigation';
import { toastBottom } from '../common/ToastUtil';


import Login from '../pages/App.3'
import Tab from "./tab";
// 登陆

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height

const AppStack = createStackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },
        mode: 'card',
    }
);


// @observer
class AppStackScreen extends React.Component {
    static router = AppStack.router;

    componentDidMount() {
        console.warn('初始化app主路由')
    }


    render() {
        return (
            // <Provider  store = {store}>
            <AppStack navigation={this.props.navigation} />
            // </Provider>
        );
    }
}


const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },

        mode: 'card',
    }
);


class AuthLoadingScreen extends React.Component {
    // _didFocusSubscription;
    // _willBlurSubscription;
    constructor(props) {
        super(props);
        this._bootstrapAsync();
        this.flage = false
    }
    jumpSecondActivity(value) {
        // console.log(JSON.parse(value))
        let InformType;
        if (Platform.OS == 'android') {
            InformType = JSON.parse(value)
        } else {
            console.warn('----------------------------InformType-------------------')
            InformType = value
        }
        // let InformType = Platform.OS == 'android' ? JSON.parse(value) : value
        console.warn('tongzhi', InformType)
        if (InformType.EnumPushType == 1) {
            if (InformType.EnumMessageType == 230) {
                this.props.navigation.navigate('MonthReport', { Year: InformType.Year, Month: InformType.Month })
            } else {
                this.props.navigation.navigate('NoticeAll')
            }

        } else if (InformType.EnumPushType == 2) {
            if (InformType.EnumMessageType == 90) {
                this.props.navigation.navigate('Personnel', { Type: 90, NotificationType: '记工' })
            } else if (InformType.EnumMessageType == 80 || InformType.EnumMessageType == 170) {
                this.props.navigation.navigate('Personnel', { Type: 80, NotificationType: '人事' })
            } else if (InformType.EnumMessageType == 60) {
                this.props.navigation.navigate('Personnel', { Type: 60, NotificationType: '项目站长' })
            } else if (InformType.EnumMessageType == 50) {
                this.props.navigation.navigate('Personnel', { Type: 50, NotificationType: '减项单' })
            } else if (InformType.EnumMessageType == 40) {
                this.props.navigation.navigate('Personnel', { Type: 40, NotificationType: '增项单' })
            } else if (InformType.EnumMessageType == 30) {
                this.props.navigation.navigate('Personnel', { Type: 30, NotificationType: '工单' })
            } else if (InformType.EnumMessageType == 110) {
                this.props.navigation.navigate('Personnel', { Type: 110, NotificationType: '借支' })
            } else if (InformType.EnumMessageType == 120) {
                this.props.navigation.navigate('Personnel', { Type: 120, NotificationType: '奖励' })
            } else if (InformType.EnumMessageType == 130) {
                this.props.navigation.navigate('Personnel', { Type: 130, NotificationType: '补贴' })
            } else if (InformType.EnumMessageType == 140) {
                this.props.navigation.navigate('Personnel', { Type: 140, NotificationType: '汇总' })
            } else if (InformType.EnumMessageType == 230) {
                this.props.navigation.navigate('MonthReport')
            }

            // DeviceEventEmitter.emit('systemNotification');
        } else if (InformType.EnumPushType == 3) {
            this.props.navigation.navigate('PersonAuth1')
        }
    }



    componentDidMount() {
        console.warn('初始化')
        // Orientation.lockToPortrait();
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState != null && nextAppState === 'active') {
            console.log('app进入了前台')
            console.log(this.props)
            //如果是true ，表示从后台进入了前台 ，请求数据，刷新页面。或者做其他的逻辑
            if (this.flage) {
                //这里的逻辑表示 ，第一次进入前台的时候 ，不会进入这个判断语句中。
                // 因为初始化的时候是false ，当进入后台的时候 ，flag才是true ，
                // 当第二次进入前台的时候 ，这里就是true ，就走进来了。
                console.log('app进入前台')
                //测试通过
                // alert("从后台进入前台");

                // 这个地方进行网络请求等其他逻辑。
            }
            this.flage = false;
        } else if (nextAppState != null && nextAppState === 'background') {
            console.log('app进入了后台')
            this.flage = true;
        }

    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // await AsyncStorage.clear();
        console.warn('初始化')
        const userToken = await AsyncStorage.getItem('RefreshToken');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'Auth' : 'App');

        // let end = setTimeout(()=>{
        //     clearTimeout(end)
        //   },2000)
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, width: screenWidth }}>
            </View>
        );
    }
}

export default RouterConfig = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStackScreen,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

// export default RouterConfig = StackNavigator(
//     {
//         App: AppStack,
//     },
//     {
//         navigationOptions: {
//             headerBackTitle: null,
//             headerTintColor: '#333333',
//             showIcon: true,
//             swipeEnabled: true,
//             animationEnabled: false,
//         },
//         mode: 'card',
//     }
// );