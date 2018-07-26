import { createStackNavigator } from 'react-navigation'
import Settings from 'src/screens/settings'

export default createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: 'Dashboard',
      }),
    },
  },
  {
    initialRouteName: 'Settings',
    headerMode: 'screen',
  }
)
