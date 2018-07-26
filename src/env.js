import { Constants } from 'expo'
import pathOr from 'ramda/src/pathOr'

const localEnv = process.env.NODE_ENV || 'development'
/**
 * If you want to have a "Staging" enviornment
 */
const releaseChannel = pathOr('', ['manifest', 'releaseChannel'], Constants)

let env = localEnv

if (releaseChannel.indexOf('staging') !== -1) {
  env = 'staging'
}

export default env
