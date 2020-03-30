import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {Platform} from 'react-native'
import HomeScreen from 'App/Screens/Home'
import ProfileScreen from 'App/Screens/Profile'
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen'
import LoginScreen from 'App/Screens/Login'
import OTPScreen from 'App/Screens/Login/otp'
 
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: 'Arial', },
          android: { fontFamily: 'Roboto' },
        }),
      }
    },
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
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
});

MainTabs.navigationOptions = {
  header : null
}


const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: {
      screen:MainTabs,
      navigationOptions: () => ({
        headerMode:'none'
      }),
    },
    LoginScreen: {
      screen:LoginScreen,
      navigationOptions: () => ({
        title: `Login`,
      }),
    },
    OTPScreen:{
      screen:OTPScreen,
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
    mode:'modal'
  }
)

export default createAppContainer(StackNavigator)
