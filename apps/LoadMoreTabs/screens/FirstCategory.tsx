import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstCategory = () => {
  console.log('Mounted First screen')
  return (
    <View style={{flex:1}}>
      <Text>FirstCategory</Text>
    </View>
  )
}

export default FirstCategory

const styles = StyleSheet.create({})