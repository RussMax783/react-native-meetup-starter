import { createStackNavigator } from 'react-navigation'
import Dashboard from 'src/screens/dashboard'

export default createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
        title: 'Dashboard',
      }),
    },
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'screen',
  }
)
