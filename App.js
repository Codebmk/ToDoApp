import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import Header from './components/header'
import Body from './components/body'
import AddNote from './components/addNote'

export default class App extends Component{
  state = {
    notes: [
    'Jogging',
    'Play Golf',
    'Hairdressing',
    'Go to party'
    ],
    showAddNote: false,
    newNote: ''
  }

  save(){
    let listOfNotes = this.state.notes
    let noteToAdd = this.state.newNote

    listOfNotes.unshift(noteToAdd)
    this.setState({notes: listOfNotes, showAddNote: false})
  }


  render(){
    if(this.state.showAddNote){
      return(
        <View style={styles.main}>
          <View style={{flex:1, backgroundColor: '#5F85F0'}}>
            <TouchableOpacity style={styles.backBtn}
              onPress={()=>this.setState({showAddNote: false})}
            >
              <Text style={styles.backArrow}>{'<'}</Text>
            </TouchableOpacity>
          </View>
          <AddNote
            onInputChange={(input)=>this.setState({newNote: input})}
            onSave={()=>this.save()}
          />
        </View>
        )
    }

    return(
      <View style={styles.main}>
        <Header/>

        <Body notesList={this.state.notes}
          deleteNote={(value)=>this.setState({
            notes: this.state.notes.filter(x=>x !== value)
          })}
        />

        <TouchableOpacity style={styles.btn}
          onPress={()=>this.setState({showAddNote: true})}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
    main:{
      flex:1
    },
    btn:{
      position: 'absolute',
      bottom: 35,
      right: 30,
      borderRadius: 50,
      backgroundColor: '#3A5683',
      width: 60,
      height: 60
    },
    btnTxt: {
      alignSelf: 'center',
      fontSize: 45,
      color: '#FFF'
    },
    backArrow: {
      fontSize: 28,
      color: '#FFF'
    },
    backBtn:{
      paddingTop: 35,
      paddingLeft: 10
    }
})
