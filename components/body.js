import React, {Component} from 'react'
import{
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Note from './note'

export default class Body extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.list}>
        {this.props.notesList.length !== 0 ?
          this.props.notesList.map((note, i)=>(
            <View key={i}>
              <Note note={note}/>
              <TouchableOpacity
                onPress={()=>this.props.deleteNote(note)}
                style={{
                  backgroundColor: '#3A5683',
                  borderRadius: 10,
                  position: 'absolute',
                  right: 30,
                  top: 10,
                  padding: 10
                }}
              >
                <Text style={{color: '#FFF'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          )) : (
            <Image
            style={{margin:60, width:200, height:200}}
            source={require('../Images/add1.png')}/>
          )
      }
      </View>

    )
  }
}

const styles = StyleSheet.create({
  list:{
    flex: 9
  }
})
