import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform } from 'react-native'
import HomeScreen from 'App/Screens/Home'
import ProfileScreen from 'App/Screens/Profile'
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen'
import LoginScreen from 'App/Screens/Login'
import OTPScreen from 'App/Screens/Login/otp'
import LendMoneyScreen from 'App/Screens/Forms/LendMoney'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */



// Helper Method
getTabBarVisibility = (navigation) => {
  const routeName = navigation.state ? navigation.state.routes[navigation.state.index].routeName : '';
  if(routeName === 'LendMoney')
  return false
  else
  return true
}
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Dashboard',
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: 'Arial', },
          android: { fontFamily: 'Roboto' },
        }),
      }
    },
  },
  LendMoney: {
    screen: LendMoneyScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Transaction',
    }
    )
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: 'Arial', },
          android: { fontFamily: 'Roboto' },
        }),
      }
    },
  },
});

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
      ),
      tabBarVisible:getTabBarVisibility(navigation)
    }
    )
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account" color={tintColor} size={25} />
      ),

    },
  }
}, {
    tabBarOptions: {
      activeTintColor: '#316064'
    }
  });

MainTabs.navigationOptions = {
  header: null
}


const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: {
      screen: MainTabs,
      navigationOptions: () => ({
        headerMode: 'none'
      }),
    },
    LoginScreen: {
      screen: MainTabs,
      navigationOptions: () => ({
        title: `Login`,
      }),
    },
    OTPScreen: {
      screen: OTPScreen,
      navigationOptions: () => ({
        title: `Verify OTP`,
      }),
    }
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'screen',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
