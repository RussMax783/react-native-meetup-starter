import React from 'react'
import { Platform, View, Text } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'

class Loading extends React.Component {
  componentDidMount() {
    this.initApp()
  }

  initApp = async () => {
    /**
     * Specify fonts we'd like to load
     */
    try {
      const fonts = Platform.select({
        android: {
          // Android font
        },
        ios: {
          // IOS font
          //'font-light': require('../../assets/fonts/your-font.otf'),
          // font-light will be the name of the font family
        },
      })
      // Load Fonts, Icons, images, videos, user, etc from storage
      const res = await Promise.all([
        this.props.screenProps.getUser(),
        Font.loadAsync({
          ...Ionicons.font,
          ...fonts,
        }),
      ])

      // Do checks against the user if you need to
      const user = res[0]
      // if (!user.admin) this.props.navigation.navigate('Authenticate')

      // If all is well, navigate to the main app and skip loading the authenticate page
      this.props.navigation.navigate('App')
    } catch (error) {
      // If anything goes wrong, its probably with with request to get user
      // so we just load the authenticate piece.
      this.props.navigation.navigate('Authenticate')
    }
  }

  render() {
    return <AppLoading />
  }
}

export default Loading
