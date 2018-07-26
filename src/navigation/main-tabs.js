import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import DashboardStack from './dashboard-stack'
import SettingsStack from './settings-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
    },
    Settings: {
      screen: SettingsStack,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Dashboard') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
