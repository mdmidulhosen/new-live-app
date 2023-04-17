import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { Component } from 'react'

export class GoLive extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/hostImage.jpg')} style={styles.goLive}>
        <View style={styles.Container}>
            <View style={styles.contentWrapper}>
                <View style={styles.Header}>
                    <TextInput style={styles.goLiveTitle} placeholderTextColor="#ffffff" placeholder='Add Your Title'/>
                </View>
                <View style={styles.Footer}>
                    <Text style={styles.goLiveBtn}>Go LIVE</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    goLive: {
        // height:'100%',
        padding:10,
        backgroundColor:'red'
    },
    Container:{
        height:'100%'
    },
    Header:{
        height:80,
        backgroundColor:'#00000060',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    goLiveTitle:{
        width:'80%',
        color:'white',
        fontSize:18,
    },
    goLiveBtn:{
        backgroundColor:'#2bc48a',
        width:150,
        paddingVertical:10,
        borderRadius:35,
        textAlign:'center',
        color:'white',
        fontWeight:700
    },
    Footer:{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        flexDirection:'row',
    },
    contentWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        height:'100%'
    }
})

export default GoLive