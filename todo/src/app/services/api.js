import axios from 'axios'
import Config from 'react-native-config'
export default axios.create({
  baseURL: Config.ENDPOINT_URL,
  timeout: 10000
  // baseURL: 'http://192.168.5.49:1090/'
})
