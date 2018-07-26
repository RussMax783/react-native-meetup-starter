import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import PlaceholderScreen from 'src/screens/placeholder'
import Loading from './loading'
import Authenticate from './authenticate'
import MainTabs from './main-tabs'

const VerticalModalStack = createStackNavigator(
  {
    Main: {
      screen: MainTabs,
      navigationOptions: {
        header: null,
      },
    },
    SomeModalScreen: {
      screen: PlaceholderScreen,
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
  }
)

const AppStack = createStackNavigator(
  {
    Main: {
      screen: VerticalModalStack,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'card',
  }
)

export default createSwitchNavigator(
  {
    Loading,
    Authenticate,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
)
