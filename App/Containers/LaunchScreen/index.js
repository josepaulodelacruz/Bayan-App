import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Content } from 'native-base'
// Components
import ProceedBtn from '../../Components/ProceedBtn'
// styles
import Icon from '../../Components/BayanivationIcon'
import styles from './styles'

class LaunchScreen extends Component {
  render () {
    return (
      <View style={{flex: 1}}>

        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Icon />
          <Text style={{fontSize: 32, fontWeight: '900', color: '#111'}}>Bayan App</Text>
          <Text style={{fontSize: 18, color: '#757575'}}>Digital Smart City</Text>

        </View>

        <View style={{flex: 1}}>
          <ProceedBtn style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 80}} />
        </View>
      </View>

    )
  }
}

export default LaunchScreen
