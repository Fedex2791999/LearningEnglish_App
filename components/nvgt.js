import login from './login'
import splash from './splash'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
const navigator = createStackNavigator({
  splash: {
    screen: splash
  },
  login: {
    screen: login
  },
}, {
//settings
    initialRouteName: 'splash'
})

export default createAppContainer(navigator)
