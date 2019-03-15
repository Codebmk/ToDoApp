import React, {Component} from 'react'
import{
  Text,
  View,
  StyleSheet
} from 'react-native'

export default() => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTxt}>All Notes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#3A5683',
    justifyContent: 'center',
    flex: 1
  },
  headerTxt:{
    color:'#FFF',
    fontSize: 25,
    paddingTop: 25,
    paddingLeft: 20
  }
})
