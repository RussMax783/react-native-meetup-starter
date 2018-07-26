import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Constants } from 'expo'

const Placeholder = props => (
  <View style={styles.page}>
    <Text>Welcome to the Dashboard!</Text>
  </View>
)

const styles = StyleSheet.create({
  page: {
    marginTop: Constants.statusBarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Placeholder
