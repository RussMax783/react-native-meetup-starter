import React from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import RootStack from 'src/navigation/root-stack'
import packageJson from '../package.json'
import env from 'src/env'
import Reactotron from 'src/reactotron'

console.disableYellowBox = true

if (env !== 'development') {
  // add anything you need to set up in production
}
if (env === 'development') {
  // add anything you need to set up in development
  // From Reactotron docs
  Reactotron.clear()
  console.tron = Reactotron
}

/**
 * This dives down to get the route name that you are on
 */
const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return ''
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

class App extends React.Component<AppProps, AppState> {
  state = {
    user: null,
  }

  _getUser = async () => {
    // Call something to get user, this doesn't actually have to be here
    const user = { id: 123, name: 'Russell Maxfield' }
    this.setState({ user })
    return user
  }

  /**
   * Use this to be able to do logging for tracking pages viewed
   */
  onNavigationStateChange = async (prevState, currentState) => {
    const currentScreen = getCurrentRouteName(currentState)
    const prevScreen = getCurrentRouteName(prevState)
    if (prevScreen !== currentScreen) {
      // Log event here with Google, New Relic, or some other tracking library
    }
  }

  render() {
    return (
      <PaperProvider theme={DefaultTheme}>
        <StatusBar barStyle="default" />
        <RootStack
          onNavigationStateChange={this.onNavigationStateChange}
          screenProps={{
            getUser: this._getUser,
            user: this.state.user,
          }}
        />
      </PaperProvider>
    )
  }
}

export default (env === 'development' ? Reactotron.overlay(App) : App)
