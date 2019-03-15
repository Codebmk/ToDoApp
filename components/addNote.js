import React, {Component} from 'react'
import{
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'


export default(props)=>{
  return(
    <View style={{flex:9, padding: 10}}>
      <TextInput style={{flex:8, fontSize: 18}}
        placeholder='Add your note here'
        autoFocus
        multiline
        onChangeText = {props.onInputChange}
      />
      <TouchableOpacity
        onPress={props.onSave}
        style={{
          alignSelf: 'center',
          marginBottom: 25,
          padding: 10,
          paddingHorizontal: 90,
          backgroundColor: '#3A5683',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }}
      >
        <Text style={{color: 'white', fontSize: 24}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  )
}
