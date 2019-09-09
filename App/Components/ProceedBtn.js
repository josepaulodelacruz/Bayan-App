import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { View } from 'react-native'
const ProceedBtn = ({style}) => {
  return (
    <View style={style}>
      <Button block warning style={{marginHorizontal: 50}}>
        <Text style={{fontSize: 18, color: '#f2f2f2', fontWeight: '700'}}>Let's get Started</Text>
      </Button>
    </View>
  )
}

export default ProceedBtn
