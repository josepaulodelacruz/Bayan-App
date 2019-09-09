import React from 'react'

import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { StyleSheet } from 'react-native'

const Bayanivation = () => {
  return (
    <Icon name='dice-five' size={70} style={styles.iconStyle} />
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    transform: [{ rotate: '50deg' }],
    color: '#fe941a'
  }
})

export default Bayanivation
