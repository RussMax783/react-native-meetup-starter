import env from './env'

let Reactotron = {}

if (env === 'development') {
  Reactotron = require('reactotron-react-native').default

  Reactotron.configure()
    .useReactNative()
    .connect()
}

export default Reactotron
