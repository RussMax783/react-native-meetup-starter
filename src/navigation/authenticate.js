import React from 'react'
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { Constants } from 'expo'
import { TextInput } from 'react-native-paper'
import { Button } from 'react-native-paper'

class Placeholder extends React.Component {
  state = {
    email: '',
    password: '',
  }

  login = async () => {
    Keyboard.dismiss()
    try {
      // const res = await logInUser([send user info here])
      // Do more checks on response, if good to go, navigation to app
      this.props.navigation.navigate('App')
    } catch (error) {
      // Log error and display error or what ever else you want to do.
      return
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Lets Authenticate!</Text>
        <View style={styles.form}>
          <TextInput
            label="Email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button onPress={this.login}>Log In</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  form: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
})

export default Placeholder
